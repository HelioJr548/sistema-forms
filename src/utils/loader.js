const fastGlob = require('fast-glob');
const path = require('path');
const fs = require('fs');
const chokidar = require('chokidar');

// Função para carregar dinamicamente os arquivos com base no diretório e no cache
function loadDynamically(directory, cache, app, callback) {
	if (!cache.data) {
		cache.data = fastGlob.sync('**/*.js', { cwd: directory });
	}
	cache.data.forEach((file) => {
		const filePath = path.resolve(directory, file);
		const module = require(filePath);
		callback(app, module);
	});
	const watcher = chokidar.watch(directory, { ignoreInitial: true });
	watcher.on('all', () => {
		cache.data = null;
	});
}

// Função para carregar dinamicamente as rotas
function loadRoutes(app) {
	loadDynamically(
		path.join(__dirname, '..', 'routes'),
		routeCache,
		app,
		(app, route) => {
			app.use(route);
		}
	);
}

// Função para carregar dinamicamente os arquivos HTML
async function loadViews(app, express) {
	const viewsDir = path.join(__dirname, '..', 'views');
	try {
		const directories = await fs.promises.readdir(viewsDir, {
			withFileTypes: true,
		});
		directories
			.filter((dirent) => dirent.isDirectory())
			.map((dirent) => dirent.name)
			.forEach((directory) => {
				app.use(express.static(path.join(viewsDir, directory)));
			});
	} catch (error) {
		console.error('Error loading views:', error);
	}
}

// Função para carregar dinamicamente os modelos
function loadModels(connection) {
	// Primeiro, inicializa todos os modelos
	loadDynamically(
		path.join(__dirname, '../models'),
		modelCache,
		connection,
		(connection, model) => {
			model.init(connection);
		}
	);

	// Depois de todos os modelos serem inicializados, faz as associações
	loadDynamically(
		path.join(__dirname, '../models'),
		modelCache,
		connection,
		(connection, model) => {
			if (model.associate) {
				model.associate(connection.models);
			}
		}
	);
}

// Caches para rotas e modelos
const routeCache = {};
const modelCache = {};

module.exports = { loadRoutes, loadViews, loadModels };
