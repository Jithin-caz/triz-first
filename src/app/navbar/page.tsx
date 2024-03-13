"use client"
import { useEffect, useState } from "react"


export default function Navbar()
{
  const [drp,setDrp]=useState(false)
  const [des,setdes]=useState(true)
  const [mobDrp,setmobDrp]=useState(false)
  useEffect(()=>
  {
    const mediaQuery = window.matchMedia('(max-width: 790px)');
    if(mediaQuery.matches)
    {
        setdes(false)
    }
  },[])
    return <div className="nav-container">{des?<div className="nav-des">
    <div className="navbar">
        
        <div>
        <button onClick={()=>
        {
            if(drp)
            setDrp(false)
            else
            setDrp(true)
        }}>Courses <img width="20" height="20" src="https://img.icons8.com/ios/50/expand-arrow--v1.png" alt="expand-arrow--v1"/></button>
    <form className="search-bar">
      <input className="search-bar-inner"
        type="text"
        placeholder="Search..."
      />
      <img width="30" height="30" src="https://img.icons8.com/ios/50/search--v1.png" alt="search--v1"/>
    </form>
        </div>
       
        <div>
            <h1>LOGO HERE</h1>
        </div>
       <div>
           <button>Donate</button>
           <button>Login</button>
           <button>Sign up</button>
        </div>
        
    </div>
    {drp &&<div className="drop-dwn-cont" >
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
    </div>} </div>:
     <div className="nav-mob">
        <div>
        <h1>your logo</h1>
        <div><button className="hamburger"> <img width="30" height="30" src="https://img.icons8.com/ios/50/search--v1.png" alt="search--v1"/></button>
        <button
        onClick={()=>
            {
                if(mobDrp)
                setmobDrp(false)
                else
                setmobDrp(true)
            }}
        className="hamburger">{!mobDrp?<img width="30" height="30" src="https://img.icons8.com/ios/50/menu--v1.png" alt="menu--v1"/>:<img width="30" height="30" src="https://img.icons8.com/ios/50/delete-sign--v2.png" alt="delete-sign--v2"/>}</button></div>
        </div>
       {mobDrp&&
        <div>
        <button>Donate</button><br />
           <button>Login</button><br />
           <button>Sign up</button><br />
           <button 
            onClick={()=>
                {
                    if(drp)
                    setDrp(false)
                    else
                    setDrp(true)
                }}
           >Courses <img width="20" height="20" src="https://img.icons8.com/ios/50/expand-arrow--v1.png" alt="expand-arrow--v1"/></button><br />
       {drp && <div className="drop-dwn-cont-mob" >
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
    </div>}
        </div>
       } 
        
        </div>}
    
   </div>
}