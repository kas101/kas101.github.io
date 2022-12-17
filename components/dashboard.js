import {id,app} from './modules/auth.mjs'
import{logout} from './modules/login.mjs'


//logout of dashboard
const signout = document.getElementById('signout');
signout.addEventListener('click',()=>{
    //pass logout app from auth
    logout(app)
})
