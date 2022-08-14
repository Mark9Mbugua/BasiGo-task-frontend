import React, { useState } from "react";
import CreateLeadModal from "../create-lead-modal/create-lead-modal.component";

import {
  LeadsPageWrapper,
  LeadsContainer,
  LeadDetails,
  CreateLeadButton,
  Title,
} from "./leads.styles";

import { CustomLink } from "../common/global-styles.styles";

const Leads = ({ leads, adminRole }) => {
  const [modal, setModal] = useState(false);

  const toggleOpenModal = () => {
    setModal(!modal);
  };

  return (
    <LeadsPageWrapper>
      <Title>Leads</Title>
      {adminRole === "LEAD GENERATOR" && (
        <CreateLeadButton onClick={() => toggleOpenModal()}>
          Create A Lead
        </CreateLeadButton>
      )}
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
            <p>Created By: {lead.User?.username}</p>
            {adminRole === "CUSTOMER GENERATOR" && (
              <CustomLink to={`/create-customer/${lead.id}`}>
                Convert to Customer
              </CustomLink>
            )}
          </LeadDetails>
        ))}
      </LeadsContainer>
    </LeadsPageWrapper>
  );
};

export default Leads;
