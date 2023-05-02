import '../App.css';
import Copyright from '../components/footer/Copyright';
import Recette from '../components/main/Recette';


function App() {
  return (
    <div className='recette'>
        <header className="App-header">
     
     </header>
    <main className="App-main">
    
      <div className='flex justify-around mt-5'>
        <div>
          <Recette img="./crepe-sucre.jpg" recette="Crêpes sucrées" ingredients="Farine Oeufs Lait Beurre Sucre Sel" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed blandit metus at ex ultrices, in semper tortor convallis. Fusce vel sollicitudin metus." />
        </div>
        <div>
          <Recette img="./crepe-sale.jpeg" recette="Crêpes salées" ingredients="Farine Lait Oeufs Beurre Garniture Sel" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed blandit metus at ex ultrices, in semper tortor convallis. Fusce vel sollicitudin metus." />
        </div>
        <div>
          <Recette img="./gateau.jpg" recette="Gâteau crêpe" ingredients="Farine Sucre Beurre Sel Oeufs Lait" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed blandit metus at ex ultrices, in semper tortor convallis. Fusce vel sollicitudin metus." />
        </div>
      </div>
     </main>
      <footer className="App-footer">
        <Copyright/>
      </footer>
    </div>
  );
}

export default App;