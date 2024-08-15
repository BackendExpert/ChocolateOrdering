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
    <div className='bg-yellow-800/20 w-full min-h-screen py-8'>
        <div className="md:grid grid-cols-2 gap-4">
            <div className="">
                
            </div>
        </div>
    </div>
  )
}

export default ViewProduct