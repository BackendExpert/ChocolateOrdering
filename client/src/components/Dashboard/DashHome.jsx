import React from 'react'
import CountUp from 'react-countup'
import { Bs0Circle, Bs0SquareFill } from 'react-icons/bs'

const DashHome = () => {
    const DashData = [
      {id: 1, name: "Foods", value: <CountUp end={20} />, icons: <Bs0Circle /> },
      {id: 1, name: "Foods", value: <CountUp end={20} />, icons: <Bs0Circle /> },      
      {id: 1, name: "Foods", value: <CountUp end={20} />, icons: <Bs0Circle /> },      
      {id: 1, name: "Foods", value: <CountUp end={20} />, icons: <Bs0Circle /> },
      
    ]

  return (
    <div className="">
        <div className="">
          <h1 className="text-xl font-semibold text-yellow-800">Dashboard</h1>

          <div className="flex">
            <div className="w-auto">
              <div className="bg-white py-4 px-8 rounded shadow-md mt-4">
                <Bs0SquareFill className='h-36 w-auto text-yellow-800'/>
                <h1 className="pt-4 pb-1 text-xl font-semibold text-yellow-900">Monthly Income</h1>
                <h1 className="pt-1 pb-3 text-center text-2xl font-semibold text-yellow-900">$1500.00</h1>
                <p className=""></p>
              </div>
            </div>
            <div className="">
              <div className="md:grid grid-cols-4 gap-2">
                {
                  DashData.map((dash, index) => {
                    return (
                      <div className="" key={index}>
                        {dash.name}
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