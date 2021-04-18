import axios from 'axios';
import React, { useContext } from 'react';
import { UserContext } from '../../../App';

const BookingList = ({ booking }) => {
	const [isAdmin, setIsAdmin] = useContext(UserContext);
	const { _id, name, service, email, price, paymentMethod, status } = booking;
	const pending = status === "Pending";
	const onGoing = status === "On Going";
	const done = status === "Done"

	const handleChange = e => {
		const updateDetails = {
			id: _id,
			status: e.target.value
		}
		axios({
			method: 'POST',
			url: 'https://desolate-ravine-36439.herokuapp.com/updateStatus',
			data: updateDetails
		})
			.then(async data => {
				await window.location.reload();

			});
	}

	return (
		<tr>
			<td>{service}</td>
			<td>{name}</td>
			<td>{email}</td>
			<td>{paymentMethod}</td>
			<td>${price}</td>
			<td>{isAdmin ? <select name="status" className={`btn ${pending && 'btn-outline-danger'} ${onGoing && 'btn-outline-warning'} ${done && 'btn-outline-success'}`} id="" defaultValue={status} onChange={handleChange} >
				<option className="btn-light" value="Pending">Pending</option>
				<option className="btn-light" value="On Going">On Going</option>
				<option className="btn-light" value="Done">Done</option>
			</select>
				:
				<span style={{ width: '100px' }} className={`btn ${pending && 'btn-outline-danger'} ${onGoing && 'btn-outline-warning'} ${done && 'btn-outline-success'}`} > {status}</span>
			}
			</td>
		</tr >
	);
};

export default BookingList;