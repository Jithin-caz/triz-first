"use client"
import Navbar from "./navbar/page";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from 'aos'
import 'aos/dist/aos.css';
import Hero from "./hero/pages";
import { useEffect } from "react";
export default function Home() {
 useEffect(()=>{
  AOS.init({
  });
 },[])
  return (
   <section>
<Navbar/>
<Hero/>
   </section>
  );
}
