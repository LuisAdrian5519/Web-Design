import './App.css';

function App() {
  return (
    <main>
      <h1>$400<span>.00</span></h1>
      <form>
        <div className='basics'>
          <input type="text" placeholder={'+200 new samsung tv'}/>
          <input type="datetime-local"/>
        </div>
        <div className='description'>
          <input type="text" placeholder={'description'}/>
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
            <div className='Price'>$500</div>
            <div className='datetime'>2022-12-18 15:45</div>
          </div>
        </div>
        <div className='transaction'>
          <div className='Left'>
            <div className='name'>New Samsung TV</div>
            <div className='description'>Time for a New TV</div>
          </div>
          <div className='Right'>
            <div className='Price'>$500</div>
            <div className='datetime'>2022-12-18 15:45</div>
          </div>
        </div>
      </div>
    </main>
    
  );
}

export default App;
