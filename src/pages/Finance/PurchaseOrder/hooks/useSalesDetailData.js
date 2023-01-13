import { useState } from "react";
import SalesOrderDetail from "../data/salesOrderDetail.json";

const columns = [
  {
    title: "ITEM",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "STOCK",
    dataIndex: "stock",
    key: "stock",
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
];

const initialItems = [];

SalesOrderDetail.detail.items.map((item, index) => {
  initialItems.push({
    key: index,
    name: item.name,
    stock: item.stock,
    purchase_order: item.purchase_order,
    sales_quantity: item.sales_quantity,
    required_quantity: item.required_quantity,
  });
});

const useDetailData = () => {
  const [items, setItems] = useState(initialItems);

  return { items, columns, detail: SalesOrderDetail.detail };
};

export default useDetailData;
