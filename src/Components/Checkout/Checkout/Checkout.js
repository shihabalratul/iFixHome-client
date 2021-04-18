import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';
import Payment from '../Payment/Payment';
const Checkout = () => {
	const user = JSON.parse(localStorage.getItem("userInfo"));
	const { _id } = useParams();
	const [checkoutInfo, setCheckoutInfo] = useState({});

	useEffect(() => {
		axios.get('https://desolate-ravine-36439.herokuapp.com/getService?id=' + _id)
			.then(async data => {
				const newCheckoutInfo = await {
					name: user.name,
					email: user.email,
					status: 'Pending',
					service: data?.data[0].name,
					price: data.data[0].price,
					paymentMethod: 'Card'
				}
				await setCheckoutInfo(newCheckoutInfo)

			})
			.catch(err => console.log(err))
	}, [_id, user.name, user.email])
	console.log(checkoutInfo)
	return (


		<div className="row">
			<div className="col-md-2">
				<Sidebar />
			</div>
			{checkoutInfo?.service ?
				<div className="col-md-10">
					<div className="d-flex justify-content-center align-items-center m-5 p-5 shadow">
						<div>

							<h1 className="Make Payment my-5 text-center text-warning">Check Out</h1>
							<p><span className="fw-bold text-start">Selected Service: </span>{checkoutInfo.service}</p>
							<p><span className="fw-bold text-start">Price: </span>${checkoutInfo.price}</p>
							<Payment checkoutInfo={checkoutInfo} />
						</div>

					</div>
				</div>
				:
				<div className="spinner-border text-warning d-flex mx-auto r align-items-center m-5 " role="status">
					<span className="visually-hidden">Loading...</span>
				</div>
			}

		</div >



	);
};

export default Checkout;