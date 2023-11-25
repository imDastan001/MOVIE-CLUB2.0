import Body from "./component/body";
import { Provider } from "react-redux";
import appStore from "./utils/reduxstore";
import MovieInfo from "./component/movieInfo";
import Header from "./component/header";
import SearchMovie from "./component/searchmovie"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Provider store={appStore}>
        <div className="bg-gray-950 ">
          <Header />
          <Routes>
            <Route path="/" element={<Body />} />
            <Route path="movieinfo/:id" element={<MovieInfo />}/>
            <Route path="search/:name" element={<SearchMovie/>}/>
          </Routes>
        </div>
      </Provider>
    </Router>
  );
}

export default App;
