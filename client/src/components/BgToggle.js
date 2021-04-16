/***************************************************************************************
 *    Title: React Particles animation background component
 *    Author: ReactJs Example
 *    Date: 11/29/2019
 *    Availability: https://reactjsexample.com/react-particles-animation-background-component/
 *
 ***************************************************************************************/

import React from 'react';
import ParticlesBg from "particles-bg";

export default function BgToggle(props) {

    if (props.toggle === false) {
        return (
            <ParticlesBg type="cobweb" bg={true}/>
        )
    } else {
        return null;
    }
}
