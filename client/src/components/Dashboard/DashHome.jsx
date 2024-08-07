import React from 'react'
import CountUp from 'react-countup'
import { Bs0Circle, Bs0SquareFill, BsArrowDownUp, BsBoxSeam, BsCurrencyDollar, BsPeople } from 'react-icons/bs'
import BarChart from './BarChart'
import ProgressBar from './CircularProgressBar'
import CircularProgressBar from './CircularProgressBar'

const DashHome = () => {
    const DashData = [
      {id: 1, name: "Items", value: <CountUp end={20} />, icons: <BsBoxSeam className="h-12 w-auto"/> },
      {id: 2, name: "Orders", value: <CountUp end={20} />, icons: <BsArrowDownUp className="h-12 w-auto"/> },      
      {id: 3, name: "Customers", value: <CountUp end={20} />, icons: <BsPeople className="h-12 w-auto"/> },      
    ]

  return (
    <div className="">
        <div className="">
          <h1 className="text-xl font-semibold text-yellow-800">Dashboard</h1>

          <div className="md:flex">
            <div className="md:w-1/3 ">
              <div className="bg-white py-4 px-8 rounded shadow-md mt-4">
                <center><BsCurrencyDollar className='h-36 w-auto text-yellow-800 '/></center>
                <h1 className="pt-4 pb-1 text-xl font-semibold text-yellow-900 text-center">Monthly Income</h1>
                <h1 className="pt-1 pb-3 text-center text-2xl font-semibold text-yellow-900">$1500.00</h1>
                <p className=""></p>
              </div>

              <div className="rounded shadow-md bg-white my-4 bg-yellow-800 pb-4">
                  <div className="pt-8 pb-4  flex items-center justify-center">
                  <CircularProgressBar
                      value={90}
                      max={100}
                      size={100}
                      strokeWidth={12}
                      color="text-white"
                    />
                  </div>    
                  <h1 className="text-center text-xl font-semibold text-white">1500/2000</h1>
                  <p className="text-center text-white">Monthly Income</p>              
              </div>
              

            </div>


            <div className="w-full">
              <div className="md:grid grid-cols-3 gap-2 mt-1">
                {
                  DashData.map((dash, index) => {
                    return (
                      <div className="mt-3 md:pl-4" key={index}>
                        <div className="bg-yellow-800 text-white py-8 rounded shadow-md px-4 w-full">
                          <div className="flex justify-between">
                            <div className="">
                            <h1 className="text-3xl">{dash.value}</h1>
                            <h1 className="text-xl py-2">{dash.name}</h1>
                            </div>
                            <div className="mr-4">
                              {dash.icons}                              
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  })
                }
              </div>
              <div className="w-full">
              <BarChart />
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default DashHome