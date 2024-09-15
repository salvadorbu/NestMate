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

        const userObject = savedUser.toObject();

        const { _id, __v, ...cleanedUser } = userObject;

        return cleanedUser;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export async function findMatches(params: { userId: string }) {
    try {
        await connectToDatabase();

        const currentUser = await User.findOne({
            userId: params.userId,
        });

        if (!currentUser) {
            throw new Error("User not found");
        }

        const otherUsers = await User.find({
            userId: { $ne: params.userId },
        });

        const matches: [string, string][] = [];

        otherUsers.forEach(user => {
            let matchCount = 0;

            if (user.cleanliness === currentUser.cleanliness) {
                matchCount++;
            }

            if (user.sleepType === currentUser.sleepType) {
                matchCount++;
            }

            if (user.smoker === currentUser.smoker) {
                matchCount++;
            }

            if (user.rentMax && currentUser.rentMax && user.rentMax <= currentUser.rentMax) {
                matchCount++;
            }

            if (matchCount >= 2) {
                matches.push([user.email, user.name]);
            }
        });

        return matches;

    } catch (error) {
        console.log(error);
        throw error;
    }
}

