import React, { useState } from "react";
import CreateLeadModal from "../create-lead-modal/create-lead-modal.component";

const Leads = ({ leads }) => {
  const [modal, setModal] = useState(false);

  const toggleOpenModal = () => {
    setModal(!modal);
  };

  return (
    <div>
      <h2>Leads</h2>
      <button onClick={() => toggleOpenModal()}>Create A Lead</button>
      <CreateLeadModal
        modal={modal}
        setModal={setModal}
        toggleOpenModal={toggleOpenModal}
      />
      <div>
        {leads.map((lead) => (
          <div key={lead.id}>
            <p>Name: {lead.name}</p>
            <p>Phone Number: {lead.phone}</p>
            <p>Location: {lead.location}</p>
            <p>Created By: {lead.userId}</p>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leads;
