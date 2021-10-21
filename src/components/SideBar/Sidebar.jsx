import React from 'react'
import { BiConfused } from 'react-icons/bi';
import { IoMdHome } from 'react-icons/io';
import { MdHistory, MdOutlineLibraryBooks, MdSubscriptions } from "react-icons/md";
import { AiTwotoneLike } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";
import './_SideBar.scss';
import { Link } from 'react-router-dom';

const NavMenu =[
    {
        dispatch: '/',
        icon:IoMdHome,
        name:"home"
    },
    {
        dispatch: '/subscript',
        icon:MdSubscriptions,
        name:"subscription"
    },
    {
        dispatch: '/liked',
        icon:AiTwotoneLike,
        name:"liked"
    },
    {
        dispatch: '/',
        icon:MdHistory,
        name:"history"
    },
    {
        dispatch: '/',
        icon:MdOutlineLibraryBooks,
        name:"library"
    },
    {
        dispatch: '/',
        icon:BiConfused,
        name:"i don't know"
    },
]


export const Sidebar = ({sidebar,toggleSidebar}) => {
    return (
        <nav className={sidebar ? `sidebar open` : 'sidebar'}
            onClick={()=> toggleSidebar(false)}
        >
            {
                NavMenu.map((item, index)=>{
                    const {icon:Icon,name,dispatch} = item;
                    return (
                        <Link to={`${dispatch}`} key={index}>
                            <li >

                                <Icon size={20}/>
                                <span>{name}</span>
                            </li>
                        </Link>
                    )

                })
            }
            
            
            <hr />
            <li>
                <FiLogOut />
                <span>log Out</span>
            </li>
            <hr />


        </nav>
    )
}
