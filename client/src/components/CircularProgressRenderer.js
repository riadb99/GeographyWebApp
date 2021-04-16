/***************************************************************************************
 *    Title: Material UI Component - Circular Progress
 *    Author: Material UI
 *    Availability: https://material-ui.com/components/progress/
 *
 ***************************************************************************************/

import React from 'react';
import { CircularProgress } from '@material-ui/core';

export default function FlagRenderer(props) {
    if(props.loading){
        return <CircularProgress color="secondary" size={25} />;
    }else{
        return null;
    }
}
