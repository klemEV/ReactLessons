import './App.css';
import Message from './Message';

function App() {
  const name = 'John';

  return (
  <div>
    <Message name={name} />
    </div>
    );
  }

export default App;
