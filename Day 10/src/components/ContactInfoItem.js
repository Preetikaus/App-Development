import React from 'react';
import { MdPlace } from 'react-icons/md';
import styled from 'styled-components';
import PText from './Ptext.js';

const ItemStyles = styled.div`
  padding: 1rem;
  background-color: var(--deep-dark);
  display: flex;
  align-items: center;
  gap: 2rem;
  border-radius: 8px;
  margin-bottom: 2rem;
  color: var(--white);
  .icon {
    color: var(--white);
    background-color: var(--gray-2);
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    outline: none;
    border: none;
  }
  svg {
    width: 3rem;
  }
`;

export default function ContactInfoItem({
  icon = <MdPlace />,
  text = 'I need text ',
}) {
  return (
    <ItemStyles>
      <div className="icon">{icon}</div>
      <div className="info">
        <PText>{text}</PText>
      </div>
    </ItemStyles>
  );
}