import mongoose ,{Schema} from "mongoose";



const subscriptionSchmea = new Schema({
    subscriber :{
        type : Schema.Types.ObjectId, // one who is subscribing
        ref: "User"
    },
    channel :{
        type : Schema.Types.ObjectId, // one who is channel owner
        ref: "User"
    },

},{
    timestamps : true
})



export const Subscription = mongoose.model("Subscription", subscriptionSchmea)
