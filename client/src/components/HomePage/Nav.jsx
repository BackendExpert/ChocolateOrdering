import React, { useState } from 'react'
import { BsList, BsPerson, BsX } from 'react-icons/bs'

const Nav = () => {

    // usestate for open close nav bar when mobile screen
    const [navOpen, SetNavOpen] = useState(false)

    const NavList = [
        {id: 1, name: "Home", link: "/"},
        {id: 2, name: "Discounts", link: ""},
        {id: 3, name: "Products", link: "ProductStore"},
    ]



  return (
    <nav className='fixed top-0 z-50 w-full'>
         <div className='bg-yellow-800 text-white  my-4 md:mx-8 mx-2 md:py-4 py-6 px-8 md:rounded-full rounded-2xl border-b-4 border-yellow-900 shadow-md'>
         <div className="flex justify-between right-8 top-6">
            <div className="md:hidden block text-xl">
                Best Chocolets
            </div>
            <div onClick={()=>SetNavOpen(!navOpen)} className='text-3xl cursor-pointer md:hidden'>
                {
                    !navOpen ? <BsList /> : <BsX />
                }
            </div>
         </div>


            <ul className={`rounded-xl md:hidden block md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-yellow-800 md:z-auto z-[-1] left-0 md:pl-0 pl-9 transition-all duration-500 ease-in mx-4 right-2 ${navOpen ? 'top-28 ':'top-[-490px]'}`}>
                {
                    NavList.map((link)=>(
                        <a href={link.link}>
                            <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
                            <p className='text-gray-white duration-200 hover:border-b border-white cursor-pointer'>{link.name}</p>
                            </li>
                        </a>
                    ))
                }
                    <div className="flex">
                        <BsPerson  className='h-6 w-auto'/>
                        <p className="">SignIn</p>
                    </div>
            </ul>
            <div className="md:block hidden md:flex md:justify-between">
                <div className="">
                    Chocolets
                </div>
                <div className="flex">
                    {
                        NavList.map((nav, index) => {
                            return (
                                <a href={nav.link} className="">
                                    <div key={index} className="mx-2 duration-200 hover:border-b border-white cursor-pointer">
                                        {nav.name}
                                    </div>
                                </a>
                            )
                        })
                    }
                </div>
                <div className="">
                    <div className="flex">
                        <BsPerson  className='h-6 w-auto'/>
                        <p className="">SignIn</p>
                    </div>
                </div>
            </div>
            
        </div>
    </nav>
  )
}

export default Nav