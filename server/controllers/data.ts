import {Request, Response} from 'express';
import StaticDataService from '../services/static';

class DataController {
    async uploadData(req, res:Response) {
        res.json(await StaticDataService.writeFiles(req.files.package));   
    }
    async getData(req:Request, res:Response) {
        res.json(await StaticDataService.readFiles());
    }
}

export default new DataController();