import { time, timeEnd } from "console"
import mongoose from "mongoose"

const Hospitalschema = new mongoose.Schema({
      HospitalName:{
            type:String,
            required: true,
            uppercase: true,
}, 
     Address:{
         type:String,
          required:true,
          uppercase:true,
     
},
     PinCode:{
         type: Number,
         required:true,
},
     Specialization:[{
         type:String,
         required:true,
         uppercase:true,
}],
     Timing:{
         type:time,
         closingtime:timeEnd,
         required:true,
     },

      
       
},{timestamps:true})


export const Hospital = mongoose.model("Hospital",Hospitalschema)