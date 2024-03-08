import mongoose from 'mongoose';

let connected = false;

const connectDB = async () => {
	mongoose.set('strictQuery', true);

	// if the database is already connected, don't connect again
	if (connected) {
		console.log('MongoDB is already connected');
		return;
	}

	// Connect to Mongo DB
	try {
		await mongoose.connect(process.env.MONGODB_URI);
		connected = true;
		console.log('MongoDB is connected');
	} catch (error) {
		console.error('Error connecting to MongoDB: ', error);
	}
};

export default connectDB;
