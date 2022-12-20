import {mongo,products} from "./db.mjs"

const stock_body= document.getElementById('view');
const parent = document.getElementById('stock_container');
 

stock_body.onload=()=>{
  getProductDetails();
}

const addRow=(value)=>{
  const row = document.createElement('div');
  row.setAttribute('class','row p-3 bg-primary rounded mb-3');
  row.innerHTML=value;
  parent.append(row);
}
const getProductDetails= async ()=>{
  const stock= await products.find();
 
let elements = stock.map((value)=>{
  const innerHtml=` 
  <div class="col-8 border-end border-white " id="stock_details">
  <ul style="list-style-type:none; color: white;" id="stock-item-data">
      <li id="product_name">${value.product_name}</li>
      <li id="price">${value.price}</li>
      <li id="description">${value.description}</li>
     
  </ul>
</div>
<div class="col-2 border-end border-white ">
  <img src=${value.image}id="image">
</div>
<div class="col-2 " id="stock_control"></div>
</div>
</div> 
`

return innerHtml;
});

elements.forEach(value => {
  addRow(value)
});
console.log(elements)
}







  
  

