import React, { useContext } from "react";
import { Context } from "../context/ContextApi";
import { categories } from '../utils/Menu'
import { useNavigate } from "react-router-dom";


const SideFeed = () => {
  const { category, setCategory} = useContext(Context);
  console.log(`MenuList -> ${category}`);
  const navigate = useNavigate();
  const handleClickMenu = (name, type) => {
    switch (type) {
      case "category":
          return setCategory(name);
      case "home":
          return setCategory(name);
      case "menu":
          return false;
      default:
          break;
  }
  }


  return (
    <>
  {categories.map((item)=>{
    return (
      <>
        <div key={item.name}>
          <div className="flex gap-2 cursor-pointer hover:bg-gray-200 p-2" onClick={()=>{handleClickMenu(item.name, item.type); navigate('/')}}>  
            <div className="text-xl">{item.icon}</div>
            <div className="font-semibold">{item.type === "home" ? "Home" : item.name}</div> 
          </div>
        </div>
      </>
    )
  }

  )}

    </>
  )
}

export default SideFeed