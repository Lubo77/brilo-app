import './assets/scss/style.scss';
import Header from './components/Header'
import profileImg from './assets/img/profile-foto.jpg'
import data from './Data.js'
import Box from "./components/Box"

function App() {

  const projects = data.map(item => {
    return (
      <Box
        key={item.id}
        item={item}
      />
    )
  }) 

  return (
    <div className="App">
      <Header/>
      <div className='container-hero'>
        <div className='hero'>
          <div className='hero__left'>
            <h1 className='hero__left-title'>jack jackson</h1>
            <p className='hero__left-perex'>What a bounder joseph stalin groomed sportacus testosterone trophy freestyle derek griffiths robot moustache, derek griffiths groomed testosterone trophy marquess of queensbury freestyle joseph stalin robot mustache Nostrilis tickler sportacus what a bounder groomed?</p>
            <div className='hero__left-button'>learn more</div>
          </div>
          <div className='hero__right'>
            <img src={profileImg} alt='profile foto'/>
          </div>
        </div>
      </div>
      <div className="container-boxes">
        <h1 className="section-title">what I did</h1>
        <div className="boxes-grid">
            {projects}
        </div>
      </div>
      
      <footer>
          <p>© 2023 jack jackson</p>
      </footer>
    </div>
  );
}

export default App;
