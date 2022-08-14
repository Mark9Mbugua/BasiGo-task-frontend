import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { connect } from "react-redux";

import {
  MainWrapper,
  FormHeader,
  FormContainer,
} from "./create-customer-page.styles";

import { getLead } from "../../redux/actions/leads";
import { createCustomer } from "../../redux/actions/customers";

import Header from "../../components/header/header.component";

const CreateCustomerPage = ({ getLead, lead, createCustomer }) => {
  const [annualEarning, setAnnualEarning] = useState(0);
  const [products, setProducts] = useState([]);
  const [file, setFile] = useState("");

  const { leadId } = useParams();

  let navigate = useNavigate();

  useEffect(() => {
    getLead(leadId);
  }, []);

  const { name, phone, location, gender } = lead;

  console.log(file);

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("products", products);

    const formData = new FormData();

    formData.append("type", 1);
    formData.append("name", name);
    formData.append("phone", phone);
    formData.append("location", location);
    formData.append("gender", gender);
    formData.append("photo", file);
    formData.append("annualEarning", annualEarning);
    formData.append("products", JSON.stringify(products));

    createCustomer(formData);

    await navigate("/customers");
  };

  const handleSelect = (selectedProducts) => {
    const allProducts = [];
    for (let i = 0; i < selectedProducts.length; i++) {
      allProducts.push(selectedProducts[i].value);
    }
    setProducts(allProducts);
  };

  return (
    <MainWrapper>
      <Header />
      <FormContainer>
        <Form onSubmit={(e) => handleSubmit(e)}>
          <FormHeader>Generate A Customer</FormHeader>
          <FormGroup>
            <Label for="name">Name</Label>
            <Input
              type="text"
              name="name"
              id="name"
              value={name}
              placeholder="Customer Name"
              disabled
            />
          </FormGroup>
          <FormGroup>
            <Label for="phone">Phone Number</Label>
            <Input
              type="text"
              name="phone"
              id="phone"
              value={phone}
              placeholder="Phone Number"
              disabled
            />
          </FormGroup>
          <FormGroup>
            <Label for="location">Location</Label>
            <Input
              type="text"
              name="location"
              id="location"
              value={location}
              placeholder="Location"
              disabled
            />
          </FormGroup>
          <FormGroup>
            <Label for="gender">Gender</Label>
            <Input
              type="text"
              name="gender"
              id="gender"
              value={gender}
              placeholder="Annual Earning"
              disabled
            />
          </FormGroup>
          <FormGroup>
            <Label for="annualEarning">Annual Earning</Label>
            <Input
              type="text"
              name="annualEarning"
              id="annualEarning"
              value={annualEarning}
              onChange={(e) => setAnnualEarning(e.target.value)}
              placeholder="Annual Earning"
              required
            />
          </FormGroup>
          <FormGroup>
            <Label for="products">Select Multiple (CTRL + Click to select multiple products)</Label>
            <Input
              type="select"
              name="products"
              id="products"
              value={products}
              onChange={(e) => {
                handleSelect(e.target.selectedOptions);
              }}
              multiple
              required
            >
              <option value="PRODUCT A">PRODUCT A</option>
              <option value="PRODUCT B">PRODUCT B</option>
              <option value="PRODUCT C">PRODUCT C</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <input
              type="file"
              name="photo"
              id="photo"
              accept="image/*"
              onChange={(e) => setFile(e.target.files[0])}
              required
            />
          </FormGroup>
          <Button
            type="submit
        "
            color="primary"
          >
            Create New Customer
          </Button>
        </Form>
      </FormContainer>
    </MainWrapper>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  lead: state.leads.lead,
});

export default connect(mapStateToProps, { getLead, createCustomer })(
  CreateCustomerPage
);
