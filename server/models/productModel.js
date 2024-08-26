import mongoose from "mongoose";

const Schema = mongoose.Schema

const productSchema = new Schema ({
    name: {type:String, required: true},
    image: {type:String, required: true},
    brand: {type:String, required: true},
    category: {type:[String], required: true},
    description: {type:String, required: true},
    price: {type:Number, required: true},
    countInStock: {type:Number, required: true},
    owner:{type: Schema.Types.ObjectId, ref:'users'}
})

// productSchema.statics.createProduct = async function (name, image, brand, category, description, price, countInStock) {
//     if(!name || !image || !brand || !category || !description || !price ||!countInStock){
//         throw new Error('Please provide all the fields')
//     }
//     const product = new this({name,
//         image, 
//         brand, 
//         category, 
//         description, 
//         price, 
//         countInStock})

//     return product.save()
// }

const Product = mongoose.model('products', productSchema)

export default Product