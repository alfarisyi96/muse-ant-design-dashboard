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
    title: "DELIVERED QUANTITY",
    key: "delivered_quantity",
    dataIndex: "delivered_quantity",
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
    delivered_quantity: item.delivered_quantity,
  });
});

const useDetailData = () => {
  const [items, setItems] = useState(initialItems);

  return { items, columns, detail: SalesOrderDetail.detail };
};

export default useDetailData;
