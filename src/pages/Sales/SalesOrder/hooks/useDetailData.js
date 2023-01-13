import { useState } from "react";
import { Typography } from "antd";
import SalesOrderDetail from "../data/salesOrderDetail.json";

const { Text } = Typography;

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
    title: "QUANTITY",
    key: "quantity",
    dataIndex: "quantity",
  },
  {
    title: "DELIVERED",
    key: "delivered",
    dataIndex: "delivered",
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

SalesOrderDetail.detail.items.map((item, index) => {
  initialItems.push({
    key: index,
    name: item.name,
    stock: item.stock,
    delivered: item.delivered,
    purchase_order: item.purchase_order,
    quantity: (
      <>
        {item.stock + item.purchase_order >= item.quantity ? (
          item.quantity
        ) : (
          <Text strong={true} type="danger">{item.quantity}</Text>
        )}
      </>
    ),
    price: item.price.toLocaleString("id-ID"),
    sub_total: <b>{(item.quantity * item.price).toLocaleString("id-ID")}</b>,
  });
  initialTotalAmount += item.quantity * item.price;
});

const useDetailData = () => {
  const [totalAmount, setTotalAmount] = useState(initialTotalAmount);
  const [items, setItems] = useState(initialItems);

  return { items, columns, totalAmount, detail: SalesOrderDetail.detail };
};

export default useDetailData;
