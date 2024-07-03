import conf from "../conf/conf.js";
import { Client, Account, ID } from "appwrite";

export class AuthService {
  client;
  account;

  constructor() {
    this.client = new Client();
    this.client
      .setEndpoint(conf.appwriteURL)
      .setProject(conf.appwriteProjectId);
    this.account = new Account(this.client);
  }

  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
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
      return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      throw error;
    }
  }

  getCurrentUser = async () => {
    try {
      return await this.account.get();
    } catch (error) {
      console.error("Error fetching user data:", error);
      throw error;
    }
  };

  async logout() {
    try {
      await this.account.deleteSessions();
    } catch (error) {
      console.error("Logout failed:", error);
      throw error;
    }
  }
}

const authService = new AuthService();

export default authService;
