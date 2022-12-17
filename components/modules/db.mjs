import {app} from './auth.mjs'
const {
    BSON: { ObjectId },
  } = Realm;

const mongo = app.currentUser.mongoClient('mongodb-atlas');
const products= mongo.db("maizesunfeed").collection('products');

const form = document.getElementById('product');
form.addEventListener('submit',(event)=>{
    createProduct(event);
})

const getProductDetails=(event)=>{
     
}


//create a single product
const createProduct= async (event)=>{
     
    //prevent default behaviour of form submission
    event.preventDefault();
    //gets all form elements
    const product = document.getElementById('products').elements;
    
    //specific form elements
    const product_name = product.namedItem('product-name').value;
    const price = product.namedItem('price').value;
    const description = product.namedItem('description').value;
    const image = product.namedItem('image').value;

    

    console.log(product_name,price,description,image); 
    const result = await products.insertOne({
        name:product_name,
        price:price,
        description:description,
        image:image,
        tag: "admin",
      });
      console.log(result);
}



  
  

