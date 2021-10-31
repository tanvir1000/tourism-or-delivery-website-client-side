import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import AboutUS from './components/AboutUs/AboutUS';
import NotFound from './components/NotFound/NotFound';
import Services from './components/Services/Services';
import AddService from './components/AddService/AddService';
import Academics from './components/Academics/Academics';
import Booking from './components/Booking/Booking/Booking';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import ManageServices from './components/ManageServices/ManageServices';
import Booking2 from './components/Booking/Booking/Booking2';

function App() {
	return (
		<div className="App">

			<AuthProvider>
			<Router>
				<Header />
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route path="/home">
						<Home />
					</Route>
					<Route path="/about">
						<AboutUS />
					</Route>
					<Route path="/academics">
						<Academics />
					</Route>
					<PrivateRoute path="/service">
						<Services />
					</PrivateRoute>
					<Route path="/login">
						<Login/>
					</Route>
					<Route path="/register">
						<Register/>
					</Route>
					<Route path="/manageServices">
						<ManageServices></ManageServices>
					</Route>
					<Route path="/addService">
						<AddService></AddService>
						</Route>
					<PrivateRoute path="/booking/:id">
						<Booking></Booking>
						</PrivateRoute>
						<PrivateRoute path="/booking2/:id">
							<Booking2></Booking2>
							</PrivateRoute>

					<Route path="*">
						<NotFound />
					</Route>
				</Switch>
				<Footer />
			</Router>
			</AuthProvider>
		
		</div>
	);
}

export default App;
