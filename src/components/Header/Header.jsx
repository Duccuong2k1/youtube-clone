import React from 'react'
import './_Header.scss';
import { FaBars } from "react-icons/fa";
import { GrYoutube } from "react-icons/gr";
import { BiSearch } from "react-icons/bi";
import { IoMdApps } from "react-icons/io";
import {  IoNotificationsOutline } from "react-icons/io5";

export const Header = ({toggleSidebar}) => {
    return (
        <div className="header">
            <FaBars className="header__menu" size={26} onClick={() => toggleSidebar()} />
            <span to='/'> <GrYoutube size={26} className="header__menu__logo"/></span>
            <form className="header__form-search">
                <input type="text" placeholder="search" />
                <button type="submit" className="btn">
                    <BiSearch />
                </button>
            </form>
            <div className="header__icon">
                <IoMdApps size={26} />
                <IoNotificationsOutline size={26}/>
                <img src="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg" alt="avatar" />
            </div>
        </div>
    )
}
