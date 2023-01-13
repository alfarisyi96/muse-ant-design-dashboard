import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import Tables from "./pages/Tables";
import Billing from "./pages/Billing";
import Rtl from "./pages/Rtl";
import Profile from "./pages/Profile";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import LogIn from "./pages/LogIn";
import Main from "./components/layout/Main";
import "antd/dist/antd.css";
import "./assets/styles/main.css";
import "./assets/styles/responsive.css";

import SalesOrder from "./pages/Sales/SalesOrder";
import SalesOrderForm from "./pages/Sales/SalesOrder/SalesOrderForm";
import SalesOrderDetail from "./pages/Sales/SalesOrder/SalesOrderDetail";

import PurchaseOrder from "./pages/Purchase/PurchaseOrder";
import PurchaseOrderForm from "./pages/Purchase/PurchaseOrder/PurchaseOrderForm";
import PurchaseOrderDetail from "./pages/Purchase/PurchaseOrder/PurchaseOrderDetail";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/login" exact component={LogIn} />
        <Route path="/sign-up" exact component={SignUp} />
        <Route path="/sign-in" exact component={SignIn} />
        <Main>
          <Route exact path="/dashboard" component={Home} />

          <Route exact path="/sales-order" component={SalesOrder} />
          <Route exact path="/sales-order/form" component={SalesOrderForm} />
          <Route exact path="/sales-order/detail/:id" component={SalesOrderDetail} />
          
          <Route exact path="/purchase-order" component={PurchaseOrder} />
          <Route exact path="/purchase-order/form" component={PurchaseOrderForm} />
          <Route exact path="/purchase-order/detail/:id" component={PurchaseOrderDetail} />
          
          <Route exact path="/tables" component={Tables} />
          <Route exact path="/billing" component={Billing} />
          <Route exact path="/rtl" component={Rtl} />
          <Route exact path="/profile" component={Profile} />
          <Redirect from="*" to="/dashboard" />
        </Main>
      </Switch>
    </div>
  );
}

export default App;
