import React from 'react';
import styled from 'styled-components';

const SectionTitleStyle = styled.div`
  text-align: center;
  p {
    font-family: Poppins, sans-serif;
    font-size: 3rem;
  }
  h2 {
    font-family: Poppins, sans-serif;
    font-size: 2rem;
    margin-top: 1rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    text-align: center;
    p {
      font-size: 1rem;
    }
    h2 {
      font-size: 1rem;
    }
  }
`;

export default function SectionTitle({
  subheading = 'Need Subheading',
  heading = 'need heading',
}) {
  return (
    <SectionTitleStyle className="section-title">
      <p>{subheading}</p>
      <h2>{heading}</h2>
    </SectionTitleStyle>
  );
}