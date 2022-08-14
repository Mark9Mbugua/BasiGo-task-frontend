import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getAllCustomers } from "../../redux/actions/customers";

import Header from "../../components/header/header.component";

const CustomersPage = ({ getAllCustomers, customers }) => {
  useEffect(() => {
    getAllCustomers();
  }, []);

  return (
    <div>
      <Header />
      <h1>Customers Page</h1>
      <div>
        {customers.map((customer) => (
          <div key={customer.id}>
            <p>Name: {customer.name}</p>
            <p>Phone Number: {customer.phone}</p>
            <p>Location: {customer.location}</p>
            <p>Created By: {customer.userId}</p>
            <img src={customer.Customer?.photo} />
            <p>{customer.Customer?.annualEarning}</p>
            {customer.Customer?.Products?.map((product) => {
              return (
                <div key={product?.id}>
                  <p>Product Name: {product?.name}</p>
                  <p>Product Description: {product?.description}</p>
                </div>
              );
            })}
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  customers: state.customers.customers,
});

export default connect(mapStateToProps, { getAllCustomers })(CustomersPage);
