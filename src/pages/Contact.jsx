import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ContactCard } from "../components/ContactCard.jsx";
import { userContacts } from "../hooks/userContacts.jsx";

export const Contact = () => {

	const {
		contacts,
		deleteAllContacts,
		deleteContactById
	} = userContacts()

	return (
		<div className="container mt-5">
			<div className="row">
				

				<div className="col-9 mx-auto">
					<div className="card">
						<ul className="list-group list-group-flush">
							{contacts.map((contact) => {
								return (
									<ContactCard
										key={contact.id}
										contact={contact}
										onDelete={deleteContactById}
									/>
								);
							})}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};