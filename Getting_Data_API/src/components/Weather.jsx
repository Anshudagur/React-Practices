import { useState, useEffect } from 'react';
import { Search } from 'lucide-react';

const Weather = () => { 
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [currentLoc, setCurrentLocation] = useState({
            name: 'Kolkata, India',
            lon: 88.36,
            lat: 22.57
    });

    // Location data that will be use in combo box option
    const locations = [
        {
            name: 'Kolkata, India',
            lon: 88.36,
            lat: 22.57
        },
        {
            name: 'Mumbai, India',
            lat: 19.0760,
            lon: 72.8777
        },
        {
            name: 'London, UK',
            lat: 51.5072,
            lon: -0.1276
        },
        {
            name: 'New York, USA',
            lat: 40.7128,
            lon: -74.0060
        },
        {
            name: 'Tokyo, Japan',
            lat: 35.6762,
            lon: 139.6503
        },
        {
            name: 'Sydney, Australia',
            lat: -33.8688,
            lon: 151.2093
        }
    ]


    useEffect(() => {
            async function getWeatherData() {
                try {
                    setLoading(true);
                    const res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${currentLoc.lat}&longitude=${currentLoc.lon}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code`);
                    if (!res.ok) throw new Error('Failed to weather data');
                    const data = await res.json();
                    setWeather(data.current);
                }
                catch (err){
                    setError(err.message);
                }
                finally { 
                    setLoading(false);
                }
            }
        
            getWeatherData();
        
    }, [currentLoc])
    
    function handelClick(e) {
        const clickedOption = e.target.value;
        locations.forEach((location) => { if (location.name === clickedOption) { setCurrentLocation(location) } })
    }

    return (
        <>
            <div className="w-full max-w-sm mx-auto p-6 bg-linear-to-br from-slate-900 via-blue-950 to-slate-900 rounded-2xl shadow-2xl border border-blue-900/50">
                <form className="flex flex-col gap-6" >
                    <div className="flex items-center gap-3 bg-blue-950/60 rounded-full px-4 py-2 border border-blue-800/50 focus-within:ring-2 focus-within:ring-blue-500 transition">
                        <label className="flex items-center gap-3 bg-white/20 rounded-full px-4 py-2 focus-within:ring-2 focus-within:ring-blue-400 transition">
                            <select onChange={ handelClick}>
                                {locations.map((location) => (
                                    <option
                                        key={location.name}
                                        value={location.name}
                                        className="bg-slate-900 text-blue-50"
                                    >
                                        { location.name}
                                    </option>
                                ))}
                            </select>
                        </label>
                    </div>

                    {weather && (
                    <>
                        <h3 className="text-6xl font-light text-white tracking-tight">
                            {weather.temperature_2m}
                            <span className="text-3xl align-top">°C</span>
                        </h3>

                        <p className="text-white/70 text-sm">{new Date(weather.time).toLocaleString([], {
                            dateStyle: "medium",
                            timeStyle: "short",
                        })}</p>
                        <p className="text-white/70 text-sm">Humidity: {weather.relative_humidity_2m}</p>
                        <p className="text-white/70 text-sm">Wind Speed: {weather.wind_speed_10m}</p>
                    </>
                )}
                </form>
            </div>
        </>
    )
}

export default Weather;