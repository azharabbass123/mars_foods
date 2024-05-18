import React, { useState } from 'react'
import './style.css';
import Manu from './ManuApi.js';
import Navbar from './Navbar.js';
import ManuCard from './ManuCard';

const uniqueList = [
    ...new Set(
        Manu.map((curEle) =>{
        return curEle.category;
    })
),
"All",
];

console.log(uniqueList);
const Resturant = () => {
const [manuData, setManuData] = useState(Manu);
const [manuList, setManuList] = useState(uniqueList);

const filterItem = (category) =>{
    if(category === "All"){
        setManuData(Manu);
        return;
    }
    const updatedList = Manu.filter((curElem) =>{
        return curElem.category === category;
    });

    setManuData(updatedList);
}
  return (
    <>
        <Navbar filterItem={filterItem} manuList={manuList} />
        <ManuCard manuData={manuData} />
    </>
  )
}

export default Resturant