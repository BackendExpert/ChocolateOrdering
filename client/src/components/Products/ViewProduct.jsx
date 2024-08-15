import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ViewProduct = () => {
    const { id } = useParams()

    const [GetProduct, SetGetProduct] = useState([])

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_SERVER_API}/Items/GetOneItem/${id}`)
        .then(res => SetGetProduct(res.data.Result))
        .catch(err => console.log(err))
    }, [])
  return (
    <div className='bg-yellow-800/20 w-full min-h-screen py-8 md:px-16 px-4'>
        <div className="md:grid grid-cols-2 gap-4">
            <div className="">
                <h1 className="text-3xl font-semibold">{GetProduct.ItemName}</h1>
                <div className="my-4">
                <img src={`${import.meta.env.VITE_SERVER_API}/${GetProduct.ItemImage}`} alt="Centered" className="w-full h-auto rounded shadow-md" />
                </div>
            </div>
            <div className="md:mt-12 mt-2 ml-2">
                <p className="">{GetProduct.ItemDesc}</p>
                <div className="my-8">
                    <div className="flex justify-between">
                        <div className="text-2xl font-semibold text-yellow-800">$ {GetProduct.ItemPrice}.00</div>
                        <div className="">
                            {
                                (() => {
                                    if(GetProduct.Stock === 0){
                                        return (
                                            <div className="">Out of Stock</div>
                                        )
                                    }
                                    else{
                                        return (
                                            <div className="text-green-500 font-semibold text-2xl">Out of Stock</div>
                                        )
                                    }
                                })()
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ViewProduct