import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Header = () => {
	const {user, logOut} = useAuth();
	return (
		

		<div className="d-flex justify-content-between align-items-center head-container container mb-3   collapseOnSelect expand=lg">
			<div>
				<h2 className="text-info">
				Booking  <small>.com</small>
				</h2>
			</div>
			<div className="mx-5 collapseOnSelect expand=lg">
				<NavLink
					className="mx-3 text-decoration-none"
					to="/home"
					activeStyle={{
						fontWeight: 'bold',
						color: 'white'
					}}
				>
					Home
				</NavLink>
				<NavLink
					className="mx-3 text-decoration-none"
					to="/academics"
					activeStyle={{
						fontWeight: 'bold',
						color: 'white'
					}}
				>
					Tour Package
				</NavLink>
				<NavLink
					className="mx-3 text-decoration-none"
					to="/addService"
					activeStyle={{
						fontWeight: 'bold',
						color: 'white'
					}}
				>
					AddService
				</NavLink>
				<NavLink
					className="mx-3 text-decoration-none"
					to="/manageServices"
					activeStyle={{
						fontWeight: 'bold',
						color: 'white'
					}}
				>
					ManageServices
				</NavLink>
				
				<NavLink
					className="mx-3 text-decoration-none"
					to="/about"
					activeStyle={{
						fontWeight: 'bold',
						color: 'white'
					}}
				>
					Aboutus
				</NavLink>
				{user.email && <span style={{ color: 'white' }}>Hello {user.displayName} </span>}
                {
                    user.email ?
                        <button onClick={logOut}>log out</button>
                        :
                        <NavLink
						className="mx-5 text-decoration-none"
						 to="/login">Login</NavLink>}

				
			</div>
		</div>
	);
};

export default Header;
