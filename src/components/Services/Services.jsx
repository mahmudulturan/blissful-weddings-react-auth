/* eslint-disable react/no-unescaped-entities */
import {useState, useEffect} from 'react';
import Service from './Service';
const Services = () => {
    const [services, setServices] = useState([])
    const [displayCount, setDisplayCount] = useState(6)
    useEffect(()=>{
        fetch('/services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div className="bg-primary py-10">
            <div className="w-11/12 mx-auto">
                <div className="text-center">
                <h3 className="text-3xl md:text-4xl text-contrast font-bold">Our Services</h3>
                <p className="md:text-lg text-base font-medium max-w-4xl mx-auto">We're confident in our ability to exceed your expectations and make your wedding day stress-free and truly memorable. Let us take care of the details, so you can focus on celebrating your love. Your dream wedding starts here.</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                    {
                        services.slice(0,displayCount).map(service=> <Service key={service.id} service={service}></Service>)
                    }
                </div>
                {
                    <div className={`${ displayCount===services.length? "hidden": "flex"} justify-center my-6`}>
                    <button onClick={()=> setDisplayCount(services.length)} className='my-3 px-3 py-2 rounded-md bg-accent hover:bg-secondery transition duration-200 font-semibold text-contrast text-2xl'>See All</button>
                     </div>
                }
            </div>
        </div>
    );
};

export default Services;