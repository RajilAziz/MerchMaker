const{Schema , model}= require('../connection')

const productSchema=new Schema ({
      type:String,
      sellPrice:String,
      user : {type: Types.ObjectId, ref : 'users'},
      createAt:Date
})

module.exports=model('product',productSchema)