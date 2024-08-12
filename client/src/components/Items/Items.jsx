import React from 'react'
import ItemsData from './ItemsData'

const Items = () => {
  return (
    <div>
        <div className="">
            <h1 className="text-xl font-semibold text-yellow-800">Items</h1>
            <ItemsData />

            <div className="bg-white">
            <div id="detailed-pricing" class="w-full overflow-x-auto">
                <div class="overflow-hidden ">
                    <div className="md:block hidden">
                        <div class="grid grid-cols-5 p-4 text-yellow-800 text-sm font-medium bg-gray-100 border-t border-b border-gray-200 gap-x-16 dark:bg-gray-800 dark:border-gray-700 dark:text-white">
                            <div class="flex items-center">Item ID</div>
                            <div>Name</div>
                            <div>Price</div>
                            <div>Stock</div>
                            <div></div>
                        </div>
                    </div>
                    <div className="md:hidden block">
                        <div class="grid grid-cols-5 p-4 text-sm font-medium text-gray-900 bg-gray-100 border-t border-b border-gray-200 gap-x-16 dark:bg-gray-800 dark:border-gray-700 dark:text-white">
                            <div class="flex items-center">Staff Info</div>
                        </div>
                    </div>
                    <div class="md:grid grid-cols-5 px-4 py-5 text-sm text-gray-700 border-b border-gray-200 gap-x-16 dark:border-gray-700">
                          <div class="text-gray-500 dark:text-gray-400">P001</div>
                          <div class="text-gray-500 dark:text-gray-400">Royal Chocos</div>
                          <div class="text-gray-500 dark:text-gray-400">$ 100.00</div>
                          <div class="text-gray-500 dark:text-gray-400">12</div>
                          <div class="text-gray-500 dark:text-gray-400">   
                              <p className="text-yellow-800 text-sm font-semibold">View Item</p>                       
                          </div>
                      </div>

                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Items