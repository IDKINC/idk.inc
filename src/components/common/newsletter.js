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
          <FormkitHeading>we have a lot of things in the works.. </FormkitHeading><FormkitHeading>subscribe to stay up to date</FormkitHeading>
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
              placeholder="email address"
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
            <span className="">subscribe</span>
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
  width: 95;


  @media ${breakpoints.laptop} {
    width: 100%;
  }

`;

const FormkitFields = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-content: stretch;
  margin: auto auto;
  width: 95%;

  @media ${breakpoints.mobileL} {
  grid-template-columns: 1fr auto;

  width: 85%;
}

@media ${breakpoints.tablet} {
  width: 80%;
}
@media ${breakpoints.laptop} {
width: 70%;
  }

`;

const FormkitHeading = styled.h2`
text-align: center;
margin: 1rem auto;
font-size: 0.8rem;

@media ${breakpoints.mobileL} {
  font-size: 1rem;
}

@media ${breakpoints.tablet} {
  font-size: 1.25rem;
}
@media ${breakpoints.laptop} {
font-size: 1.2rem;
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

  &:focus{
    background: rgba(255,255,255,0.2);
  }
`;

const FormkitSubmit = styled.button`
display: block;
border: none;
border-radius: 0  0 var(--border-radius) var(--border-radius) ;
cursor: pointer;
background: var(--red);
border-bottom: 2px solid var(--red);
color: #fff;

&:hover{
  background: var(--dark-red);
}

@media ${breakpoints.mobileL} {
  border-radius: 0 var(--border-radius) var(--border-radius) 0;

}


`;

const FinePrint = styled.div`
  font-size: 0.8em;
  text-align: center;
`;
