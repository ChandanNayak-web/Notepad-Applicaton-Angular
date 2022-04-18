const mongoose = require('mongoose');


const mongoURI = "mongodb+srv://chandan:Trident248@chandannayak.f1bzz.mongodb.net/inotebook?retryWrites=true&w=majority"

const connectToMongo = () => {
    mongoose.connect(mongoURI, () => {
        console.log('connect to mango sucess fully');
        
    })
}

// var connectToMongo = async () => {
//     try {
//       const conn = await mongoose.connect(mongoURI, {
//         useUnifiedTopology: true,
//         useNewUrlParser: true,
//       })
  
//       console.log(`MongoDB Connected: ${conn.connection.host}`)
//     } catch (error) {
//       console.error(`Error: ${error.message}`)
//       process.exit(1)
//     }
//   }





module.exports = connectToMongo;
