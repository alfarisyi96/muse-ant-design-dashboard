import { useState } from "react";
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
    title: "RECEIVED QUANTITY",
    key: "received_quantity",
    dataIndex: "received_quantity",
  },
];

const initialItems = [];

PurchaseOrderDetail.detail.items.map((item, index) => {
  initialItems.push({
    key: index,
    name: item.name,
    quantity: item.quantity,
    received_quantity: item.received_quantity,
  });
});

const useDetailData = () => {
  const [items, setItems] = useState(initialItems);

  return { items, columns, detail: PurchaseOrderDetail.detail };
};

export default useDetailData;
