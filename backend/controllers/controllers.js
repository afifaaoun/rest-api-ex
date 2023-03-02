const productSchema=require('../model/product');


//get all products


//create new product

exports.AddProduct=async(req,res)=>{
const newProduct= new productSchema(req.body);
try{
    await newProduct.save();
    res.status(200).json({msg:'product created',newProduct})
}
catch(error){
    res.status(500).json({msg:'cannot create a new product'})
}


}

//get all contact
exports.getProduct=async(req,res)=>{
    try{
        const productList=await productSchema.find();
        res.status(200).json({msg:'all products',productList})
    }
    catch{
        res.status(500).json({msg:'cannot get product'})
    }

}

//deleteProduct
exports.deleteProduct=async(req,res)=>{
    try{
        const {id}=req.params;
        await productSchema.findByIdAndDelete(id);
        res.status(200).json({msg:'product deleted successfully'})
    }
    catch{
        res.status(500).json({msg:'product not deleted'})
    }
}

//updateProduct
exports.updateProduct=async(req,res)=>{
    try{
        const {id}=req.params;
        await productSchema.findByIdAndUpdate(id,{$set:{...req.body}},{new:true}); //traja3li doc jdid
        res.status(200).json({msg:'product updated successfully'})
    }
    catch{
        res.status(500).json({msg:'product not updated'})
    }
}