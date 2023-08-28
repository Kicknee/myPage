import React from "react";

function SectionContact() {
  return (
    <section className="contact" id="contact">
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
    </section>
  );
}

export default SectionContact;
