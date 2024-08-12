import React, { useState } from 'react'
import ItemsData from './ItemsData'
import axios from 'axios'


const AddItems = () => {
    const [ItemData, SetItemData] = useState({
        ItemNumber: '',
        ItemName: '',
        ItemPrice: '',
        image: '',
        ItemDesc: ''
    })

    const headleSubmit = async (e) => {
      e.preventDefault();

      const DataItem = new FormData()

      DataItem.append('ItemNumber', ItemData.ItemNumber);
      DataItem.append('ItemName', ItemData.ItemName);
      DataItem.append('ItemPrice', ItemData.ItemPrice);
      DataItem.append('image', ItemData.image);
      DataItem.append('ItesmDesc', ItemData.ItemDesc);

      try{
        const res = await axios.post(`${import.meta.env.VITE_SERVER_API}/Items/AddItems`, DataItem, {
          headers: {
            "Content-Type": "multipart/form-data",
          }
        })
        .then(res => {
          if(res.data.Status === "Success"){
            alert("Item Added Successfully")
            window.location.reload()
          }
          else{
            alert(res.data.Error)
          }
        })
        .catch(err => console.log(err))
      }
      catch (err) {
        console.log(err)
      }
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
                      <input type="text" name="ItemNumber" id="" className="h-12 w-full bg-gray-200 pl-2 rounded md:my-0 my-2" required placeholder='Item Number'
                      onChange={e => SetItemData({...ItemData, ItemNumber:e.target.value})}/>
                    </div>
                    <div className="">
                      <input type="text" name="ItemName" id="" className="h-12 w-full bg-gray-200 pl-2 rounded md:my-0 my-2" required placeholder='Item Name'
                      onChange={e => SetItemData({...ItemData, ItemName:e.target.value})}/>
                    </div>
                    <div className="">
                        <input type="number" name="ItemPrice" id="" className="h-12 w-full bg-gray-200 pl-2 rounded md:my-0 my-2" required placeholder='Item Price'
                      onChange={e => SetItemData({...ItemData, ItemPrice:e.target.value})}/>
                    </div>
                  </div>
                  <div className="">
                    <input type="file" name="image" id="" className="h-12 w-full bg-gray-200 pl-2 rounded mt-4" required placeholder='Item image'
                    onChange={e => SetItemData({...ItemData, image:e.target.files[0]})}/>
                  </div>
                  <div className="">
                      <textarea name='ItesmDesc' className='w-full h-24 rounded bg-gray-200 my-4 pl-2' placeholder='Item Description' required
                      onChange={e =>  SetItemData({...ItemData, ItemDesc:e.target.value})}></textarea>
                  </div>
                  <input type="submit" value="Add Item" className='bg-yellow-800 text-white py-2 px-8 rounded shadow-md'/>
              </form>
            </div>
        </div>
    </div>
  )
}

export default AddItems