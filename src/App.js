import './assets/scss/style.scss';
import Header from './components/Header'
import profileFoto from './assets/img/profile-foto.jpg'

function App() {
  return (
    <div className="App">
      <Header/>
      <div className='container-hero'>
        <div className='hero'>
          <div className='hero_left'>
            <h1 className='hero_left-title'>jack jackson</h1>
            <p className='hero_left-perex'>What a bounder joseph stalin groomed sportacus testosterone trophy freestyle derek griffiths robot moustache, derek griffiths groomed testosterone trophy marquess of queensbury freestyle joseph stalin robot mustache Nostrilis tickler sportacus what a bounder groomed?</p>
            <div className='hero_left-button'>learn more</div>
          </div>
          <div className='hero_right'>
            <img src={profileFoto} alt='profile foto'/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
