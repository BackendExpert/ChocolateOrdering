import React from 'react'
import CountUp from 'react-countup'
import { Bs0Circle, Bs0SquareFill } from 'react-icons/bs'

const DashHome = () => {
    const DashData = [
      {id: 1, name: "Foods", value: <CountUp end={20} />, icons: <Bs0Circle className="h-12 w-auto"/> },
      {id: 1, name: "Foods", value: <CountUp end={20} />, icons: <Bs0Circle className="h-12 w-auto"/> },      
      {id: 1, name: "Foods", value: <CountUp end={20} />, icons: <Bs0Circle className="h-12 w-auto"/> },      
      {id: 1, name: "Foods", value: <CountUp end={20} />, icons: <Bs0Circle className="h-12 w-auto"/> },
      
    ]

  return (
    <div className="">
        <div className="">
          <h1 className="text-xl font-semibold text-yellow-800">Dashboard</h1>

          <div className="md:flex">
            <div className="md:w-1/4 text-center">
              <div className="bg-white py-4 px-8 rounded shadow-md mt-4">
                <center><Bs0SquareFill className='h-36 w-auto text-yellow-800 '/></center>
                <h1 className="pt-4 pb-1 text-xl font-semibold text-yellow-900">Monthly Income</h1>
                <h1 className="pt-1 pb-3 text-center text-2xl font-semibold text-yellow-900">$1500.00</h1>
                <p className=""></p>
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
                            {dash.icons}
                            <h1 className="text-xl">{dash.name}</h1>
                          </div>
                        </div>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default DashHome