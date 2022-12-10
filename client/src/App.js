import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter,
} from "react-router-dom";

import Home from "./Components/Home";
import Sidebar from "./Components/Sidebar/Sidebar";
import { useState } from "react";
import { Row, Col } from "react-bootstrap";
import SearchBooks from "./Components/SearchBooks";
import AddBooks from "./Components/AddBooks";

function App() {
  const [isLoading, setLoading] = useState(true);
  const [sidebarLink, setSidebarLink] = useState("Home");
  return (
    <div className="App">
      <Router>
        <Row>
          <Col md={3}>
            <Sidebar
              sidebarLink={sidebarLink}
              setSidebarLink={setSidebarLink}
            />
          </Col>
          <Col md={9}>
            <div className="app_container">
              <Switch>
                <Route path="/" exact>
                  <Home setLoading={setLoading} />
                </Route>
                <Route path="/search" exact>
                  <SearchBooks setLoading={setLoading} />
                </Route>
                {/* <Route path="/search" exact>
                  <SearchBooks isLoading={isLoading} setLoading={setLoading} />
                </Route> */}
                <Route path="/add" exact>
                  <AddBooks isLoading={isLoading} setLoading={setLoading} />
                </Route>
              </Switch>
            </div>
          </Col>
        </Row>
      </Router>
    </div>
  );
}

export default App;
