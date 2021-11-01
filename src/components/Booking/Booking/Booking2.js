import React, { useEffect, useState} from 'react';
import { useParams } from 'react-router';

const Booking2 = () => {
    const {id} = useParams();
    const [packages, setAcademics] = useState({})

    useEffect(() => {
        fetch(`https://howling-broomstick-61781.herokuapp.com/packages/${id}`)
        .then(res => res.json())
        .then(data => setAcademics(data));
    }, [])
    return (
        <div className='container'>

            <h5 >Plan ID: {id}</h5>
            

        </div>
    );
};

export default Booking2;