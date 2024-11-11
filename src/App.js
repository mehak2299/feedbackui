import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Feedback_Item from './Components/Feedback_Item';

function App() {
  return (
  <div>
    <Header title={'Feedback UI'}/>
    <div className='container'>
      <h1>My app</h1>
      <Feedback_Item/>
    </div>
  </div>
  );
}

export default App;
 