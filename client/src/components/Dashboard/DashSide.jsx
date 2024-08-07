import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import  secureLocalStorage  from  "react-secure-storage"
import { BsBackpack, BsBagCheck, BsBoxFill, BsBriefcase, BsClipboard2Data, BsGearFill, BsList, BsPersonGear, BsSpeedometer2, BsUiChecks, BsX } from "react-icons/bs";
import axios from 'axios';

const DashSide = () => {
    const navigate = useNavigate()
    //curent login user
    const EmailUser = secureLocalStorage.getItem("Login1");
    const RoleUser = secureLocalStorage.getItem("Login2");


    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
      setIsOpen(!isOpen);
    };

    const SideMenu = [
        {id: 1, name: "Dashboard", link: 'Home', icon: <BsSpeedometer2 />},
        {id: 2, name: "Items", link: 'Items', icon: <BsBoxFill />}, 
        {id: 3, name: "Orders ", link: 'Orders', icon: <BsUiChecks />}, 
        {id: 4, name: "Job Applied", link: 'ApplyJobs', icon: <BsBagCheck />},
        {id: 5, name: "Skills", link: 'Skills', icon: <BsPersonGear />},
        {id: 6, name: "Projects", link: 'Projects', icon: <BsClipboard2Data />},
        {id: 7, name: "Settings", link: 'Settings', icon: <BsGearFill />},    
    ]
    // get login user data
    const [JobFinderData, SetJobFinderData] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:5000/jobfinder/GetJFData/${EmailUser}`)
        .then(res => SetJobFinderData(res.data.Result))
        .catch(err => console.log(err))
    }, [])

    if(RoleUser !== null && EmailUser !== null){
        return (
            <div className=''>
                <button className="md:hidden fixed top-4 right-4 z-50 bg-yellow-800 text-white p-2 rounded font-semibold" onClick={toggleSidebar}>
                    {
                        !isOpen ? <BsList /> : <BsX />
                    }
                </button>
        
                <div className={`rounded shadow-md md:min-w-74 md:max-w-64 w-full md:w-auto h-full md:relative fixed overflow-auto top-0 left-0 h-full transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition-transform duration-300 ease-in-out`}>
                    <div className="">
                        <div className="bg-white py-4 px-4 rounded shadow-md">
                            {
                                SideMenu.map((menu, index) => {
                                    return (
                                        <a href={menu.link}>
                                            <div className="duration-200 hover:bg-yellow-800 hover:text-white py-2  my-2 pl-4 rounded text-yellow-800" key={index}>
                                                <div className="flex duration-500 hover:pl-2">
                                                    <div className="text-xl pr-2">{menu.icon}</div>
                                                    <p className="">{menu.name}</p>
                                                </div>
                                            </div>
                                        </a>
                                    )
                                })
                            }
                        </div>
                        <div className="my-4 bg-white py-4 px-6 rounded shadow-md">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi nobis quam corporis distinctio possimus in? Dignissimota aspernatur quidem eos et explicabo.
                        </div>
                    </div>
                </div>

                
            </div>
          )
    }
    else{
        useEffect(() => {
            localStorage.clear()
            navigate('/')
        }, [])
    }
}

export default DashSide