import React, { useState } from "react";
import CreateLeadModal from "../create-lead-modal/create-lead-modal.component";

import { LeadDetails, CreateLeadButton } from "./leads.styles";

import {
  ItemsPageWrapper,
  ItemsContainer,
  Title,
  ItemTitle,
  Text,
} from "../common/global-styles.styles";

import { CustomLink } from "../common/global-styles.styles";

const Leads = ({ leads, adminRole }) => {
  const [modal, setModal] = useState(false);

  const toggleOpenModal = () => {
    setModal(!modal);
  };

  return (
    <ItemsPageWrapper>
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
      <ItemsContainer>
        {leads.map((lead) => (
          <LeadDetails key={lead.id}>
            <Text>
              <ItemTitle>Name: </ItemTitle>
              {lead.name}
            </Text>
            <Text>
              <ItemTitle>Phone Number: </ItemTitle>
              {lead.phone}
            </Text>
            <Text>
              <ItemTitle>Location: </ItemTitle>
              {lead.location}
            </Text>
            <Text>
              <ItemTitle>Created By: </ItemTitle>
              {lead.User?.username}
            </Text>
            {adminRole === "CUSTOMER GENERATOR" && (
              <CustomLink to={`/create-customer/${lead.id}`}>
                Convert to Customer
              </CustomLink>
            )}
          </LeadDetails>
        ))}
      </ItemsContainer>
    </ItemsPageWrapper>
  );
};

export default Leads;
