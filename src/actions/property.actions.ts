'use server'

import Property from "../models/propertyModel";
import connectToDatabase from "../config/database";
import { Types, Document } from 'mongoose';

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

export async function getPropertyById(params: { propertyId: string }) {
    try {
      await connectToDatabase();
      const { propertyId } = params;
      const objectId = new Types.ObjectId(propertyId);
      const property = await Property.findOne({ _id: objectId });
  
      if (!property) {
        throw new Error('Property not found');
      }
  
      const plainProperty = property.toObject();
  
      plainProperty.id = plainProperty._id.toString();
      delete plainProperty._id;
      return plainProperty;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

