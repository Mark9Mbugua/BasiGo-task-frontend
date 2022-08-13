import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import CreateLeadModal from "../create-lead-modal/create-lead-modal.component";

import {
  LeadsPageWrapper,
  LeadsContainer,
  LeadDetails,
  CreateLeadButton,
  Title,
} from "./leads.styles";

const Leads = ({ leads }) => {
  const [modal, setModal] = useState(false);
  const navigate = useNavigate();

  const toggleOpenModal = () => {
    setModal(!modal);
  };

  // let leadsCount = leads.length;

  return (
    <LeadsPageWrapper>
      <Title>Leads</Title>
      <CreateLeadButton onClick={() => toggleOpenModal()}>
        Create A Lead
      </CreateLeadButton>
      <CreateLeadModal
        modal={modal}
        setModal={setModal}
        toggleOpenModal={toggleOpenModal}
      />
      <LeadsContainer>
        {leads.map((lead) => (
          <LeadDetails key={lead.id}>
            <p>Name: {lead.name}</p>
            <p>Phone Number: {lead.phone}</p>
            <p>Location: {lead.location}</p>
            <p>Created By: {lead.userId}</p>
            <Link to={`/create-customer/${lead.id}`}>Convert to Customer</Link>
          </LeadDetails>
        ))}
      </LeadsContainer>
    </LeadsPageWrapper>
  );
};

export default Leads;
