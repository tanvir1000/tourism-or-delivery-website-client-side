import React from 'react';
import './Footer.css';

const Footer = () => {
	return (
		<div className="container  p-4 footer-container mt-3">
			<div className="d-flex align-items-center  justify-content-between text-white">
				<div>
					<h5>PHONE SUPPORT</h5>
					<p>24 HOURS A DAY</p>
					<p>
						<small>+ 5546667</small>
					</p>
				</div>
				{/* <p className="text-denger">© Copyright 2021 TANVIR ADITTO</p> */}
				<h5>Email : www.booking.com</h5>
				<br />
				<textarea name="Comment" id="" placeholder="email.us send your feedback" cols="10" rows="2"></textarea>
				<br />
				<button>submit</button>
				
		
				<div>
					<h5>CONNECT WITH US</h5>
					{/* <p>@24?7?365 We ARE HERE</p> */}
					<small>Enjoy and stay connected</small>
				</div>
				
			</div>
		</div>
	);
};

export default Footer;
