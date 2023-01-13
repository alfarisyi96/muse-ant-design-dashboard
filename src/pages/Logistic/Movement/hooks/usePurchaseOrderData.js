import { useState } from "react";
import { Link } from "react-router-dom";
import salesOrderData from "../data/salesOrderData.json";

const columns = [
  {
    title: "CODE",
    dataIndex: "code",
    key: "code",
  },
  {
    title: "STOCK",
    key: "stock",
    dataIndex: "stock",
  },
  {
    title: "PO",
    key: "purchase_order",
    dataIndex: "purchase_order",
  },
  {
    title: "SALES QUANTITY",
    key: "sales_quantity",
    dataIndex: "sales_quantity",
  },
  {
    title: "REQUIRED QUANTITY",
    key: "required_quantity",
    dataIndex: "required_quantity",
  },
  {
    title: "DUE DATE",
    key: "due_date",
    dataIndex: "due_date",
  },
];

const initialData = [];

salesOrderData.map((salesOrder) => {
  initialData.push({
    key: salesOrder.id,
    code: (
      <Link to="/purchase-order/sales-order/detail">
        <span>
          <b>{salesOrder.code}</b>
        </span>
      </Link>
    ),
    stock: salesOrder.stock,
    po: salesOrder.po,
    sales_quantity: salesOrder.sales_quantity,
    required_quantity: salesOrder.required_quantity,
    due_date: salesOrder.due_date,
  });
});

const useData = () => {
  const [data, setData] = useState(initialData);

  return { data, columns };
};

export default useData;
