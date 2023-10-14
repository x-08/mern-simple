import logo from '../logo.svg';
import './styles/App.css';
import { useEffect, } from "react"
import { getQuestions } from '../services/questionServices';

function App() {

    useEffect(() => {
        const fetchData = async function () {
            let res = await getQuestions();
            console.log(res);
        }
        fetchData();
    }, [])


    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>client/src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://beta.reactjs.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React 18
                </a>
                <p>
                    Edit <code>routes/api/crud.js</code> for adding Backend
                    APIs.
                    <br />
                    View existing APIs at{' '}
                    <a
                        className="App-link"
                        href="http://localhost:4000/api/v1/get"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        /api/v1/...
                    </a>
                </p>
                <a
                    className="App-link"
                    href="https://github.com/GauravWalia19/MernBoilerPlate"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    MERN Boilerplate 1.0.5
                </a>
                <br />
                <a
                    className="App-link"
                    href="https://www.heroku.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Deploy on Heroku
                </a>
            </header>
        </div>
    );
}

export default App;
