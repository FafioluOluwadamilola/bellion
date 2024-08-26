import Product from "../models/productModel.js"

export const getProducts = async (req,res) => {
    try{const products = await Product.find({})
    } catch (error){
        res.status(500).json({message: error.message})
    }
}

export const createProduct = async (req,res) => {
    const { name, brand, category, price, description, countInStock} = req.body
    const owner = req.params
    try{
        if(!req.file){
            return res.status(400).json({message: "Please upload an image."})
        }
        const product = await Product.create({
            name, 
            image:`uploads/${req.file.filename}`, 
            brand, 
            category:category.split(','), 
            description, 
            price, 
            countInStock,
            owner: owner._id
        })
        res.status(201).json({message: "Product created successfully", product})
    } catch (error){
        res.status(500).json({message: error.message})
    }
}