import React, {memo, useEffect, useState} from "react";
import axios from "axios";
import DisplayData from "./DisplayData";
import {
    ZoomableGroup,
    ComposableMap,
    Geographies,
    Geography
} from "react-simple-maps";

const geoUrl =
    "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const rounded = num => {
    if (num > 1000000000) {
        return Math.round(num / 100000000) / 10 + "Bn";
    } else if (num > 1000000) {
        return Math.round(num / 100000) / 10 + "M";
    } else {
        return Math.round(num / 100) / 10 + "K";
    }
};


const MapChart = ({ setTooltipContent }) => {
    const [countries, setCountries] = useState([]);
    const [data, setData] = useState([]);
    const delay = ms => new Promise(res => setTimeout(res, ms));
    async function fetchData(name) {
        axios.get('/api/country/' + name)
            .then(function(response){
                setData(response.data);
                console.log(response.data);
            })
    }

    useEffect(() => {
        async function fetchCountry() {
            axios.get('https://restcountries.eu/rest/v2')
                .then(function(response){
                    setCountries(response.data);
                })
        }
      fetchCountry();
    });

    return (
        <>
            <ComposableMap data-tip="" projectionConfig={{ scale: 200 }}>
                <ZoomableGroup>
                    <Geographies geography={geoUrl}>
                        {({ geographies }) =>
                            geographies.map(geo => (
                                <Geography
                                    key={geo.rsmKey}
                                    geography={geo}
                                    onMouseEnter={() => {
                                        const { NAME, POP_EST } = geo.properties;
                                        setTooltipContent(`${NAME} — ${rounded(POP_EST)}`);
                                    }}
                                    onMouseLeave={() => {
                                        setTooltipContent("");
                                    }}
                                    onClick={async () => { //Display component here
                                        const {ISO_A2} = geo.properties; //name of country
                                        console.log(geo.properties);
                                        console.log(countries);
                                        var result = countries.filter(obj => {
                                            return obj.alpha2Code === ISO_A2;
                                        })
                                        console.log(result);
                                        console.log(result[0].area);
                                        if(result[0].area !== undefined){
                                            setTooltipContent(`${result[0].area}`);
                                        }
                                    }}
                                    style={{
                                        default: {
                                            fill: "#194f4e",
                                            outline: "none"
                                        },
                                        hover: {
                                            fill: "#ff5533",
                                            outline: "none"
                                        },
                                        pressed: {
                                            fill: "#E42",
                                            outline: "none"
                                        }
                                    }}
                                />
                            ))
                        }
                    </Geographies>
                </ZoomableGroup>
            </ComposableMap>
            <DisplayData data={data}/>
        </>
    );
};

export default memo(MapChart);