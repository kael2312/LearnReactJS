import logo from './logo.svg';
import './App.css';
import { useEffect } from "react";
import categoryApi from './API/categoryAPI';

function App() {

    useEffect(() => {
        const fetchCategories = async () => {
            const params = {
                _limit: 2
            }
            const listCategories = await categoryApi.getAll(params)
            console.log(listCategories);
        }

        fetchCategories();
    }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
