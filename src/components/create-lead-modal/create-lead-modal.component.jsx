import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Form,
} from "reactstrap";

import { connect } from "react-redux";

import { createLead } from "../../redux/actions/leads";

const CreateLeadModal = ({ modal, toggleOpenModal, setModal, createLead }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [gender, setGender] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setModal(false);

    // Create user object
    const newLead = {
      name,
      phone,
      location,
      gender,
    };
    createLead(newLead);
  };
  return (
    <Modal
      isOpen={modal}
      modalTransition={{ timeout: 400 }}
      backdropTransition={{ timeout: 600 }}
      toggle={toggleOpenModal}
      size="md"
    >
      <ModalHeader toggle={toggleOpenModal}>
        <h3>Create A New Lead</h3>
      </ModalHeader>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <ModalBody>
          <Input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
            required
            style={{
              marginBlock: "1rem",
              padding: "0.7rem",
            }}
          />
          <Input
            type="text"
            name="phone"
            id="phone"
            placeholder="Phone Number"
            onChange={(e) => setPhone(e.target.value)}
            required
            style={{
              marginBlock: "1rem",
              padding: "0.7rem",
            }}
          />
          <Input
            type="text"
            name="location"
            id="location"
            placeholder="Location"
            onChange={(e) => setLocation(e.target.value)}
            required
            style={{
              marginBlock: "1rem",
              padding: "0.7rem",
            }}
          />
          <Input
            type="text"
            name="gender"
            id="gender"
            placeholder="Gender"
            required
            onChange={(e) => setGender(e.target.value)}
            style={{
              marginBlock: "1rem",
              padding: "0.7rem",
            }}
          />
        </ModalBody>
        <ModalFooter>
          <Button color="primary" type="submit">
            Create lead
          </Button>{" "}
          <Button color="secondary" onClick={() => toggleOpenModal()}>
            Cancel
          </Button>
        </ModalFooter>
      </Form>
    </Modal>
  );
};

// export default CreateLeadModal;
// const mapDispatchToProps = (dispatch) => ({
//   createLead: () => dispatch(createLead()),
// });

// export default connect(null, { mapDispatchToProps })(CreateLeadModal);
export default connect(null, { createLead })(CreateLeadModal);
