import React from 'react';
import { CircularProgress } from '@material-ui/core';

export default function FlagRenderer(props) {
    if(props.loading){
        return <CircularProgress color="secondary" size={25} />;
    }else{
        return null;
    }
}
