// import React from 'react'

function AddProduct() {
  return (
    <div>
        <h2 className="text-2xl m-auto font-bold text-rose-500 mx-5 my-5">Add Product</h2>
        <form className="m-auto">
            <div className="flex flex-col space-y-2">
                <label htmlFor="name">Product Name</label>
                <input type="text" name="name" id="name" className="border border-rose-500 p-2 rounded-lg" />
            </div>
            <div className="flex flex-col space-y-2">
                <label htmlFor="price">Price</label>
                <input type="number" name="price" id="price" className="border border-rose-500 p-2 rounded-lg" />
            </div>
            <div className="flex flex-col space-y-2">
                <label htmlFor="category">Category</label>
                <input type="text" name="category" id="category" className="border border-rose-500 p-2 rounded-lg" />
            </div>  
            <div className="flex flex-col space-y-2">
                <label htmlFor="brand">Brand</label>
                <input type="text" name="brand" id="brand" className="border border-rose-500 p-2 rounded-lg" />
            </div>
            <div className="flex flex-col space-y-2">
                <label htmlFor="description">Description</label>
                <textarea name="description" id="description" className="border border-rose-500 p-2 rounded-lg"></textarea>
            </div>
            <div className="flex flex-col space-y-2">
                <label htmlFor="count">Count</label>
                <input type="number" name="count" id="count" className="border border-rose-500 p-2 rounded-lg" />
            </div>
            <div className="flex flex-col space-y-2">
                <label htmlFor="image">Image</label>
                <input type="file" name="image" id="image" className="border-2 border-dashed border-rose-500 p-2 rounded-lg" />
            </div>
            <div className="flex flex-col my-5">
                <button className="bg-rose-500 text-white py-2 rounded-lg">Add Product</button>
            </div>
        </form>
    </div>
  )
}

export default AddProduct