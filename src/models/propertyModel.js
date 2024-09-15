import { Schema, models, model, Document } from "mongoose";

const propertySchema = new Schema({
    Address: { type: String, required: true },
    Img_Link: { type: String, required: true },
    Rent: { type: Number, required: true },
    Bed: { type: Number, required: true },
    Bath: { type: Number, required: true },
    Pets: { type: String, required: true },
})

const Property = models.Property || model("Property", propertySchema);

export default Property;