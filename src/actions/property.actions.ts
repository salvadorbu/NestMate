'use server'

import Property from "../models/propertyModel";
import connectToDatabase from "../config/database";
import { Types } from 'mongoose';

interface PropertyDocument {
    _id: Types.ObjectId;
    Address: string;
    Img_Link: string;
    Rent: number;
    Bed: number;
    Bath: number;
    Pets: string;
}

export async function getProperties(rentMin?: number, rentMax?: number) {
    try {
        await connectToDatabase()

        let query = {};
        if (rentMin !== undefined && rentMax !== undefined) {
            query = { Rent: { $gte: rentMin, $lte: rentMax } };
        } else if (rentMin !== undefined) {
            query = { Rent: { $gte: rentMin } };
        } else if (rentMax !== undefined) {
            query = { Rent: { $lte: rentMax } };
        }

        const properties = await Property.find(query).lean();

        return properties.map((property: any) => ({
            id: property._id.toString(),
            address: property.Address,
            imgLink: property.Img_Link,
            rent: property.Rent,
            numRooms: property.Bed,
            numBathrooms: property.Bath,
            petsAllowed: property.Pets === "TRUE"
        }));
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

        const newProperty = new Property({
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

        const savedProperty = await newProperty.save();

        const propertyObject = savedProperty.toObject();

        return propertyObject;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export async function findMatches(params: { userId: string }) {
    
}
