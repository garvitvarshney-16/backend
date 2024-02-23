import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

// const connectDB = async () => {
//     try {
//         const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         console.log(`/n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
//     } catch (error) {
//         console.log("MongoDB connection error ", error);
//         process.exit(1)
//     }
// }

export const connectDB = async () => {
  try {
    const connection = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    console.log(
      `MongoDB connected !! DB HOST: ${connection.connection.host}`
    );
  } catch (error) {
    console.log("MongoDB connection error ", error);
    process.exit(1);
  }
};

// const connectDB = async () => {
//   try {
//     const uri = `${process.env.MONGODB_URI}/${DB_NAME}`;
//     const encodedUri = encodeURI(uri);
//     const connectionInstance = await mongoose.connect(encodedUri);
//     console.log(
//       `\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`
//     );
//   } catch (error) {
//     console.log("MongoDB connection error ", error);
//     process.exit(1);
//   }
// };

export default connectDB;
