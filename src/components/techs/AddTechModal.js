import React, { useState } from "react";
import M from "materialize-css/dist/js/materialize.min.js";

const AddTechLogModal = () => {
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastname] = useState(false);

  const onSubmit = () => {
    if (firstName === "" || lastName === "") {
      M.toast({
        html: "please enter the firstname and lastname"
      });
    } else {
      console.log(firstName, lastName);
    }

    // Clear fields
    setFirstname("");
    setLastname("");
  };

  return (
    <div id="add-tech-modal" className="modal">
      <div className="modal-content">
        <h4>New Technician</h4>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="firstName"
              value={firstName}
              onChange={e => setFirstname(e.target.value)}
            />
            <label htmlFor="firstName" className="active">
              First Name
            </label>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="lastName"
              value={lastName}
              onChange={e => setLastname(e.target.value)}
            />
            <label htmlFor="firstName" className="active">
              First Name
            </label>
          </div>
        </div>
      </div>

      <div className="modal-footer">
        <a
          href="#!"
          onClick={onSubmit}
          className="modal-close wave-effect blue waves-light btn-flat"
        >
          Enter
        </a>
      </div>
    </div>
  );
};

export default AddTechLogModal;
