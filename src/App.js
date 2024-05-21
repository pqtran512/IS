import {Routes,Route} from "react-router-dom";
import { path } from "./ultils/constant";
import { Auth, Login, Register, Home, Homepage, BookDetail, Search} from "./containers";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={path.LOGIN} element={<Login/>} />
        <Route path={path.REGISTER} element={<Register/>} />
        <Route path={path.HOME} element={<Home/>} >
          <Route path='*' element={<Homepage/>} />
          <Route path={path.BOOK_DETAIL} element={<BookDetail/>} />
          <Route path={path.SEARCH} element={<Search/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
