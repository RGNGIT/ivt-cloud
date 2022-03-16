import express from 'express';
import router from './router/index';

const app = express();

require('dotenv').config();
app.use('/api', router);



(async () => {
    app.listen(process.env.PORT || 5678, () => {
        console.log(`IvtCloud is listening ${process.env.PORT}`);
    });
})();