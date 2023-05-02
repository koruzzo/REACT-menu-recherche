import '../App.css';
import Copyright from '../components/footer/Copyright';
import Pageaccueil from '../components/main/Pageaccueil';

const Accueil = () => {
    return (
      <div className="App">
  
        <header className="App-header">
     
        </header>
  
        <main className="App-main">
          <Pageaccueil/>
        </main>
  
        <footer className="App-footer">
          <Copyright/>
        </footer>
  
      </div>
    );
  }
  export default Accueil;
