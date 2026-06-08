// timestamps = createdAt, updatedAt
 import mongoose from 'mongoose'

 const userSchema=new mongoose.Schema(
   {
    username:{
      type: String,
      required: true,
      unique: true,
      lowercase: true
    },
    email:{
      type: String,
      required: true,
      unique: true,
      lowercase: true
    },
    password:{
      type: String,
      required: true
    }
   },
   {timestamps: true}
);

 export const User=mongoose.model('User',userSchema);

 // in mongodb this User is saved as users
 // lowercase + plural
 // keyword inside model 'User' is saved in mongodb
 //in export we can give different names, for User

//  Client
//   ↓
// Express Route
//   ↓
// Mongoose Model
//   ↓
// MongoDB

// export const User = mongoose.model('User', userSchema);
//               ↑                       ↑
//         JS variable         Mongoose model name




// const User = mongoose.model('User', userSchema);

// await User.create({
//   name: "Abhinav"
// });

// MongoDB will create:

// Database
//  └── users
//       └── { name: "Abhinav" }



// Same schema, different models
// Suppose Doctors and Patients currently have the same fields:

// const personSchema = new mongoose.Schema({
//   name: String,
//   age: Number,
//   phone: String
// });

// const Doctor = mongoose.model("Doctor", personSchema);
// const Patient = mongoose.model("Patient", personSchema);


// Create a base schema and extend it
// Useful in larger projects.

// const personSchema = {
//   name: String,
//   age: Number,
//   phone: String
// };

// const doctorSchema = new mongoose.Schema({
//   ...personSchema,
//   specialization: String
// });

// const patientSchema = new mongoose.Schema({
//   ...personSchema,
//   disease: String
// });

// Inside Mongoose, Schema is a class used to define document structure.