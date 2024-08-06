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



    if(RoleUser !== null && EmailUser !== null){
        return (
<div className="w-full max-h-screen md:px-[5%] px-4 mt-4">
    <DashNav />        
    <div className="md:flex">
        <div className="circlePosition w-[990px] h-[700px] bg-yellow-900 rounded-[100%] fixed  z-[-10] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] blur-[600px]"></div>
        <div
            className="max-w-64 max-h-[calc(100vh-8rem)] overflow-y-auto mt-4"
            style={{
                scrollbarWidth: 'none', // For Firefox
                msOverflowStyle: 'none', // For Internet Explorer and Edge
            }}
            >
                <style>
                    {`
                    /* Hide scrollbar for Chrome, Safari and Opera */
                    .my-4::-webkit-scrollbar {
                        display: none;
                    }
                    `}
                </style>
            <DashSide />
        </div>   
        <div
            className="my-4 md:ml-4 w-full max-h-[calc(100vh-8rem)] overflow-y-auto"
            style={{
                scrollbarWidth: 'none', // For Firefox
                msOverflowStyle: 'none', // For Internet Explorer and Edge
            }}
            >
                <style>
                    {`
                    /* Hide scrollbar for Chrome, Safari and Opera */
                    .my-4::-webkit-scrollbar {
                        display: none;
                    }
                    `}
                </style>
            <Outlet />
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