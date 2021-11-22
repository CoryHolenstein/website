import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from './Pages/Main';
import About from './Pages/About';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';
import Error from './Pages/Error';
import './App.css';

function App() {
  return (
      <div>
          <BrowserRouter>
              <div>
                  <Switch>
                      <Route path="/" component={Main} exact />
                      <Route path="/Main" component={Main} />
                      <Route path="/About" component={About} />
                      <Route path="/Contact" component={Contact} />
                      <Route path="/Projects" component={Projects} />
                      <Route path="/Error" component={Error} />
                    </Switch>
                </div>
          </BrowserRouter>
    </div>
  );
}

export default App;
