import { Link } from "react-router-dom";

export const ContactCard = ({ contact, onDelete }) => {
	const handleConfirmDelete = () => {
		const modalElement = document.getElementById("deleteContact" + contact.id);
		const modalInstance = window.bootstrap.Modal.getInstance(modalElement);
		modalInstance.hide();
		onDelete(contact.id);
	};

	return (
		<div className="container">


			<div className="card d-flex flex-column justify-content-between mt-5 mx-5 p-5 align-items-center" style={{ maxWidth: "18rem", minHeight: "400px" }}>
				<div className="text-center mb-3">
					<img src="https://avatar.iran.liara.run/public" className="card-img-top" alt="..." style={{ width: "120px", height: "120px" }} />

				</div>
				<ul className="list-group list-group-flush d-flex gap-3">
					<h5 className="card-title">{contact.name}</h5>
					<i className="fa-solid fa-location-dot">{contact.address}</i>
					<i className="fa-solid fa-phone-flip"> {contact.phone}</i>
					<i className="fa-solid fa-envelope">{contact.email}</i>
				</ul>
				<div className="card-body d-flex gap-3">
					<div>
						<button
							type="button"
							style={{ border: "none", background: "none" }}
							data-bs-toggle="modal"
							data-bs-target={"#deleteContact" + contact.id}
						>
							<i className="fa-solid fa-trash"></i>
						</button>
					</div>
					<div
						className="modal fade"
						id={"deleteContact" + contact.id}
						tabIndex="-1"
						aria-labelledby="exampleModalLabel"
						aria-hidden="true"
					>
						<div className="modal-dialog">
							<div className="modal-content">
								<div className="modal-header">
									<h1 className="modal-title fs-5" id="exampleModalLabel">
										Are you sure?
									</h1>
									<button
										type="button"
										className="btn-close"
										data-bs-dismiss="modal"
										aria-label="Close"
									></button>
								</div>
								<div className="modal-body">
									Once executed, this action cannot be undone.
								</div>
								<div className="modal-footer">
									<button
										type="button"
										className="btn btn-secondary"
										data-bs-dismiss="modal"
									>
										OH no!
									</button>
									<button
										type="button"
										className="btn btn-primary"
										onClick={handleConfirmDelete}
									>
										Yes baby!
									</button>
								</div>
							</div>
						</div>
					</div>

					<Link to={"/EdContact/" + contact.id}>
						<i className="fa-solid fa-pen text-dark"></i>
					</Link>
				</div>
				
			</div>

		</div>



	);
};