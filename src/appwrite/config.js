
import { Client, Account, Databases, Storage, Query } from "appwrite";
import conf from "../conf/conf";


class Service {

    client = new Client();
    databases;
    bucket;

    constructor() {

        this.client
            .setEndpoint(conf.appwriteURL)
            .setProject(conf.appwriteProjectId);

        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({ title, slug, content, featuredImage, status, userId }) {
        try {

            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,

                {
                    title,
                    contnet,
                    featuredImage,
                    status,
                    userId
                }
            )

        } catch (error) {
            console.log(`config.js :: createPost() :: error ❌ : ${error}`)
        }
    }

    async updatePost(slug, { title, content, featuredImage, status, userId }) {
        try {

            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,

                {
                    title,
                    contnet,
                    featuredImage,
                    status,
                    userId
                }
            )

        } catch (error) {
            console.log(`config.js :: updatePost() :: error ❌ : ${error}`)
        }
    }

    async deletePost(slug) {
        try {

            return await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )

            return true;

        } catch (error) {
            console.log(`config.js :: deletePost() :: error ❌ : ${error}`);
            return false;
        }
    }

    async getPost(slug) {
        try {

            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )


        } catch (error) {
            console.log(`config.js :: getPost() :: error ❌ : ${error}`);
            return false;
        }
    }

    async getPost(query = [Query.equal("status", "active")]) {
        try {

            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries
            )


        } catch (error) {
            console.log(`config.js :: getPosts() :: error ❌ : ${error}`);
            return false;
        }
    }

    // file uploading/deletion

    async uploadFile(file) {
        try {

            return await this.bucket.uploadFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )

        } catch (error) {
            `config.js :: uploadFile() :: error ❌ : ${error}`
        }
    }

    async deleteFile(fileId) {
        try {

            return await this.bucket.deleteFile(
                conf.appwriteBucketId,
                ID.unique(),
                fileId
            )

            return true;

        } catch (error) {
            `config.js :: deleteFile() :: error ❌ : ${error}`;
            return false;
        }
    }

    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )
    }


}

const service = new Service()
export default service