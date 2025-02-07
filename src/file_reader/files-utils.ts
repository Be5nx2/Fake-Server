import fs from 'node:fs'


export interface FileContent {
    fileName: string,
    body: string,
}

export class FilesUtil {
    private pathFolder: string;

    constructor(pathFolder: string) {
        this.pathFolder = pathFolder;
    }

    public getFileContentByFileName(): FileContent[] {
        const listOfFileContent = fs.readdirSync(this.pathFolder, { withFileTypes: true })
            .filter(item => !item.isDirectory())
            .map(item => item.name)
            .map(fileName => {
                const body = fs.readFileSync(`${this.pathFolder}/${fileName}`, 'utf-8')
                return {
                    fileName,
                    body
                }
            });

        return listOfFileContent;
    }

}
