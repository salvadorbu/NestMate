'use server'

import PostModel from "../models/postModel"
import connectToDatabase from "../config/database"

export async function getPosts() {
    try {
        await connectToDatabase()
        const data = JSON.parse(JSON.stringify(await PostModel.find()))

        //console.log(data)
        //throw new Error('Error fetching posts')

        return {data}
    } catch (error) {
        return {errMsg: error.message}
    }
}
