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
import PurchaseOrderSalesDetail from "./pages/Purchase/PurchaseOrder/SalesOrderDetail";

import FinanceSalesOrder from "./pages/Finance/SalesOrder";
import FinanceSalesOrderForm from "./pages/Finance/SalesOrder/SalesOrderForm";
import FinanceSalesOrderDetail from "./pages/Finance/SalesOrder/SalesOrderDetail";

import FinancePurchaseOrder from "./pages/Finance/PurchaseOrder";
import FinancePurchaseOrderForm from "./pages/Finance/PurchaseOrder/PurchaseOrderForm";
import FinancePurchaseOrderDetail from "./pages/Finance/PurchaseOrder/PurchaseOrderDetail";

import Monitoring from "./pages/Monitoring/Monitoring";
import MonitoringDetail from "./pages/Monitoring/Monitoring/MonitoringDetail";

import Stock from "./pages/Logistic/Stock";

import DataItem from "./pages/Data/Item";
import DataWarehouse from "./pages/Data/Warehouse";
import DataCustomer from "./pages/Data/Customer";
import DataSupplier from "./pages/Data/Supplier";

import StockMovement from "./pages/Logistic/Movement";
import StockMovementForm from "./pages/Logistic/Movement/StockMovementForm";
import StockMovementDetail from "./pages/Logistic/Movement/StockMovementDetail";
import StockMovementSalesOrderDetail from "./pages/Logistic/Movement/SalesOrderDetail";
import StockMovementPurchaseOrderDetail from "./pages/Logistic/Movement/PurchaseOrderDetail";

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
          <Route exact path="/purchase-order/sales-order/:id" component={PurchaseOrderSalesDetail} />

          <Route exact path="/finance/sales-order" component={FinanceSalesOrder} />
          <Route exact path="/finance/sales-order/form" component={FinanceSalesOrderForm} />
          <Route exact path="/finance/sales-order/detail/:id" component={FinanceSalesOrderDetail} />
          
          <Route exact path="/finance/purchase-order" component={FinancePurchaseOrder} />
          <Route exact path="/finance/purchase-order/form" component={FinancePurchaseOrderForm} />
          <Route exact path="/finance/purchase-order/detail/:id" component={FinancePurchaseOrderDetail} />

          <Route exact path="/logistic/movement" component={StockMovement} />
          <Route exact path="/logistic/movement/form" component={StockMovementForm} />
          <Route exact path="/logistic/movement/detail/:id" component={StockMovementDetail} />
          <Route exact path="/logistic/movement/sales/:id" component={StockMovementSalesOrderDetail} />
          <Route exact path="/logistic/movement/purchase/:id" component={StockMovementPurchaseOrderDetail} />

          <Route exact path="/logistic/stock" component={Stock} />

          <Route exact path="/monitoring" component={Monitoring} />
          <Route exact path="/monitoring/detail/:id" component={MonitoringDetail} />

          <Route exact path="/data/item" component={DataItem} />
          <Route exact path="/data/customer" component={DataCustomer} />
          <Route exact path="/data/supplier" component={DataSupplier} />
          <Route exact path="/data/warehouse" component={DataWarehouse} />
          
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
