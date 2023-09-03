
import {React, useState, useEffect} from 'react'
import { CardService } from '../../services/Cards-Service';
import CardDashboard from "../../components/card-dashboard/Card-dashboard"
import Navbar from '../../components/navBar/NavBar';


export default function HomePage() {

  return (

   <div> 
 
    <Navbar />
    <CardDashboard />
      
      

</div>
  )
}








