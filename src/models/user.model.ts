import { Schema, models, model } from "mongoose";

const UserSchema = new Schema({
    userId: { type: String, required: true },
    name: { type: String, required: true },
    age: { type: Number, required: true },
    bio: { type: String, required: true },
    email: { type: String, required: true },
    onboarded: { type: Boolean, required: true },
    rentMin: { type: Number, default: 0 },
    rentMax: { type: Number, default: 10000 },
    smoker: { type: Boolean, default: false },
    sleepType: { type: String, default: 'Early Bird'}, // Early bird, shift worker, night owl
    cleanliness: { type: String, default: 'Moderate'}, // spotless, moderate, relaxed
})

const User = models.User || model("User", UserSchema);

export default User;
