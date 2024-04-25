import React, { useState } from 'react'

const LoginSignup = () => {

  const [state,setState] = useState("Log In");

  const [formData, setFormData] = useState({
    username:"",
    email:"",
    password:"",
  })

  const changeHandler = (e) => {
    setFormData({...formData,[e.target.name]:e.target.value})
  }

  const login = async () => {
    console.log("login",formData);
    let responseData;
    await fetch("http://localhost:4000/login",{
      method:'POST',
      headers:{
        Accept:'application/json',
        'Content-Type':'application/json'
      },
      body:JSON.stringify(formData)
    })
    .then((res)=>res.json())
    .then((data)=>responseData=data)

    if(responseData.success){
      localStorage.setItem('auth-token',responseData.token);
      window.location.replace("/");
    }
  }


  const signup = async () => {
    console.log("signup",formData);
    let responseData;
    await fetch("http://localhost:4000/signup",{
      method:'POST',
      headers:{
        Accept:'application/form-data',
        'Content-Type':'application/json'
      },
      body:JSON.stringify(formData),
    })
    .then((res)=>res.json())
    .then((data)=>responseData=data)

    if(responseData.success){
      localStorage.setItem('auth-token',responseData.token);
      window.location.replace("/");
    }
  }

  return (
    <>
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-2/3 max-md:hidden bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <img src="" alt="" />
          </div>
          <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 max-md:w-3/4 max-md:mx-auto">
            <h2 className="text-gray-900 pb-3 font-medium text-3xl text-center">
              {state}
            </h2>
            {state==="Sign Up"?
            <div className="relative mb-4">
              <label htmlFor="username" className="leading-7 text-sm text-gray-600">Username</label>
              <input type="text" id="username" name="username" value={formData.username} onChange={changeHandler} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            :
            <div className=""></div>
            }
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={changeHandler} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <div className="relative mb-4">
              <label htmlFor="password" className="leading-7 text-sm text-gray-600">Password</label>
              <input id="password" name="password" value={formData.password} onChange={changeHandler} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></input>
            </div>
            <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={()=>{state==="Log In"?login():signup()}}>Continue</button>
            {state==="Sign Up"?
            <p className="text-xs text-gray-500 mt-3">Already have an account ? <span onClick={()=>{setState("Log In")}}> Login here</span></p>
            :
            <p className="text-xs text-gray-500 mt-3">Create an Account. <span onClick={()=>{setState("Sign Up")}}> Click here</span></p>
            }
            <form action="">
              <input type="checkbox" id="agree" name="agree" value="Bike" />
                <label htmlFor="agree"> By continuing, I agree to terms of use & privacy policy</label>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default LoginSignup