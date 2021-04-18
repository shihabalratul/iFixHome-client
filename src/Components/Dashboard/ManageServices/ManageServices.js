import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ServicesList from '../ServicesList/ServicesList';
import Sidebar from '../Sidebar/Sidebar';

const ManageServices = () => {
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
		<div className="row">
			<div className="col-md-2">
				<Sidebar />
			</div>
			<div className="col-md-10 p-5">
				<h3 className="text-warning fw-bold mb-3">Manage Services</h3>
				<div style={{ borderRadius: '15px' }} className="p-4 shadow ">
					{services?.[0] ? <table className="table text-center">
						<thead className="table-light">
							<tr>
								<td>Name</td>
								<td>Price</td>
								<td>Action</td>
							</tr>
						</thead>
						<tbody>{
							services.map(service => <ServicesList key={service._id} service={service} />)
						}
						</tbody>

					</table>
						:
						<div className="spinner-border text-warning d-flex mx-auto r align-items-center m-5 " role="status">
							<span className="visually-hidden">Loading...</span>
						</div>
					}
				</div>
			</div>
		</div>
	);
};

export default ManageServices;