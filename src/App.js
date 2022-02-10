import './App.css';
import {HashRouter as Router, Routes, Route} from 'react-router-dom';
import Olympic from './containers/Olympic/index';

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route element={<Olympic />} path="/" />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
