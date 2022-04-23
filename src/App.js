import './styles/app.css'
import UpperBlock from "./components/UpperBlock";
import WeAre from "./components/WeAre";
import SelectedWorks from "./components/SelectedWorks";
function App() {
    return (
        <div className="App">
            <UpperBlock/>
            <WeAre/>
            <SelectedWorks/>
        </div>
    );
}

export default App;
