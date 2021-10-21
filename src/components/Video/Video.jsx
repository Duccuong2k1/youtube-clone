import React from 'react';
import './_Video.scss';
import { IoEyeSharp } from "react-icons/io5";
export const Video = () => {
    return (
        <div className="video">
            <div className="video__top">
                <img src="https://i.ytimg.com/vi/8ugiEL98yN8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA1zJ1zUamveUR5t-VVz-jeF7jc7w" alt="" />
                <span>98:00</span>
            </div>
            <div className="video__title">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </div>
            <div className="video__detail">
                <span>
                    <IoEyeSharp />
                    7k view
                </span>
                <span>
                    6 days ago
                </span>
            </div>
            <div className="video__channel">
                <img src="https://yt3.ggpht.com/ytc/AKedOLSQnPeUQ9rFmkq9oOvnO--vHir9MuJ1SBWWJFx-=s88-c-k-c0x00ffffff-no-rj" alt="" />
                <p>demo video</p>
            </div>
        </div>
    )
}
