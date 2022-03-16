import LocalStorage from './local-storage';

class Server {
    async setMiddleware(app, param) {
        app.use(param);
    }
    async setVariables() {
        LocalStorage.Variables.root = __dirname;
    }
}

export default new Server();