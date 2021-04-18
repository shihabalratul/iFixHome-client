import axios from 'axios';
import React, { useEffect, useState } from 'react';
import BookingList from '../BookingList/BookingList';
import Sidebar from '../Sidebar/Sidebar';

const Bookings = () => {
	const [bookings, setBookings] = useState([]);
	useEffect(() => {
		const user = JSON.parse(localStorage.getItem("userInfo"));
		axios({
			method: 'POST',
			url: 'https://desolate-ravine-36439.herokuapp.com/getBookings',
			data: user
		})
			.then(data => {
				setBookings(data?.data)
			});
	}, [])




	return (
		<div className="row">
			<div className="col-md-2">
				<Sidebar />
			</div>
			<div className="col-md-10 p-5">
				<h3 className="text-warning fw-bold mb-3">Bookings</h3>
				<div style={{ borderRadius: '15px' }} className="p-4 shadow ">
					<table className="table">
						<thead className="table-light">
							<tr>
								<td>Services</td>
								<td>Name</td>
								<td>Email ID</td>
								<td>Paid With</td>
								<td>Price</td>
								<td>Status</td>
							</tr>
						</thead>
						<tbody>{
							bookings.map(booking => <BookingList key={booking._id} booking={booking} />)
						}

						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

export default Bookings;