import React, { useState } from 'react'
import ItemsData from './ItemsData'

const AddItems = () => {
    const [ItemsData, SetItemDate] = useState({
      
    })

    const headleSubmit = (e) => {
      e.preventDefault();
    }
  return (
    <div>
        <div className="">
            <h1 className="text-xl font-semibold text-yellow-800">Add New Item</h1>
            <ItemsData />

            <div className="bg-white rounded shadow-md py-8 px-4 my-4">
              <form onSubmit={headleSubmit} method="post">
                  <div className="md:grid grid-cols-3 gap-4">
                    <div className="">
                      <input type="text" name="" id="" className="h-12 w-full bg-gray-200 pl-2 rounded" required placeholder='Item Number'
                      />
                    </div>
                    <div className="">
                      <input type="text" name="" id="" className="h-12 w-full bg-gray-200 pl-2 rounded" required placeholder='Item Name'
                      />
                    </div>
                    <div className="">
                        <input type="number" name="" id="" className="h-12 w-full bg-gray-200 pl-2 rounded" required placeholder='Item Price'
                        />
                    </div>
                  </div>
                  <div className="">
                      <textarea className='w-full h-24 rounded bg-gray-200 my-4 pl-2' placeholder='Item Description' required></textarea>
                  </div>
                  <input type="submit" value="Add Item" className='bg-yellow-800 text-white py-2 px-8 rounded shadow-md'/>
              </form>
            </div>
        </div>
    </div>
  )
}

export default AddItems