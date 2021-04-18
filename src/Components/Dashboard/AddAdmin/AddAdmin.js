import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import Sidebar from '../Sidebar/Sidebar';

const AddAdmin = () => {
	const { register, handleSubmit, formState: { errors } } = useForm();
	const onSubmit = (data, e) => {
		axios({
			method: 'post',
			url: 'https://desolate-ravine-36439.herokuapp.com/addAdmin',
			data: data
		})
			.then(data => {
				e.target.reset();
			})

	}
	return (
		<div className="row">
			<div className="col-md-2">
				<Sidebar />
			</div>
			<div className="col-md-10">
				<form className="m-5 p-5 shadow rounded-3" onSubmit={handleSubmit(onSubmit)}>
					<h3 className="text-warning fw-bold mb-3">Add Admin</h3>
					<div className="mb-3">
						<label htmlFor="description" className="form-label">Admin Email</label>
						<input type="email" className="form-control" {...register("email", { required: true })} />
						{errors.description && <span>Please Enter Admin Email.</span>}
					</div>
					<button type="submit" className="btn btn-warning d-flex ms-auto px-5 my-2">Submit</button>
				</form>
			</div>
		</div>
	);
};

export default AddAdmin;