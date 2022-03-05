import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from './Pages/Main';
import About from './Pages/About';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';
import Error from './Pages/Error';
import MorningStar from './Pages/Project Pages/MorningStar';
import GoogleBooksAPI from './Pages/Project Pages/GoogleBooksAPI';
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
                      <Route path="/MorningStar" component={MorningStar} />
                      <Route path="/GoogleBooksAPI" component={GoogleBooksAPI} />
                      <Route path="/Projects" component={Projects} />
                      <Route path="/Error" component={Error} />
                    </Switch>
                </div>
          </BrowserRouter>
    </div>
  );
}

export default App;
