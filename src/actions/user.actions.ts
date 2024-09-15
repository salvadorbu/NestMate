'use server'

import User from "../models/user.model";
import connectToDatabase from "../config/database"

export async function getUser(params: { userId: string }) {
    try {
        await connectToDatabase()
        const { userId } = params;

        const user = await User.findOne({
            userId: userId,
        });

        return user;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export async function createUser(params: {
    userId: string;
    name: string;
    age: number;
    bio: string;
    email: string;
    onboarded: boolean;
    rentMin?: number;
    rentMax?: number;
    smoker?: boolean;
    sleepType?: string;
    cleanliness?: string;
}) {
    try {
        await connectToDatabase();

        const newUser = new User({
            userId: params.userId,
            name: params.name,
            age: params.age,
            bio: params.bio,
            email: params.email,
            onboarded: params.onboarded,
            rentMin: params.rentMin,
            rentMax: params.rentMax,
            smoker: params.smoker,
            sleepType: params.sleepType,
            cleanliness: params.cleanliness,
        });

        const savedUser = await newUser.save();
        return savedUser;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export async function findMatches(params: { userId: string }) {
    
}
