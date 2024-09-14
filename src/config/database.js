import mongoose from 'mongoose'

const connectToDatabase = async () => {
    if (mongoose.connections[0].readyState) {
        return true;
    }

    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Connected to database')
        return true
    } catch (error) {
        console.log('Error connecting to database', error)
        return false
    }
}

export default connectToDatabase

