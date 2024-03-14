"use client"
import Navbar from "./navbar/page";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from 'aos'
import 'aos/dist/aos.css';
import Hero from "./hero/pages";
import { useEffect,useState } from "react";
import Loader from "./loader/pages";
export default function Home() {
   const [loading,setLoading]=useState(false)
 useEffect(()=>{
  AOS.init({
  });
  
  const timer = setTimeout(() => {
   setLoading(true); // Set loading to false after a certain time or when your data has loaded
 }, 1000);
 return () => clearTimeout(timer); 

 },[])
  return (
   loading? <section>
<Navbar/>
<Hero/>
   </section> : <Loader/>
  );
}
