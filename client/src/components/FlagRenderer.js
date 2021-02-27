import React from 'react';
import FlagIcon from './FlagIcon';

export default function FlagRenderer(props) {
    if(props.code === ''){
        return null;
    }else{
        return <div><FlagIcon code={props.code} size='1x' /></div>
    }
}
