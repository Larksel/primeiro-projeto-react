import './App.css';
import banner from './assets/bannerFeira.jpg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p className='Titulo'>Feira Digital</p>
        <div className='img-container'>
          <img src={banner} className="App-logo" alt="logo" />
          <p className='introducao'>
            Vegetais frescos em apenas um clique!
          </p>
          <button className='btnIntro'>
            Conheça já
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
