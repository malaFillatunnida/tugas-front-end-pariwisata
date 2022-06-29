import { BrowserRouter, Route, Switch } from "react-router-dom";
// import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import List from "./components/List";
import Crud from "./components/Crud";
import Login from "./components/Login";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Navbar />
          <Home />
          <Footer />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/about">
          <Navbar />
          <About />
          <Footer />
        </Route>
        <Route path="/list">
          <Navbar />
          <List />
          <Footer />
        </Route>
        <Route path="/crud">
          <Navbar />
          <Crud />
          <Footer />
        </Route>
        {/* <Route path="/dashboard">
          <Navbar />
          <Dashboard />
        </Route> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
