import React, {useState} from 'react';
import logo from '../../assets/logo.svg';
import './Home.css';
import MapChart from "../../components/Map/Map";
import ReactTooltip from "react-tooltip";
import '../../components/Map/Map.css';

function Home() {
    const [content, setContent] = useState("");

    return (
        <div>
            <header>
                <MapChart setTooltipContent={setContent} />
                <ReactTooltip>{content}</ReactTooltip>
            </header>
        </div>
    );
}

export default Home;
