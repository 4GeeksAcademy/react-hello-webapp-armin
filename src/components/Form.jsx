import React from "react";
import { Link } from "react-router-dom";  // Custom hook for accessing the global state.

export const Form = ({ title, formData, onChange, onSubmit, error, buttonText }) => {
    // Access the global state and dispatch function using the useGlobalReducer hook.


    return (
        <div className="container">
            <div className="d-flex justify-content-center">
                <h1>{title}</h1>

            </div>
            <form>
                <div className="mb-3">
                    <label htmlFor="fullName" className="form-label">Full Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="fullName"
                        aria-describedby="emailHelp"
                        placeholder="Full Name"
                        value={formData.name}
                        onChange={(e) => onChange("name", e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
                        value={formData.email}
                        onChange={(e) => onChange("email", e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Phone</label>
                    <input
                        type="tel"
                        className="form-control"
                        id="phone"
                        aria-describedby="emailHelp"
                        placeholder="Enter Phone"
                        value={formData.phone}
                        onChange={(e) => onChange("phone", e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="address" className="form-label">Address</label>
                    <input
                        type="text"
                        className="form-control"
                        id="address"
                        placeholder="Enter address"
                        value={formData.address}
                        onChange={(e) => onChange("address", e.target.value)}
                    />
                </div>

                {error && <div className="alert alert-danger">{error}</div>}

                <div>
                    <button className="col-12 btn btn-success" onClick={onSubmit}>
                        {buttonText}
                    </button>
                </div>

            </form>

            <Link to="/" className="form-check-label" htmlFor="exampleCheck1">
                or get back to contacts
            </Link>
        </div>
    );
};