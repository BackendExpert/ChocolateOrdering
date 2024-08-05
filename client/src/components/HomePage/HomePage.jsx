import React from 'react'

const HomePage = () => {
  return (
    <div className="bg-cover bg-center min-h-screen py-4 relative ">
        <div className="-mt-4 fixed min-h-screen w-full left-0 right-0 bg-[url(https://wallpapercave.com/wp/wp13475065.jpg)] border-b p-4 z-60 border-yellow-800 bg-cover bg-center">           
        </div>
        <div className="">
            <div className='z-40 md:mt-20 mt-24 md:mx-10 mx-2 relative rounded-3xl border-2 border-white border-yellow-800  bg-[url(https://wallpapercave.com/wp/wp3192478.jpg)] bg-center bg-cover min-h-screen'>
                <div className="md:pt-16 md:px-12 px-4">
                    <div className="md:grid grid-cols-4 gap-4">
                        <div className="">
                            <h1 className="text-5xl font-bold text-white pt-12">Chocolets</h1>
                            <p className="py-4 pl-8 text-white">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis expedita exercitationem maxime eos ducimus, eveniet tenetur enim distinctio alias tempora aliquam quibusdam! Necessitatibus aliquid deserunt, iure voluptatibus explicabo quasi libero?
                                Vel reprehenderit ullam hic quod cupiditate praesentium harum similique asperiores natus cum? Nam sequi reiciendis voluptatem rem id odit exercitationem quo ab eaque, illum molestias doloremque tempore ad nobis nisi.
                            </p>
                        </div>
                        <div className="">

                        </div>
                    </div>
                </div>
            </div>

            <div className=" py-4 z-40 relative">
                <div className="md:mx-8 rounded-xl py-4 px-8">
                    <div className="md:grid grid-cols-4 gap-4">
                        <div className="">
                            <img src="https://wallpapercave.com/wp/wp3064790.jpg" alt="" className='h-40 w-auto'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default HomePage