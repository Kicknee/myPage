import React from "react";
import styled from "styled-components";

function SectionContact() {
  return (
    <StyledContact className="contact" id="contact">
      <form action="https://formspree.io/f/mknadrqp" method="POST">
        <label htmlFor="name">Imię i nazwisko:</label>
        <input type="text" name="name" id="name" required />
        <label htmlFor="email">Adres email:</label>
        <input type="email" name="email" id="email" required />
        <label htmlFor="message">Treść wiadomości:</label>
        <textarea type="textArea" name="message" id="message" required />
        <button type="submit" className="submit">
          WYŚLIJ
        </button>
      </form>
    </StyledContact>
  );
}

export default SectionContact;

const StyledContact = styled.section`
  max-width: 950px;
  height: 600px;
  grid-area: contact;
  position: relative;
  font-size: 1.9rem;
  align-self: center;
  justify-self: center;
  padding: 30px;
  background-color: ${(props) => props.theme.color.primary};
  backdrop-filter: blur(5px);

  form {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    font-size: 1.3rem;
  }
  input[type="text"],
  input[type="email"] {
    max-height: 40px;
    max-width: 50%;
  }
  textarea {
    height: 150px;
  }
  input[type="text"],
  input[type="email"],
  textarea {
    background-color: rgba(157, 149, 149, 0.5);
    outline: none;
    border: none;
    font-size: inherit;
    padding: 15px;
    color: white;
  }
  .submit {
    align-self: center;
    background-color: #174cd3;
    padding: 15px 40px;
    outline: none;
    border: none;
    font-size: 1.2rem;
    color: white;
    letter-spacing: 2px;
  }

  ${(props) => props.theme.lg} {
    width: 90%;
  }
  ${(props) => props.theme.sm} {
    width: 100%;
    height: 620px;

    input[type="text"],
    input[type="email"] {
      max-width: 100%;
    }
  }
`;
