import React from "react";
import { Container } from "./Main.styles";

const Main: React.FC = () => {
  return (
    <Container>
      <h1>Welcome to Book Tracker</h1>
      <p>Start tracking your books here!</p>
      <h1>کتابهای من</h1>
      <form>
        <input type="text" name="bookname" placeholder="نام کتاب" />
        <button type="submit">افزودن</button>
      </form>
      <ul>
        <li></li>
      </ul>
    </Container>
  );
};

export default Main;
