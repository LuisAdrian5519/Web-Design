import { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [datetime, setDatetime] = useState('');
  const [description, setDescription] = useState('');

  function addNewtransaction(ev){
    // Take all the states and send them to Backend
    ev.preventDefault();
    const url = process.env.REACT_APP_API_URL;
    console.log(url);
    
  }
  return (
    <main>
      <h1>$400<span>.00</span></h1>
      <form onSubmit={addNewtransaction}>
        <div className='basics'>
          <input type="text"
                value={name}
                onChange={ev => setName(ev.target.value)}                 
                placeholder={'+200 new samsung tv'}/>
          
          <input type="datetime-local"
                value={datetime}
                onChange={ev => setDatetime(ev.target.value)}/>
        </div>
        <div className='description'>
          <input type="text"
                value={description}
                onChange={ev => setDescription(ev.target.value)}                 
                placeholder={'description'}/>
        </div>
        <button type='submit'>
          Add new transaction
        </button>
      </form>
      <div className='transactions'>

        <div className='transaction'>
          <div className='Left'>
            <div className='name'>New Samsung TV</div>
            <div className='description'>Time for a New TV</div>
          </div>
          <div className='Right'>
            <div className='price red'>-$500</div>
            <div className='datetime'>2022-12-18 15:45</div>
          </div>
        </div>

        <div className='transaction'>
          <div className='Left'>
            <div className='name'>Salary</div>
            <div className='description'>Time for a New TV</div>
          </div>
          <div className='Right'>
            <div className='price green'>+$500</div>
            <div className='datetime'>2022-12-18 15:45</div>
          </div>
        </div>

      </div>
    </main>
    
  );
}

export default App;
