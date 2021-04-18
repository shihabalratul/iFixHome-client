import React from 'react';
import { Link } from 'react-router-dom';
import admin from '../../../images/admin.svg';

const Navbar = () => {
	const auth = JSON.parse(localStorage.getItem("userInfo"));
	const handleSignOut = () => {
		localStorage.removeItem('userInfo');
		window.location.reload();
	}
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<div className="container-fluid mx-2">
				<div className="navbar-brand d-flex">
					<img className="icon-size" src={admin} alt="" />
					<h1 className="fs-2 fw-bold ms-2 mt-2"><span className="text-danger">i</span>Fix<span className="text-warning">Home</span></h1>
				</div>

				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<div className="d-flex ms-auto">
						<ul className="navbar-nav ">
							<li className="nav-item">
								<Link className="nav-link" to="/">Home</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/dashboard">Dashboard</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="#">Appointments</Link>
							</li>
							<li className="nav-item me-2">
								<Link className="nav-link" to="#">About Us</Link>
							</li>
							{!auth ? <li className="nav-item">
								<Link className="btn btn-outline-warning" to="/login">Sign in</Link>
							</li> : <li className="nav-item">
								<button onClick={handleSignOut} className="btn btn-outline-warning">Sign Out</button>
							</li>
							}
						</ul>

					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;