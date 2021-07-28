import './App.css';
import './style/style.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import StartScreen from './components/StartScreen'
import TextbookSelection from './components/TextbookSelection';

//classes
import ClassSelection from './components/ClassSelection';
import ClassSelection2 from './components/ClassSelection2';
import ClassSelection3 from './components/ClassSelection3';

//games
import Game from './components/Game'
import Game2 from './components/Game2';
import Game3 from './components/Game3';


function App() {

  return (
    <Router>
      <div className="App">
          <Switch>
            <Route exact path='/' component={TextbookSelection}/>
            <Route path='/select-class/textbook1/:color' component={ClassSelection}/>
            <Route path='/select-class/textbook2/:color' component={ClassSelection2}/>
            <Route path='/select-class/textbook3/:color' component={ClassSelection3}/>
            <Route path='/start/:textbook/:class/:classNum' component={StartScreen}/>
            <Route exact path='/game/textbook1/:class' component={Game}/>
            <Route exact path='/game/textbook2/:class' component={Game2}/>
            <Route exact path='/game/textbook3/:class' component={Game3}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
