import express from 'express';
import router from './router/index';
import Server from './server';

const app = express();
const mwParams = [router];

require('dotenv').config();

(async () => {
    await Server.setVariables();
    mwParams.forEach(async (param) => {
        await Server.setMiddleware(app, param);
    });
    app.listen(process.env.PORT || 5678, () => {
        console.log(`IvtCloud is listening ${process.env.PORT}`);
    });
})();