import React from 'react'

const HomePage = () => {
  return (
    <div className="bg-yellow-950 min-h-screen py-4">
        <div className='md:mt-20 mt-24 md:mx-10 mx-2 relative rounded-3xl border-2 border-white border-yellow-800  bg-[url(https://wallpapercave.com/wp/wp3192478.jpg)] bg-center bg-cover min-h-screen'>
            <div className="pt-16 px-12">
                <h1 className="text-xl text-yellow-800">Chocolets</h1>
            </div>
        </div>
        <div className="bg-yellow-950 py-8 -mt-8">
        </div>
        <div className="bg-yellow-950 py-4">
            <div className="md:mx-8 rounded-xl py-4 px-8">
                <div className="md:grid grid-cols-4 gap-4">
                    <div className="">
                        <img src="https://wallpapercave.com/wp/wp3064790.jpg" alt="" className='h-40 w-auto'/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomePage