import React from "react";
import styled from "styled-components";
import { breakpoints } from "../breakpoints";

const Newsletter = () => {
  return (
    <FormkitForm
      action="https://app.convertkit.com/forms/2313210/subscriptions"
      className="seva-form formkit-form"
      method="post"
      data-sv-form="2313210"
      data-uid="62fc498025"
      data-format="inline"
      data-version="5"
    >
      <div className="formkit-background"></div>
      <div data-style="minimal">
        <div className="formkit-header" data-element="header">
          <FormkitHeading>we have a lot of things in the works.. subscribe to stay up to date</FormkitHeading>
        </div>
        <FormkitFields
          data-element="fields"
          data-stacked="false"
          className="seva-fields formkit-fields"
        >
          <div className="formkit-field">
            <FormkitInput
              className="formkit-input"
              name="email_address"
              aria-label="Email Address"
              placeholder="Email Address"
              required=""
              type="email"
            />
          </div>
          <FormkitSubmit
            data-element="submit"
            className="formkit-submit formkit-submit"
            title="Submit"
          >
            <div className="formkit-spinner">
              <div></div>
              <div></div>
              <div></div>
            </div>
            <span className="">Subscribe</span>
          </FormkitSubmit>
        </FormkitFields>
        <FinePrint className="formkit-guarantee" data-element="guarantee">
          <p>we won't send you spam. unsubscribe at any time.</p>
        </FinePrint>
      </div>
    </FormkitForm>
  );
};

export default Newsletter;

const FormkitForm = styled.form`
  margin-top: auto;
  width: 90%;


  @media ${breakpoints.laptop} {
    width: 70%;
  }

`;

const FormkitFields = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  justify-content: stretch;
  margin-top: auto;

`;

const FormkitHeading = styled.h2`
text-align: center;
margin: 1rem auto;


@media ${breakpoints.laptop} {
  max-width: 100%;
  }
`;

const FormkitInput = styled.input`
  width: 100%;

  background: none;
  border: none;
  color: #fff;
  border-bottom: 2px solid #fff;
  padding: 0.5rem;
`;

const FormkitSubmit = styled.button`
display: block;
background: #fff;
border: none;
`;

const FinePrint = styled.div`
  font-size: 0.8em;
  text-align: center;
`;
