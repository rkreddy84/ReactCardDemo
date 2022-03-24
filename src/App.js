import logo from './logo.svg';
import './App.css';
import reportWebVitals from './reportWebVitals';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Card from "../src/cardsexp/Cards"
import Usestate from "../src/usestate/usestate";
import Fetchexp from "../src/fetchexp/fetchexp";
import Axiosexp from "../src/axiosexp/axiosexp";
import Badge from "../src/reduxexp/badge";
import CardRedux from "../src/reduxexp/card";
import Fragments  from "../src/fragmentsexp/fragments";
import HocMain from "../src/hocexp/hocmain";
import UseCotextMain from "../src/useContextexp/usecontextmain"
import HoFunctions from "../src/hofunctions/hofunctions"
import UseHistoryHome from "../src/useHistory/useHistoryhome"
import FormValidation from "./formValidationexp/Formvalidation"
function App() {
  return (
    <div className="App">
      <Card/>
    </div>
  );
}

export default App;
