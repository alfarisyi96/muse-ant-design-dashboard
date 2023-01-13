import { useState } from "react";
import { Typography } from "antd";
import PurchaseOrderDetail from "../data/purchaseOrderDetail.json";

const columns = [
  {
    title: "ITEM",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "QUANTITY",
    dataIndex: "quantity",
    key: "quantity",
  },
  {
    title: "RECEIVED",
    key: "received",
    dataIndex: "received",
  },
  {
    title: "PRICE",
    key: "price",
    dataIndex: "price",
  },
  {
    title: "SUB TOTAL",
    key: "sub_total",
    dataIndex: "sub_total",
  },
];

const columnsSalesOrder = [
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
  {
    title: "QUANTITY",
    key: "quantity",
    dataIndex: "quantity",
  },
  {
    title: "PRICE",
    key: "price",
    dataIndex: "price",
  },
  {
    title: "SUB TOTAL",
    key: "sub_total",
    dataIndex: "sub_total",
  },
];

const initialItems = [];
let initialTotalAmount = 0;

PurchaseOrderDetail.detail.items.map((item, index) => {
  initialItems.push({
    key: index,
    name: item.name,
    quantity: item.quantity,
    received: item.received,
    price: item.price.toLocaleString("id-ID"),
    sub_total: <b>{(item.quantity * item.price).toLocaleString("id-ID")}</b>,
  });
  initialTotalAmount += item.quantity * item.price;
});

const initialSalesOrderItems = [];

PurchaseOrderDetail.detail.sales_order.map((salesOrder, index) => {
  const items = [];
  let total = 0;
  salesOrder.items.map((item, itemIndex) => {
    items.push({
      key: itemIndex,
      name: item.name,
      stock: item.stock,
      purchase_order: item.purchase_order,
      sales_quantity: item.sales_quantity,
      required_quantity: item.required_quantity,
      quantity: item.quantity,
      price: item.price.toLocaleString("id-ID"),
      sub_total: <b>{(item.quantity * item.price).toLocaleString("id-ID")}</b>,
    });
    total += item.quantity * item.price;
  });

  initialSalesOrderItems.push({
    code: salesOrder.code,
    due_date: salesOrder.due_date,
    items: items,
    total: total,
  });
});

const useDetailData = () => {
  const [totalAmount, setTotalAmount] = useState(initialTotalAmount);
  const [items, setItems] = useState(initialItems);
  const [salesOrderitems, setSalesOrderItems] = useState(
    initialSalesOrderItems
  );

  return {
    items,
    salesOrderitems,
    columns,
    columnsSalesOrder,
    totalAmount,
    detail: PurchaseOrderDetail.detail,
  };
};

export default useDetailData;
