import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Academics = () => {
	const [ packages, setPackages ] = useState([]);
	useEffect(() => {
		fetch('https://howling-broomstick-61781.herokuapp.com/packages').then((res) => res.json()).then((data) => setPackages(data));
	}, []);
	return (
		<div className="container">
			<h4 className="mx-auto text-success mb-5">welcome to our packages</h4>
			<Row xs={1} md={3} className="g-4 container">
				{packages.map((packages) => (
					<Col key={packages.Id}>
						<Card>
							<Card.Img variant="top" src={packages.img} />
							<Card.Body>
								<Card.Title>{packages.name}</Card.Title>
								<h5>Tourtime : {packages.Tourtime}</h5>
								<p>Cost : {packages.cost}</p>
								<Link to={`/booking2/${packages._id}`}>
								
								<button className="btn btn-danger">Details</button>
								</Link>
								
							</Card.Body>
						</Card>
					</Col>
				))}
			</Row>
		</div>
	);
};

export default Academics;
