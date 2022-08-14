import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getAllCustomers } from "../../redux/actions/customers";

import Header from "../../components/header/header.component";

import {
  ItemsPageWrapper,
  ItemsContainer,
  Title,
  Text,
  ItemTitle,
} from "../../components/common/global-styles.styles";

import {
  CustomerImg,
  ImgContainer,
  ItemDetails,
} from "./customers-page.styles";

const CustomersPage = ({ getAllCustomers, customers }) => {
  useEffect(() => {
    getAllCustomers();
  }, []);

  console.log(customers);

  return (
    <>
      <Header />
      <ItemsPageWrapper>
        <Title>Customers</Title>
        <ItemsContainer>
          {customers.map((customer) => (
            <ItemDetails key={customer.id}>
              <ImgContainer>
                <CustomerImg src={customer.Customer?.photo} />
              </ImgContainer>
              <Text>
                <ItemTitle>Name: </ItemTitle>
                {customer.name}
              </Text>
              <Text>
                <ItemTitle>Phone Number: </ItemTitle>
                {customer.phone}
              </Text>
              <Text>
                <ItemTitle>Location: </ItemTitle>
                {customer.location}
              </Text>
              <Text>
                <ItemTitle>Created By: </ItemTitle>
                {customer.User?.username}
              </Text>
              <Text>
                <ItemTitle>Annual Earnings: </ItemTitle>
                {customer.Customer?.annualEarning}
              </Text>
              <h5>Products</h5>
              {customer.Customer?.Products?.map((product) => {
                return (
                  <div key={product?.id}>
                    <Text>{product?.name}</Text>
                    {/* <Text>Product Description: {product?.description}</Text> */}
                  </div>
                );
              })}
            </ItemDetails>
          ))}
        </ItemsContainer>
      </ItemsPageWrapper>
    </>
  );
};

const mapStateToProps = (state) => ({
  customers: state.customers.customers,
});

export default connect(mapStateToProps, { getAllCustomers })(CustomersPage);
