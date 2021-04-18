import { faComments, faHome, faList, faPlus, faSignOutAlt, faThLarge, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import admin from '../../../images/admin.svg';
import './Sidebar.css';
const Sidebar = () => {
	const [isAdmin, setIsAdmin] = useContext(UserContext);
	const handleSignOut = () => {
		localStorage.removeItem('userInfo');
		window.location.reload();
	}

	return (
		<div className="sidebar d-flex flex-column justify-content-between col-md-2 pb-5 pt-3  bg-dark" style={{ height: "100vh" }}>
			<div>
				<div className="navbar-brand d-flex mb-3 ms-2">
					<img className="icon-size" src={admin} alt="" />
					<h1 className="fs-2 fw-bold ms-2"><span className="text-danger">i</span><span className="text-white" >Fix</span><span className="text-warning">Home</span></h1>
				</div>
				<ul className="list-unstyled">
					<li>
						<Link to="/" className="text-white btn w-100 py-2 text-start btn-side fs-5 rounded-0">
							<FontAwesomeIcon icon={faHome} /> Home
					</Link>
					</li>
					<li>
						<Link to="/bookings" className="text-white btn w-100 py-2 text-start btn-side fs-5 rounded-0 ">
							<FontAwesomeIcon icon={faList} /> Bookings
							</Link>
					</li>

					{isAdmin === true ? <div>
						<li>
							<Link to="/addServices" className="text-white btn w-100 py-2 text-start btn-side fs-5 rounded-0">
								<FontAwesomeIcon icon={faPlus} /> Add Services
						</Link>
						</li>

						<li>
							<Link to="/addAdmin" className="text-white btn w-100 py-2 text-start btn-side fs-5 rounded-0" >
								<FontAwesomeIcon icon={faUserPlus} /> Add Admin
						</Link>
						</li>
						<li>
							<Link to="/manage" className="text-white btn w-100 py-2 text-start btn-side fs-5 rounded-0" >
								<FontAwesomeIcon icon={faThLarge} /> Manage Services
						</Link>
						</li>
					</div> : <li>
						<Link to="/addReview" className="text-white btn w-100 py-2 text-start btn-side fs-5 rounded-0  ">
							<FontAwesomeIcon icon={faComments} /> Review
					</Link>
					</li>
					}
				</ul>
			</div>
			<div>
				<button onClick={handleSignOut} className="text-white btn w-100 py-2 text-start btn-side fs-5 rounded-0"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></button>
			</div>

		</div>
	);
};

export default Sidebar;