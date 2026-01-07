import { Double } from "bson";
import mongoose from "mongoose";

const Patientschema = new mongoose.Schema({
     patientName:{
          type: String,
           required: true,
           uppercase: true,
},
     Disease:{
         type:String,
         required :true,
},
    Status:{
         type: Boolean ,
         enum:["Single","Married","Transgender"],
         required: true,
         uppercase :true,
 },
     Age :{
         type:[Double,String],
         required: true,

},
      BloodGroup:{
         type: String,
         enum : ["AB","AB+","O+","OB","O-","AB-",],
         required:true,
},
     Allotmenttype:{
          type:mongoose.Schema.Types.ObjectId,
          ref:"Hospital",
          required:true,
          uppercase: true,
},
    patientID:{
         type:String,
         required:true,
         default:0 ["fill the blank"],
    }
         
},{timestamps:true})



export const Patient = mongoose.model("Patient",Patientschema)