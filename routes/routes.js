const MainController = require('../controllers/main_controller');

module.exports = (app) => {

    app.get('/demo', MainController.getDemo);

    app.post('/demo', MainController.postDemo);

};