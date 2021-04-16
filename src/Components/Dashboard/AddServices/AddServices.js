import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import Sidebar from '../Sidebar/Sidebar';

const AddServices = () => {
	const { register, handleSubmit, watch, formState: { errors } } = useForm();
	const onSubmit = data => {
		const formData = new FormData();
		formData.append('name', data.name);
		formData.append('price', data.price);
		formData.append('description', data.description);
		formData.append('img', data.img[0]);
		console.log(data)

		axios({
			// headers: {
			// 	'Content-Type': 'multipart/form-data'
			// },
			method: 'post',
			url: 'http://localhost:5000/addServices',
			data: formData
		})
			.then(res => console.log(res))
	};
	return (
		<div className="row">
			<div className="col-md-2">
				<Sidebar />
			</div>
			<div className="col-md-10">

				<form className="m-5 p-5 shadow rounded-3" onSubmit={handleSubmit(onSubmit)}>
					<div className="mb-3">
						<label htmlFor="name" className="form-label">Service Name</label>
						<input type="text" className="form-control" {...register("name", { required: true })} />
						{errors.name && <span>Please Enter Service Name.</span>}
					</div>

					<div className="mb-3">
						<label htmlFor="price" className="form-label">Price</label>
						<input type="number" className="form-control" {...register("price", { required: true })} />
						{errors.price && <span>Please Enter Service Price.</span>}
					</div>
					<div className="mb-3">
						<label htmlFor="description" className="form-label">Description</label>
						<textarea type="text" className="form-control" rows="5" {...register("description", { required: true })} />
						{errors.description && <span>Please Enter Service Description.</span>}
					</div>

					<div className="mb-3">
						<label htmlFor="img" className="form-label">Image</label>
						<input type="file" className="form-control" {...register("img", { required: true })} />
						{errors.img && <span>Please Enter Service Image.</span>}
					</div>
					<button type="submit" className="btn btn-warning d-flex ms-auto px-5 my-2">Submit</button>
				</form>
			</div>

		</div>
	);
};

export default AddServices;