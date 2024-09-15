import { Schema, models, model, Document } from "mongoose";

const propertySchema = new Schema({
    address: { type: String, required: true },
    img_link: { type: String, required: true },
    rent: { type: Number, required: true },
    num_rooms: { type: Number, required: true },
    num_bathrooms: { type: Number, required: true },
    pets_allowed: { type: Boolean, required: true },
})

const Property = models.Property || model("Property", propertySchema);

export default Property;