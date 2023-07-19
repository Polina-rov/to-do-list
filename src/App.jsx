import './App.css';

import Header from './Header';
import ListTasks from './ListTasks';
import Footer from './Footer';

function App() {
  return (
    <div className='container'>
      <Header title="To do list" />
      <ListTasks />
      <Footer />
    </div>
  );
}

export default App;
