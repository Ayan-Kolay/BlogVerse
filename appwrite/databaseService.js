/* eslint-disable no-useless-catch */
/* eslint-disable no-empty */
import conf from "../conf/conf";
import { Client, Databases, ID, Query } from "appwrite"

export class StorageService {
    client = new Client();
    databases;

    constructor() {
        this.client.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client);
    }

    async createPost({ title, slug, content, featuredImage, status, userId, field, userName }) {

        try {
            // console.log(slug);
            return await this.databases.createDocument(conf.appwriteDatabaseId, conf.appwriteCollectionId, slug, {
                title,
                featuredImage,
                status,
                userId,
                content,
                field,
                time: content.length / 100 >= 1 ? String(content.length / 100) : '1',
                userName
            })
        } catch (error) {
            console.log(error.message)
            throw error
        }
    }

    async updatePost(slug, { title, content, featuredImage, status, userId, field, userName }) {
        try {
            return await this.databases.updateDocument(conf.appwriteDatabaseId, conf.appwriteCollectionId, slug, {
                title,
                content,
                featuredImage,
                status,
                userId,
                field,
                time: content.length / 100 >= 1 ? String(content.length / 100) : '1',
                userName
            })
        } catch (error) {
            throw error;
        }
    }

    async deletePost(slug) {
        try {
            await this.databases.deleteDocument(conf.appwriteDatabaseId, conf.appwriteCollectionId, slug)
            return true;
        }
        catch (error) {
            return false;
        }
    }

    async getPost(slug) {
        try {
            return this.databases.getDocument(conf.appwriteDatabaseId, conf.appwriteCollectionId, slug)
        } catch (error) {
            return false;
        }
    }
    async getPosts(quries = Query.equal['status', 'active']) {
        try {
            return this.databases.getDocument(conf.appwriteDatabaseId, conf.appwriteCollectionId, quries)
        } catch (error) {
            return false;
        }
    }

}

const databaseService = new StorageService();

export default databaseService;