import {id,app} from './modules/auth.mjs'
import{loginAnon,logout} from './modules/login.mjs'


//submit button 
const submit = document.getElementById("login");
submit.addEventListener('click',()=>{
   loginAnon(app);
})
