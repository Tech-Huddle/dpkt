import React, {useState } from 'react'
import AccreditionsPage from '../Accreditations/AccreditionsPage';
import ControlledCarousel from '../../Carousel/Carousel';
import Loader from '../utility/Loader';
function Home() {
    const [loader,setLoader]=useState(true);
    setTimeout(()=>{
        setLoader(false)
    },2000)
    return (
        <>
        <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae aliquid, est temporibus reiciendis impedit rerum exercitationem qui consectetur similique laborum atque, illum obcaecati eum rem quia natus hic, repellat amet.</div>
        <Loader loader={loader}/>
        <ControlledCarousel/>
        <AccreditionsPage/>
       
        </>
    )
}

export default Home