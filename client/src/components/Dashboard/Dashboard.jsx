import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import  secureLocalStorage  from  "react-secure-storage"
import { Outlet } from 'react-router-dom';
import DashNav from './DashNav';
import DashSide from './DashSide';
import DashFooter from './DashFooter';
import { BsChatDotsFill, BsHeadset, BsXCircleFill } from 'react-icons/bs';

const Dashboard = () => {
    const navigate = useNavigate()
    const EmailUser = secureLocalStorage.getItem("Login1");
    const RoleUser = secureLocalStorage.getItem("Login2");

    const [chatOpen, SetchatOpen] = useState(false)

    const headleOpenChat = () => {
        SetchatOpen(true)
    }

    const ChatMenu = [
        {id: 1, name: 'How to Start a Company'},
        {id: 2, name: 'How Find a Job'},
        {id: 3, name: 'How to add Skills or Project'},
    ]

    const ChatMenuData = [
        {id: 1, name: 'Click Start Company button on Dashboard'},
        {id: 2, name: 'How Find a Job'},
        {id: 3, name: 'How to add Skills or Project'},
    ]

    const [MenuID, SetMenuID] = useState(0)
    const headleStartChat = (id) => {
        SetMenuID(id)
    }

    const headleCloseChat = () => {
        SetchatOpen(false)
        SetMenuID(0)
    }

    if(RoleUser !== null && EmailUser !== null){
        return (
            <div className=" w-full min-h-screen md:px-[5%] px-4">       
                <div className="md:flex">
                <div className="circlePosition w-[990px] h-[700px] bg-purple-900 rounded-[100%] fixed  z-[-10] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] blur-[600px]"></div>
                    <div className="">
                        <DashSide />                        
                    </div>
                    <div className="my-4 md:ml-4 w-full h-auto"> 
                        <DashNav />                  
                        <Outlet />
                        <DashFooter />
                    </div>                    
                </div>                                
            </div>
        )
    }
    else{
        useEffect(() => {
            localStorage.clear()
            navigate('/')
        })
    }
}

export default Dashboard