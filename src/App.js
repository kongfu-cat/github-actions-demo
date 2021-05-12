import logo from './logo.svg';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>A Github Actions Demo</p>
                <a
                    className="App-link"
                    href="https://www.ruanyifeng.com/blog/2019/09/getting-started-with-github-actions.html"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn From This Blog (In Chinese)
                </a>
                <a
                    className="App-link"
                    href="https://docs.github.com/en/actions/reference/workflow-syntax-for-github-actions"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Github Actions Docs
                </a>
            </header>
        </div>
    );
}

export default App;
