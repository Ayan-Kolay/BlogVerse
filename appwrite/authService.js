/* eslint-disable no-useless-catch */
import conf from '../conf/conf.js';
import { Client, Account, ID } from "appwrite";


export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
        // console.table(conf.appwriteUrl);

    }

    async createAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                // call another method
                return this.login({ email, password });
            } else {
                return userAccount;
            }
        } catch (error) {
            throw error;
        }
    }

    async login({ email, password }) {
        try {
            return await this.account.createEmailSession(email, password);
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite serive :: getCurrentUser :: error", error);
        }

        return null;
    }

    async logout() {

        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite serive :: logout :: error", error);
        }
    }
    async forgetPassword({ email }, url) {
        try {
            console.log(url);
            await this.account.createRecovery(email, url)
        } catch (error) {
            console.log(error);
            throw error
        }
    }
    async resetPassword(userId, secret, { password, passwordAgain }) {
        try {
            console.log(password);
            const resp = await this.account.updateRecovery(userId, secret, password, passwordAgain)
            console.log('hello');
            console.log(resp);
        }
        catch (error) {
            console.log(error.message);
            throw error
        }
    }
}


const authService = new AuthService();

export default authService

