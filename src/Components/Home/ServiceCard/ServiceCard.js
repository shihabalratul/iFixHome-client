import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
	const { _id, name, description, img, price } = service;
	return (
		<div className="col">
			<Link style={{ textDecoration: 'none' }} to={'/checkout/' + _id}>
				<div className="card border-0 shadow rounded-3 grow ">
					<div className="overflow-hidden img-parent">
						<img src={`data:${img.contentType};base64,${img.img}`} className="card-img-top card-photo h-100 " alt="..." />
					</div>
					<div className="card-body text-center">
						<h4 className="card-title text-dark">{name}</h4>
						<p className="card-text text-dark">{description}</p>
						<h4 className="text-warning">${price}</h4>
					</div>
				</div>
			</Link>
		</div >
	);
};

export default ServiceCard;