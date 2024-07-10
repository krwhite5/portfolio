
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
   <div className='App'>
    <div className="App" id="Header">

      <Header></Header>
    </div>
    <div className="App" id="Main">
        <Main></Main>
        
      </div>
      <div className="App" id="Footer">
        </div><Footer></Footer>
     
     </div>
  );
}

export default App;
