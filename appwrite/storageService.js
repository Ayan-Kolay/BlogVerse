/* eslint-disable no-useless-catch */
/* eslint-disable no-empty */
import conf from "../conf/conf";
import { Client, ID, Storage } from "appwrite";

export class StorageService {
    client = new Client();
    storage;

    constructor() {
        this.client.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectId)
        this.storage = new Storage(this.client);
    }

    async uploadFile(file) {
        try {
            return await this.storage.createFile(conf.appwriteBucketId, ID.unique(), file);
        } catch (error) {
            // throw error;
            return false;
        }
    }
    async deleteFile(fileId) {
        try {
            await this.storage.deleteFile(conf.appwriteBucketId, fileId);
            return true;
        } catch (error) {
            return false;
        }
    }
    getFilePreview(fileId) {
        return this.storage.getFilePreview(conf.appwriteBucketId, fileId)
    }
}

const storgeService = new StorageService();
export default storgeService;