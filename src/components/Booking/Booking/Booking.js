import React, { useEffect, useState} from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const {id} = useParams();
    const [service, setService] = useState({})

    useEffect(() => {
        fetch(`http://localhost:5000/services/${id}`)
        .then(res => res.json())
        .then(data => setService(data));
    }, [])
    return (
        <div className='container'>

            <h5 >Plan ID: {id}</h5>
            <h4>Services name :{service?.name}</h4>
            <h4>Contact here for price : {service?.price}</h4>
            <img src={service.img} alt="" />
            {/* {
                service.map(sv => <div>
                    <h4>{sv.name}</h4>

                </div>)
            } */}

        </div>
    );
};

export default Booking;