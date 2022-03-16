import fs from 'fs';
import unzipper from 'unzipper';
import Storage from '../local-storage'

class StaticDataService {
    async writeFiles(zip) {
        return new Promise((res, rej) => {
            let readStream = fs.createReadStream(zip.data)
            .pipe(unzipper.Extract({path:`${Storage.Variables.root}/static`}));
            readStream.on('finish', () => {
                res('OK');
            });
        });
    }
    async readFiles() {
        let array = [];
        let res;
        do {
            res = await this.fileParser().next();
            array.push(res.value);
        } while (! res.done);
        return array;
    } 
    private* fileParser() {
        let files = fs.readdirSync(`${
            Storage.Variables.root
        }/static`);
        for (let file of files) {
            yield {
                Name : file,
                Data : this.getBase64(fs.readFileSync(`${
                    Storage.Variables.root
                }/static/${file}`))
            };
        }
    }
    getBase64(file) {
        return Buffer.from(file).toString('base64');
    }
}

export default new StaticDataService();
