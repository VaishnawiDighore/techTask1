import './App.css';
import UserCard from './Components/UserCard.js/UserCard';

function App() {
  const items = ['Item 1', 'Item 2', 'Item 3'];
  return (
    <div className="App">
      <UserCard name="Vaishnawi" email="vaishnawidighore@example.com" />
      <h3>Items</h3>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
