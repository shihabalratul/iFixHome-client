import axios from 'axios';
import React from 'react';

const ServicesList = ({ service }) => {
	const { _id, name, price } = service;
	const handleRemove = () => {
		axios({
			method: 'POST',
			url: 'https://desolate-ravine-36439.herokuapp.com/removeService',
			data: { id: _id }
		})
			.then(async data => {
				console.log(data)
				await window.location.reload();

			});
	}
	return (
		<tr>

			<td>{name}</td>

			<td>${price}</td>
			<td>
				<span onClick={handleRemove} style={{ width: '100px' }} className="btn btn-danger" >Remove</span>
			</td>
		</tr >
	);
};

export default ServicesList;