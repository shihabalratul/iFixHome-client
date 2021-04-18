import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import admin from '../../../images/admin.svg';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { useHistory, useLocation } from 'react-router';

if (firebase.apps.length === 0) {
	firebase.initializeApp(firebaseConfig);
}


const Login = () => {
	const history = useHistory();
	const location = useLocation();
	const { from } = location.state || { from: { pathname: "/" } };

	const handleGoogleSignIn = () => {
		const provider = new firebase.auth.GoogleAuthProvider();
		firebase.auth()
			.signInWithPopup(provider)
			.then((result) => {
				const user = result.user;
				const userInfo = {
					name: user.displayName,
					img: user.photoURL,
					email: user.email
				}
				localStorage.setItem('userInfo', JSON.stringify(userInfo));
				history.replace(from);
				window.location.reload()

			});
	}


	return (
		<div className="p-5 d-flex justify-content-center pb-5 h-100">
			<div>
				<div className="d-flex justify-content-center">
					<img className="icon-size" src={admin} alt="" />
					<h1 className="fs-2 fw-bold ms-2 mt-2"><span className="text-danger">i</span>Fix<span className="text-warning">Home</span></h1>
				</div>
				<div className="m-5 p-5 shadow rounded-3 bg-light">
					<h3 className="d-flex justify-content-center">Login With</h3>
					<div className="my-5 border-secondary px-5 pt-3 pb-2 border rounded-pill btn btn-outline-dark" onClick={handleGoogleSignIn}>

						<h5><FontAwesomeIcon className="text-primary" icon={faGoogle} />  Sign in With Google</h5>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;