import '../App.css';
import Copyright from '../components/footer/Copyright';
import ActionRE from '../components/recherche/ActionRE';

const BarreRE = () => {
    return (
      <div className="Barre">
        <header className="App-header">
     
     </header>

        <main className="App-main">

        <ActionRE/>
   
        </main>
  
        <footer className="App-footer">
          <Copyright/>
        </footer>
  
      </div>
    );
  }
  export default BarreRE;
