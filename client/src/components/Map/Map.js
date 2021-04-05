import React, {memo, useEffect, useState} from "react";
import DisplayData from "./DisplayData";
import axios from "axios";
import {
    ZoomableGroup,
    ComposableMap,
    Geographies,
    Geography
} from "react-simple-maps";

const geoUrl =
    "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const MapChart = ({ setTooltipContent }) => {
    const [countries, setCountries] = useState([]);
    const [country, setCountry] = useState([]);

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
        <div class="container">
            <div className="display">
                <DisplayData country={country} />
            </div>
            <div>
        <>
            <ComposableMap data-tip="" projectionConfig={{ scale: 200 }}>
                <ZoomableGroup disablePanning>
                    <Geographies geography={geoUrl}>
                        {({ geographies }) =>
                            geographies.map(geo => (
                                <Geography
                                    key={geo.rsmKey}
                                    geography={geo}
                                    onMouseEnter={() => {
                                        const { NAME } = geo.properties;
                                        setTooltipContent(`${NAME}`);
                                    }}
                                    onMouseLeave={() => {
                                        setTooltipContent("");
                                    }}
                                    onClick={async () => { //Display component here
                                        const {ISO_A2} = geo.properties; //alpha code 2 of country
                                        console.log(ISO_A2);
                                        console.log(countries);
                                        var result = countries.filter(obj => {
                                            if(obj.alpha2Code === ISO_A2){
                                                setCountry(obj);
                                                return obj;
                                            }
                                        })
                                        setTooltipContent("");
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
        </>
            </div>
        </div>
    );
};

export default memo(MapChart);