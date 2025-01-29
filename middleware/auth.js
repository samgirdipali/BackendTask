let auth = passport.authenticate('local',{session:false})

passport.use(new localstatergy(async(USERNAME, password, done)=>{
  try{
      console.log('received request', USERNAME, password);
    let user =  await Todo.findOne({username:USERNAME});
    if(!user){
      return done(null, false,{message: 'User not found'})
    }
    let match =  user.password === password? true: false;
    // let match = await user.comparePassword(password);
    if(match){
      return done(null, user)
    }else{
      return done(null, false, {message: 'Password is incorrect'})
    }
  }
  catch(err){
    console.log(err);
  }
}))
