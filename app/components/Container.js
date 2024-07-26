"use client"

import CityInput from "./CityInput";
import DisplayForecast from "./DisplayForecast";
import {useState} from "react";

export default function Container() {
    const [forecast, setForecast] = useState(null);

    const handleForecastFetch = (data) => {
        setForecast(data);
    }
    return (
        <div className=" flex flex-col items-center mt-9 w-5/6 h-4/5" >
            <DisplayForecast forecast={forecast}/>
            <CityInput onForecastFetch={handleForecastFetch}/>
        </div>
    )
}