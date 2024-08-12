import React from 'react'
import CountUp from 'react-countup'
import { BsBoxFill, BsPlusSquareFill } from 'react-icons/bs'

const ItemsData = () => {
    const ItemsNav = [
        {id: 1, link:"Items", value: <CountUp end={20} />, name: "Items", icon: <BsBoxFill className='h-8 w-auto'/>},
        {id: 2, link:"AllItems", value: <CountUp end={20} />, name: "In Stock ", icon: <BsBoxFill className='h-8 w-auto'/>},
        {id: 3, link:"AllItems", value: <CountUp end={20} />, name: "Out of Stock ", icon: <BsBoxFill className='h-8 w-auto'/>},        
        {id: 3, link:"AddItems", value: "#", name: "Add Items", icon: <BsPlusSquareFill className='h-8 w-auto'/>}, 
    ]
  return (
    <div>
        <div className="md:grid grid-cols-4 gap-2 my-2">
            {
                ItemsNav.map((itmes, index) => {
                    return (
                        <a href={itmes.link}>
                            <div className="bg-yellow-800 rounded shadow-md text-white py-4 px-4 md:my-0 my-2" key={index}>
                                <div className="flex justify-between">
                                    <div className="">
                                        <p className="text-2xl">{itmes.value}</p>
                                        <p className="text-xl">{itmes.name}</p>
                                    </div>
                                    <div className="mt-4 mr-4">
                                        {itmes.icon}
                                    </div>
                                </div>
                            </div>
                        </a>
                    )
                })
            }
        </div>
    </div>
  )
}

export default ItemsData