import React from 'react';

const ServiceCard = ({ service }) => {
	const { name, description, img, price } = service;
	return (
		<div className="col">
			<div className="card border-0 shadow rounded-3 grow h-100">
				<img src={img} className="card-img-top" alt="..." />
				<div className="card-body text-center">
					<h4 className="card-title">{name}</h4>
					<p className="card-text">{description}</p>
					<h4 className="text-warning">${price}</h4>
				</div>
			</div>
		</div>
	);
};

export default ServiceCard;