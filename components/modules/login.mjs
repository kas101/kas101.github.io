const loginAnon = async(app)=> {
  // Create an anonymous credential
  const credentials = Realm.Credentials.anonymous();
  
    // Authenticate the user
    const user = await app.logIn(credentials);
    // `App.currentUser` updates to match the logged in user
    console.assert(user.id === app.currentUser.id);
    if(user.id === app.currentUser.id){
      //if user redirect to dashboard
      window.location.href='../dashboard.html'} 
    
    }


    const logout= async(app)=>{
      await app.currentUser.logOut();
  
  }

  export {loginAnon,logout}
  