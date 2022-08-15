import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getAllLeads } from "../../redux/actions/leads";

import Leads from "../../components/leads/leads.component";
import Header from "../../components/header/header.component";

const LeadsPage = ({ getAllLeads, leads, user }) => {
  useEffect(() => {
    getAllLeads();
  }, []);

  let adminRole;
  if (user.role) {
    adminRole = user.role.type;
  } else {
    adminRole = user.Roles[0].type;
  }

  return (
    <>
      <Header />
      <Leads leads={leads} adminRole={adminRole} />
    </>
  );
};


const mapStateToProps = (state) => ({
  leads: state.leads.leads,
  user: state.auth.user,
});

export default connect(mapStateToProps, { getAllLeads })(LeadsPage);
