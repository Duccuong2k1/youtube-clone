import React, { useState } from 'react'
import './_CategoriesBar.scss';
const keywords = [
   'All',
   'React js',
   'Angular js',
   'React Native',
   'use of API',
   'Redux',
   'Music',
   'Algorithm Art ',
   'Guitar',
   'Bengali Songs',
   'Coding',
   'Cricket',
   'Football',
   'Real Madrid',
   'Gatsby',
   'Poor Coder',
   'Shwetabh',
]
export const CategoriesBar = () => {
    const [activeElement,setActiveElement] = useState('All');
    const handleClick = (item)=>{
        setActiveElement(item)
    }

    return (
        <div className="categories-bar" >
            {
                keywords.map((item, i) => (
                    <span 
                        key={i}
                        onClick={() => handleClick(item)}
                        className = {activeElement === item ? 'active' :''}
                    >
                        {item}
                    </span>
                ))
            }
        </div>
    )
}
