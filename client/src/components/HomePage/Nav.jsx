import React from 'react'
import { BsPerson } from 'react-icons/bs'

const Nav = () => {
    const NavList = [
        {id: 1, name: "Home", link: ""},
        {id: 2, name: "Home", link: ""},
        {id: 3, name: "Home", link: ""},
        {id: 4, name: "Home", link: ""},
        {id: 5, name: "Home", link: ""},
        {id: 6, name: "Home", link: ""},        
    ]

  return (
    <nav className='fixed top-0 z-50 w-full'>
         <div className='bg-yellow-800 text-white  my-4 md:mx-8 mx-2 py-4 px-8 rounded-full border-b-4 border-yellow-900 shadow-md'>
            <div className="md:flex justify-between">
                <div className="">Chocolets</div>
                <div className="flex">
                    {
                        NavList.map((nav, index) => {
                            return (
                                <div key={index} className="mx-4 duration-200 hover:border-b border-white cursor-pointer">
                                    {nav.name}
                                </div>
                            )
                        })
                    }
                </div>
                <div className="flex cursor-pointer">
                    <BsPerson className='h-6 w-full pr-2'/>
                    <p className="">Login</p>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Nav