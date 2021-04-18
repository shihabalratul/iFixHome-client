import React, { useEffect, useState } from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';
import axios from 'axios';
const Services = () => {
	const [services, setServices] = useState([])
	useEffect(() => {
		axios({
			method: 'get',
			url: 'https://desolate-ravine-36439.herokuapp.com/services'
		})
			.then(data => {
				setServices(data.data)
			})
	}, [])
	return (
		<main className="m-5">
			<h1 className="fw-bold text-warning text-center">Our Services</h1>
			<div className="row row-cols-1 row-cols-lg-4 row-cols-md-2 g-4 my-4">
				{
					services.map(service => <ServiceCard key={service._id} service={service} />)
				}
			</div>
		</main>
	);
};

export default Services;