import './App.css';
import './style/style.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import StartScreen from './components/StartScreen'
import Game from './components/Game'
import TextbookSelection from './components/TextbookSelection';
import ClassSelection from './components/ClassSelection';


function App() {
  return (
    <Router>
      <div className="App">
          <Switch>
            <Route exact path='/' component={TextbookSelection}/>
            <Route path='/select-class/:textbook/:color' component={ClassSelection}/>
            <Route path='/start/:textbook/:class/:classNum' component={StartScreen}/>
            <Route path='/game/:textbook/:class' component={Game}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
