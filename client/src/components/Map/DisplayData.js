import React from 'react';

export default function DisplayData(props) {
    if(props.data.length === 0){
        return null;
    }
    else {
        //{props.data.data[0].alpha2Code && props.data.data[0].alpha2Code.toString()}
        //return <div>Hello</div>
        return <div>Hello {props.data.data[0].alpha2Code.toString()}</div>;
    }
}