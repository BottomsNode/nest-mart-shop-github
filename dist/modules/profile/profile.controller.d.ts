import { ProfileService } from './profile.service';
export declare class ProfileController {
    private readonly service;
    constructor(service: ProfileService);
    uploadFile(file: any): Promise<{
        message: string;
        fileName: string;
        filePath: string;
    }>;
    uploadMultipleFiles(files: Array<Express.Multer.File>): Promise<{
        message: string;
        fileNames: string[];
        count: number;
    }>;
}
