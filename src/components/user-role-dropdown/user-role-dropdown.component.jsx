import React, { useState } from "react";
import {
  Main,
  DropDownContainer,
  DropDownHeader,
  DropDownListContainer,
  DropDownList,
  ListItem,
  DropdownArrow,
} from "./user-role-dropdown.styles";

import dropDownIcon from "../../assets/down-arrow.png";

const UserRoleDropDown = ({ role, setRole }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (value) => () => {
    setRole(value);
    setIsOpen(false);
    console.log(role);
  };

  console.log(typeof role);

  const options = ["LEAD GENERATOR", "CUSTOMER GENERATOR"];

  return (
    <Main>
      <DropDownContainer>
        <DropDownHeader onClick={toggling}>
          Role: {role || "LEAD GENERATOR"}
          <DropdownArrow src={dropDownIcon} />
        </DropDownHeader>
        {isOpen && (
          <DropDownListContainer>
            <DropDownList>
              {options.map((option) => (
                <ListItem onClick={onOptionClicked(option)} key={Math.random()}>
                  {option}
                </ListItem>
              ))}
            </DropDownList>
          </DropDownListContainer>
        )}
      </DropDownContainer>
    </Main>
  );
};

export default UserRoleDropDown;
