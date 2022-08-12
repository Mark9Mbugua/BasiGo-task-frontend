import React from "react";

import CreateLead from "../create-lead/create-lead.component";

const Leads = ({ leads }) => {
  return (
    <div>
      <h2>Leads</h2>
      <CreateLead />
      <div>
        {leads.map((lead) => (
          <div>
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
