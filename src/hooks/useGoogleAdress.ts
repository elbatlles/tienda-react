import { useState,useEffect } from 'react';
import axios from 'axios';
import {APIKEY} from '../type/Types'
 import React from 'react'
 
 interface Props {
    address:any
 }
 
 const useGoogleAdress = (props: Props) => {
     const {address}=props
    const [map, setmap] = useState({})
    const API=`https://maps.googleapis.com/maps/api/geocode/json?address=${address}
    key=${APIKEY}`
    
    useEffect( () => {
        const googleMaps =async () =>{
            const response= await axios(API)
            setmap(response.data.results[0].gepmetry.location)
        }
        googleMaps()
        return () => {
             map
        }
    }, [])
 }
 
 export default useGoogleAdress
 