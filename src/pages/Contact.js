import '../App.css';
import Copyright from '../components/footer/Copyright';
import Formcontact from '../components/contact/Formcontact';

const Contact = () => {
  return (
    <div className="Contact">



      <main className="App-main">
        <Formcontact/>
      </main>

      <footer className="App-footer">
        <Copyright/>
      </footer>



    </div>
  );
}

export default Contact;
