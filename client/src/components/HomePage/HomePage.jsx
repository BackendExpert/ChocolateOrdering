import React from 'react'
import BgImg from '../../assets/BgImg.jpg'
import { BsAwardFill, BsGiftFill, BsMapFill, BsTruck } from 'react-icons/bs'

const HomePage = () => {
    const styles = {
        background: `url(${BgImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    }
  return (
    <div className="bg-cover bg-center min-h-screen py-4 relative ">
        <div className="-mt-4 fixed min-h-screen w-full left-0 right-0 border-b p-4 z-60 border-yellow-800 bg-cover bg-center" style={styles}>           
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

            <div className="py-4 z-40 relative">
                <div className="md:mx-8 rounded-xl py-4 px-8">
                    <div className="md:grid grid-cols-3 gap-4">
                        <div className="bg-white p-8 rounded shadow-md md:my-0 my-2">
                            <div className="flex text-yellow-800">
                                <BsAwardFill className='h-16 w-auto'/>
                                <div className="ml-6">
                                    <p className="text-3xl">100%</p>
                                    <p className="pt-4 text-xl font-semibold">Best Products</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-yellow-800 p-8 rounded shadow-md md:my-0 my-2">
                            <div className="flex">
                                <BsTruck className='text-white h-16 w-auto'/>
                                <div className="ml-6 text-white">
                                    <p className="text-3xl">Fast Delivery</p>
                                    <p className="pt-4 text-xl font-semibold">Delivery within 3 to 5 days</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white p-8 rounded shadow-md md:my-0 my-2">
                            <div className="flex text-yellow-800">
                                <BsGiftFill className='h-16 w-auto'/>
                                <div className="ml-6">
                                    <p className="text-3xl">Gifts</p>
                                    <p className="pt-4 text-xl font-semibold">Any Kind of Gifts</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="py-4 z-40 relative">
                <div className="md:mx-8 rounded-xl  px-8">
                    <div className="bg-yellow-800 rounded shadow-md p-8">
                        <div className="text-center text-white">
                            <h1 className="py-4 text-xl font-semibold">About us</h1>
                            <p className="">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab architecto dolore accusantium consequuntur eveniet deserunt doloremque impedit? Architecto amet eum laboriosam fugiat placeat vitae mollitia nostrum quos, perferendis minus tempore?
                                Laboriosam quae officiis at atque asperiores obcaecati modi? Officia dolor suscipit eius consectetur possimus quis eligendi voluptas laudantium similique animi saepe, libero accusamus fugiat repudiandae harum ad fuga velit consequatur.
                                Officiis saepe sequi, expedita assumenda laborum reprehenderit libero voluptatum. Quos accusamus impedit quam explicabo unde ex neque omnis qui et modi, voluptatem, corrupti voluptatum reprehenderit accusantium totam inventore optio voluptates.
                                Odit exercitationem aperiam ut nostrum illum animi cumque excepturi sequi distinctio quos, inventore sint, velit a dolores ab obcaecati enim eos labore? Libero minus possimus sapiente tenetur beatae quo sint!
                                Odit harum ab iste voluptatem! Officiis corrupti temporibus illo expedita vero deserunt aut facilis eos. Nam sapiente eum fugiat ad, at omnis, ullam modi iusto itaque ea error laboriosam consequuntur!
                            </p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="py-4 z-40 relative">
                <div className="md:mx-8 rounded-xl py-4 px-8">
                    <div className="md:grid grid-cols-4 gap-4">
                        <div className="bg-yellow-800 rounded-3xl shadow-md md:my-0 my-2 text-white">
                            <img src="https://wallpapercave.com/wp/0XoBRq7.jpg" alt="h-40 w-auto" />
                            <h1 className="text-center py-4 text-xl font-semibold">Best Products</h1>
                            <p className="p-4 text-center">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, repudiandae neque. Iusto numquam illo, sapiente quidem quo minus amet, cum, eius nisi iste exercitationem sunt qui doloribus. Non, dicta maiores.
                            </p>

                            <button className='bg-white text-yellow-800 py-2 px-8 my-4 mx-8 rounded font-semibold'>
                                View Store
                            </button>
                        </div>
                        <div className="bg-white rounded-3xl shadow-md md:my-0 my-2 text-yellow-800 ">
                            <img src="https://wallpapercave.com/wp/A2pEVm6.jpg" alt="h-40 w-auto " />
                            <h1 className="text-center py-4 text-xl font-semibold">Large Store</h1>
                            <p className="p-4 text-center">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, repudiandae neque. Iusto numquam illo, sapiente quidem quo minus amet, cum, eius nisi iste exercitationem sunt qui doloribus. Non, dicta maiores.
                            </p>

                            <button className='bg-yellow-800 text-white py-2 px-8 my-4 mx-8 rounded'>
                                View More
                            </button>
                        </div>
                        <div className="bg-white rounded-3xl shadow-md md:my-0 my-2 text-yellow-800">
                            <img src="https://wallpapercave.com/wp/QYvdtbz.jpg" alt="h-40 w-auto" />
                            <h1 className="text-center py-4 text-xl font-semibold">Fast Delivery</h1>
                            <p className="p-4 text-center">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, repudiandae neque. Iusto numquam illo, sapiente quidem quo minus amet, cum, eius nisi iste exercitationem sunt qui doloribus. Non, dicta maiores.
                            </p>

                            <button className='bg-yellow-800 text-white py-2 px-8 my-4 mx-8 rounded'>
                                View More
                            </button>
                        </div>
                        <div className="bg-yellow-800 rounded-3xl shadow-md md:my-0 my-2 text-white">
                            <img src="https://wallpapercave.com/wp/1Pm7E5e.jpg" alt="h-40 w-auto" />
                            <h1 className="text-center py-4 text-xl font-semibold">Best Gifts</h1>
                            <p className="p-4 text-center">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, repudiandae neque. Iusto numquam illo, sapiente quidem quo minus amet, cum, eius nisi iste exercitationem sunt qui doloribus. Non, dicta maiores.
                            </p>

                            <button className='bg-white text-yellow-800 py-2 px-8 my-4 mx-8 rounded font-semibold'>
                                Browse Gifts
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='z-40 md:mt-20 mt-24 md:mx-10 mx-2 relative rounded-3xl border-2 border-white border-yellow-800  bg-yellow-800 bg-center bg-cover h-full'>
                <div className="py-8 px-6">                        
                    <div className="flex justify-between text-white">
                        <p className="">Copyright © 2024 BestChocos</p>
                        <p className="">Developed By JehanKandy</p>
                    </div>
                </div>
            </div>

        </div>

    </div>
  )
}

export default HomePage