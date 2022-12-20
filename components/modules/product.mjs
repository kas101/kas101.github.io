import {mongo,products} from "./db.mjs"

const form = document.getElementById('product');
form.addEventListener('click',()=>{
    createProduct();
})


//create a single product
const createProduct= async ()=>{
     //get input values
     const form_inputs= document.getElementsByClassName('form-control');
     const product_name=form_inputs[0].value;
     const price=form_inputs[1].value;
     const description=form_inputs[2].value;
     const image=form_inputs[3].value;
    const result = await products.insertOne({
        product_name:product_name,
        price:price,
        description:description,
        image:image,
        tag: "admin",
      });
      console.log(result);
}

