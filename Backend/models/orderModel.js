const{Schema , model}= require('../connection')

const mySchema=new Schema({
    merch:String,
    quantity:Number,
    price:Number,
    user:String,
    createdat:Number,
})

module.exports=model("order",mySchema)