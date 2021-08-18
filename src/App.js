import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import InfoList from "./components/InfoList/InfoList";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import InfoDetail from "./components/InfoDetail/InfoDetail";

import { Container, Nav, Navbar } from "react-bootstrap";
import Aceuil from "./components/Aceuil/Aceuil";
import TvCrad from "./components/TvCard/TvCrad";
import Effectif from "./components/Effectif/Effectif";

function App() {
  return (
    <div className="App">
      <Navbar className="navbar">
        <Container>
          <img
            src="/psg.jpg"
            width="30"
            height="30"
            className="logo"
            alt="React Bootstrap logo"
          />
          <div className="sugg">
            {" "}
            <Nav>
              <Nav.Link id="colorsugg" href="Aceuil">
                Aceuil
              </Nav.Link>
              <Nav.Link id="colorsugg" href="Effectif">
                Effectif
              </Nav.Link>

              <Nav.Link id="colorsugg" href="PSG-TV">
                PSG-TV
              </Nav.Link>
            </Nav>
          </div>
        </Container>
      </Navbar>

      <Router>
        <Switch>
          <Route path="/" exact component={Aceuil} />
          <Route path="/Aceuil" exact component={Aceuil} />
          <Route path="/Effectif" exact component={Effectif} />
          <Route path="/PSG-TV" exact component={TvCrad} />
          <Route path="/Effectif/info" exact component={InfoList} />

          <Route path="/Effectif/Aceuil" exact component={Aceuil} />
          <Route path="/Effectif/Effectif" exact component={Effectif} />
          <Route path="/Effectif/info/Effectif" exact component={Effectif} />
          <Route path="/Effectif/info/Aceuil" exact component={Aceuil} />
          <Route path="/Effectif/PSG-TV" exact component={TvCrad} />
          <Route path="/Effectif/info/PSG-TV" exact component={TvCrad} />
          <Route
            path="/Effectif/info/:id"
            exact
            render={(props) => <InfoDetail {...props} />}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
