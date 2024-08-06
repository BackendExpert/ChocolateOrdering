import React, { useState } from 'react'
import { BsMortarboardFill } from "react-icons/bs";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'
import  secureLocalStorage  from  "react-secure-storage";
import BgImg from '../../assets/BgImg.jpg'

const SignIn = () => {
    const navigate = useNavigate()
    // for login data
    const [LoginData, SetLoginData] = useState({
        email: '',
        password: ''
    })

    // send data to backend using axios
    const headleSubmit = async (e) => {
        e.preventDefault();

        // login to system

        try{
            const res = await axios.post('http://localhost:5000/auth/SignIn', LoginData)
            .then(res => {
                if(res.data.Status === "Success"){
                    alert("Login Successfull")
                    localStorage.setItem('token', res.data.Token)
                    navigate('/Dashboard/Home')
                    // login user Email 
                    secureLocalStorage.setItem('Login1', res.data.Result.email)
                    secureLocalStorage.setItem('Login2', res.data.Result.Role)                    
                }
                else{
                    alert(res.data.Error)
                }
            })
        }
        catch (err) {
            console.log(err)
        }
    }

    const styles = {
        background: `url(${BgImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    }

  return (
    <div className="bg-cover bg-center min-h-screen py-4 relative ">
    <div className="-mt-4 fixed min-h-screen w-full left-0 right-0 border-b p-4 z-60 border-yellow-800 bg-cover bg-center" style={styles}>           
    </div>
    <div className="">
        <div className='z-40 md:mt-20 mt-24 md:mx-10 mx-2 relative rounded-3xl bg-center bg-cover'>
            <div className="md:grid grid-cols-3 gap-4">
                    <div className=""></div>
                    <div className="my-4 bg-white md:py-4 py-4 rounded-xl shadow-md" >
                    <form onSubmit={headleSubmit}>
                        <div className="my-2 md:mx-8 mx-4">
                            <label htmlFor="" className=''>Email : </label>
                            <input type="email" name="" id="" className="w-full h-12 pl-2 rounded bg-gray-200" required placeholder='Enter Email Address'
                            onChange={e => SetLoginData({...LoginData, email:e.target.value})}/>
                        </div>
                        <div className="my-2 md:mx-8 mx-4">
                            <label htmlFor="" className=''>Password : </label>
                            <input type="password" name="" id="" className="w-full h-12 pl-2 rounded bg-gray-200" required placeholder='Enter Password' 
                            onChange={e => SetLoginData({...LoginData, password:e.target.value})}/>
                        </div>
                        <div className="my-2 md:mx-8 mx-4">
                            <button type='submit' className='mt-8 font-semibold w-full py-4 px-8 rounded bg-yellow-800 text-white shadow-md duration-500 hover:bg-yellow-900'>SignIn</button>
                        </div>
                    </form>
                    <div className="flex justify-between mx-4">
                        <Link><p className="my-2 md:mx-8 text-yellow-800 font-semibold">Forget Password ? </p></Link>
                        <Link to={'/SignUp'}><p className="my-2 md:mx-8 text-yellow-800 font-semibold">Create New </p></Link>
                    </div>
                </div>
                <div className=""></div>
            </div>
        </div>
    </div>
</div>




  )
}

export default SignIn