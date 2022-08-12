import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getAllLeads } from "../../redux/actions/leads";

import Leads from "../../components/leads/leads.component";

const LeadsPage = ({ getAllLeads, leads }) => {
  useEffect(() => {
    getAllLeads();
  }, []);

  return (
    <div>
      <h1>Leads Page</h1>
      <Leads leads={leads} />
    </div>
  );
};

// export default LeadsPage;
const mapStateToProps = (state) => ({
  leads: state.leads.leads,
});

export default connect(mapStateToProps, { getAllLeads })(LeadsPage);
