const mongoose = require('mongoose');
// access local variables
const config = require('config');

// initialize database
const db = config.get('mongoURI');

// with promises
// connect to database
// const connectDB = () => {
// 	mongoose
// 		.connect(db, {
// 			// setup config to avoid warnings
// 			useNewUrlParser: true,
// 			useCreateIndex: true,
// 			useFindAndModify: false,
// 		})
// 		.then(() => console.log('MongoDB Connected'))
// 		.catch(err => {
// 			console.error(err.message);
// 			// exit with failure
// 			process.exit(1);
// 		});
// };

// async await
// connect to database
const connectDB = async () => {
	try {
		await mongoose.connect(db, {
			// setup config to avoid warnings
			useNewUrlParser: true,
			useCreateIndex: true,
			useFindAndModify: false,
		});
		console.log('MongoDB Connected...');
	} catch (err) {
		console.error(err.message);
		// exit with failure
		process.exit(1);
	}
};

module.exports = connectDB;
