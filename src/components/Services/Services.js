import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';

const Services = () => {
	const [ services, setServices ] = useState([]);
	useEffect(() => {
		fetch('http://localhost:5000/services').then((res) => res.json()).then((data) => setServices(data));
	}, []);

	return (
		<div>
			<h1 className="text-success mx-auto mb-5">Our Services for you</h1>

			<div className="container">
				<Row xs={1} md={3} className="g-5">
					{services.map((service) => (
						<Col key={service.id}>
							<Card>
								<Card.Img variant="top" src={service.img} />
								<Card.Body>
									<Card.Title>{service.name}</Card.Title>
									<Card.Text>{service.description}</Card.Text>
									{/* <h4>ID : {service.id}</h4> */}
								
									{/* <h3>Price : ${service.price}</h3> */}
									<Link to={`/booking/${service._id}`}>
									<button className="btn btn-warning">Details</button>
									</Link>
									

								</Card.Body>
							</Card>
						</Col>
					))}
				</Row>
			</div>
		</div>
	);
};

export default Services;
