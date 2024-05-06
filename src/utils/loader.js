const fastGlob = require('fast-glob');
const path = require('path');

// Função para carregar dinamicamente as rotas
function loadRoutes(app) {
	const routes = fastGlob.sync('**/*.js', {
		cwd: path.join(__dirname, '..', 'routes'),
	});
	routes.forEach((routeFile) => {
		const routePath = path.resolve(__dirname, '..', 'routes', routeFile);
		const route = require(routePath);
		app.use(route);
	});
}

// Função para carregar dinamicamente os arquivos HTML
function loadViews(app) {
	const views = fastGlob.sync('**/*.html', {
		cwd: path.join(__dirname, '..', 'views'),
	});
	views.forEach((viewFile) => {
		const viewPath = path.resolve(__dirname, '..', 'views', viewFile);
		app.use(express.static(viewPath));
	});
}

function loadModels(connection) {
	const models = [];

	// Carrega dinamicamente todos os modelos
	fastGlob
		.sync('**/*.js', { cwd: path.join(__dirname, '../models') })
		.forEach((file) => {
			const model = require(path.resolve(__dirname, '../models', file));
			model.init(connection);
			models.push(model); // Armazena a instância do modelo
		});

	// Configura as associações após a inicialização de todos os modelos
	models.forEach((model) => {
		if (model.associate) {
			model.associate(connection.models);
		}
	});
}

module.exports = { loadRoutes, loadViews, loadModels };
