import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import img from '../../Logo/about_us.jpg';

const AboutUS = () => {
	return (
		<div>
			<div>
				<img className="w-50  m-5" src={img} alt="" />
			</div>
			<Container>
				<h1>Your Trusted Travel Parnter</h1>

				<ul>
					<li>
					Booking.com Holidays is a fast growing Tours & Travel Planner in Dhaka Bangladesh.

We started our journey in 2009 as an IT Company known as UNITECH BD SOFTWARE. In 2018 we start our travel agency Kite Bangladesh Holidays.

We are 100% local tour operator in Bangladesh. We always operate all tours by our own guides.

We don’t just offer tours and travel services but also provide reliable and hassle free travel planning facilities.

If you are planning to explore THE BANGLADESH, then we are here to Keep SURPRISING YOU!! We always make the tour comfortable & hassle free.


					</li>
				</ul>


			</Container>
			
		</div>
	);
};

export default AboutUS;
