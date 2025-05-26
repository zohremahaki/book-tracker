import "./App.css";

function App() {
  return (
    <div>
      <h1>کتابهای من</h1>
      <form>
        <label>نام کتاب را وارد کن:</label>
        <input type="text" name="bookname" placeholder="نام کتاب" />
        <button type="submit">افزودن</button>
      </form>
      <ul>
        <li></li>
      </ul>
    </div>
  );
}

export default App;
