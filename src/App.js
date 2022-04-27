import './styles/app.css'
import UpperBlock from "./components/UpperBlock";
import WeAre from "./components/WeAre";
import SelectedWorks from "./components/SelectedWorks";
import WhatWeDo from "./components/WhatWeDo";
import OurTeamBlock from "./components/OurTeamBlock";
function App() {
    return (
        <div className="App">
            <UpperBlock/>
            <WeAre/>
            <SelectedWorks/>
            <WhatWeDo/>
            <OurTeamBlock/>
        </div>
    );
}

export default App;
