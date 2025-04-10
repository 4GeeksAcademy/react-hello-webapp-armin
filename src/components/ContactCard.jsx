import { Link } from "react-router-dom";

export const ContactCard = () => {

	return (
		<div className="container">
			<nav className="navbar navbar-light bg-light">
				<div className="container">
					<Link to="/">
						<span className="navbar-brand mb-0 h1">React Boilerplate</span>
					</Link>
					<div className="ml-auto">
						<Link to="/addcontact">
							<button className="btn btn-success">Add new contact</button>
						</Link>
					</div>
				</div>
			</nav>


			<div className="card d-flex  justify-content-between align-items-center" style={{width: "500px"}}>
				<div className="">
					<img src="https://avatar.iran.liara.run/public" className="card-img-top" alt="..." />

				</div>
				<ul className="list-group list-group-flush d-flex gap-3">
					<h5 className="card-title">Mike Perez</h5>
					<i className="fa-solid fa-location-dot"> 45080 Guadalajara, Jal.</i>
					<i className="fa-solid fa-phone-flip"> 3329042563</i>
					<i className="fa-solid fa-envelope"> mike@gamil.com</i>
				</ul>
				<div className="card-body d-flex gap-3">
					<Link href="#" className="card-link btn btn-success">Editar</Link>
					<button href="#" className="card-link btn btn-danger">Eliminar</button>
				</div>
			</div>

		</div>


	);
};