import userEvent from '@testing-library/user-event'
import React,{useState} from 'react';
import {Link,useNavigate} from 'react-router-dom'

function SignIn() {
    // console.log(localStorage.infoUser)
const[emailInput,setEmailInput]=useState()
const[passwordInput,setpasswordInput]=useState()
const [check,setCheck]=useState([])
const[user,setUser]=useState(false)
const navigate=useNavigate()
function handelSignIn(e){
e.preventDefault();
setCheck(JSON.parse(localStorage.getItem("infoUser")));
// let info=Object.keys(data)
console.log(check)


if(!localStorage.infoUser.includes(emailInput)){
    alert(`seems like you dont have account ,sign up now`)
}
if(localStorage.infoUser.includes(emailInput)){
 alert("welcome")  
}
// if(localStorage.infoUser.includes(emailInput)){
// alert("wrong password")
// }
}
// function handelclick(e){

//   e.preventDefault();
  
// }

function handelSignIn(){
  setUser(true);
  console.log(user)
  // navigate("/")
}
  return (
    <div>
      <section className="flex flex-col md:flex-row h-screen items-center">
    
    <div className="bg-indigo-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
      <img src="/src/assets/login.png" alt="" className="w-full h-full object-cover" />
    </div>
  
    <div className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:mx-0 md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
          flex items-center justify-center">
  
      <div className="w-full h-100">
  
  
        <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">Log in to your account</h1>
  
        <form className="mt-6" action="#" method="POST" onSubmit={handelSignIn}>
          <div>
            <label className="block text-gray-700">Email Address</label>
            <input type="email" name="" id="" placeholder="Enter Email Address" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-amber-300 focus:amber-300 focus:outline-none   focus:bg-white"  value={emailInput} onChange={(e)=>setEmailInput(e.target.value)} />
          </div>
  
          <div className="mt-4">
            <label className="block text-gray-700">Password</label>
            <input type="password" name="" id="" placeholder="Enter Password"  className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-amber-300
                  focus:bg-white focus:outline-none" required value={passwordInput} onChange={(e)=>setpasswordInput(e.target.value)}/>
          </div>
  
         
  
          <button type="submit" className="w-full block bg-amber-300   hover:bg-amber-300 focus:bg-amber-200 text-white font-semibold rounded-lg
                px-4 py-3 mt-6"  >Log In</button>
                {/*onClick={(e)=>handelclick(e)} */}
        </form>
  
        <button type="button" className="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300" >
              <div className="flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg"  className="w-6 h-6" viewBox="0 0 48 48"></svg>
              <span className="ml-4">
              Log in
              with
              Google</span>
              </div>
            </button>
  
        <p className="mt-8">Need an account? <a  className="text-blue-500 hover:text-blue-700 font-semibold"><Link to="/signup">Create an account</Link></a></p>
  
  
      </div>
    </div>
  
  </section>
 
    </div>
  )
}

export default SignIn

