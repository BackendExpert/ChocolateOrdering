import React, { useEffect, useState } from 'react'
import BgImg from '../../assets/BgImg.jpg'
import { BsCartFill, BsFacebook, BsHouseFill } from 'react-icons/bs'
import Footer from '../HomePage/Footer'
import axios from 'axios'


const ProductStore = () => {
    const styles = {
        background: `url(${BgImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    }

    const [ProductData, SetProductData] = useState([])

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_SERVER_API}/Items/GetAllItems`)
        .then(res => SetProductData(res.data.Result))
        .catch(err => console.log(err))
    }, [])

  return (
    <div className="bg-cover bg-center min-h-screen py-4 relative ">
        <div className="-mt-4 fixed min-h-screen w-full left-0 right-0 border-b p-4 z-60 border-yellow-800 bg-cover bg-center" style={styles}>           
        </div>
        <div className="rounded-tl-xl rounded-bl-xl shadow-md right-0 top-72 fixed border-b p-4 z-50 border-yellow-800 bg-yellow-800">    
            <div className="">
                <div className="py-4 border-b border-white">
                    <BsCartFill className='text-white h-6 w-auto'/>
                </div>
                <div className="py-4 border-b border-white">
                    <BsFacebook className='text-white h-6 w-auto'/>
                </div>
                <div className="py-4">
                    <BsHouseFill className='text-white h-6 w-auto'/>
                </div>
            </div>       
        </div>
        <div className="">
            <div className='z-40 md:mt-16 mt-24 md:mx-10 mx-2 relative rounded-3xl bg-center bg-cover'>
                
            </div>
            <div className='z-40 md:mt-20 mt-24 md:mx-10 mx-2 relative rounded-3xl bg-center bg-cover'>
                <div className="md:grid grid-cols-4 gap-4">
                    {
                        ProductData.map((product, index) => {
                            return(
                                <div className="bg-white py-8 px-4 shadow-md rounded-xl md:my-0 my-4" key={index}>
                                    <div className="flex justify-center items-center">
                                        <img src={`${import.meta.env.VITE_SERVER_API}/${product.ItemImage}`} alt="Centered" className="max-w-full h-40" />
                                    </div>
            
                                    <div className="px-4 py-6">
                                        <h1 className="text-xl text-yellow-800 font-semibold">{product.ItemName}</h1>
                                        <p className="py-4">
                                            {product.ItemDesc}
                                        </p>
            
                                        <div className="flex justify-between">
                                            <h1 className="text-xl text-yellow-800 font-semibold">$ {product.ItemPrice}.00</h1>
                                            {
                                                (() => {
                                                    if(product.Stock === 0){
                                                        return (
                                                            <h1 className="text-xl text-red-700 font-semibold">Out of Stock</h1>
                                                        )
                                                    }
                                                    else{
                                                        return (
                                                            <h1 className="text-xl text-yellow-800 font-semibold">In-Stock</h1>
                                                        )
                                                    }
                                                })()
                                            }
                                            
                                        </div>  
                                        
                                        <a href={'/ViewProduct/' + product.ItemNumber}>
                                            <button className='bg-yellow-800 py-2 px-8 rounded mt-6 w-full text-white'>View More</button>
                                        </a>                                                         
                                    </div>
                                </div>
                            )
                        })
                    }
                   
                </div>
            </div>


        </div>
        <Footer />

    </div>
  )
}

export default ProductStore