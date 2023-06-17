import "./App.css";
import "semantic-ui-css/semantic.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Series from "./pages/Series";
import Comics from "./pages/Comics";
import Error404 from "./pages/Error404";
import Header from "./components/Header";
import useFetch from "./components/hooks/useFetch";

function App() {
  const marvelApi = useFetch('http://gateway.marvel.com/v1/public/comics?ts=1&apikey=6fe33fac321cfd73251ed74a9b71d7c6&hash=c75e2ea928b63a02f5483432a92c221f');
  //console.log(marvelApi);
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/inicio" exact component={() => <Home />} />
          <Route path="/series" exact component={() => <Series />} />
          <Route path="/comics" exact component={() => <Comics />} />
          <Route component={() => <Error404 />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;