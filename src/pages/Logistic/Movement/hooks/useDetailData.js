import { useState } from "react";
import { Typography } from "antd";
import movementDetail from "../data/movementDetail.json";

const { Text } = Typography;

const columns = [
  {
    title: "ITEM",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "STOCK BEFORE",
    dataIndex: "stock_before",
    key: "stock_before",
  },
  {
    title: "IN",
    dataIndex: "in",
    key: "in",
  },
  {
    title: "OUT",
    dataIndex: "out",
    key: "out",
  },
  {
    title: "LAST STOCK",
    key: "stock",
    dataIndex: "stock",
  },
];

const initialItems = [];

movementDetail.detail.items.map((item, index) => {
  initialItems.push({
    key: index,
    name: item.name,
    stock_before: item.stock_before,
    in: item.in,
    out: item.out,
    stock:
      parseFloat(item.stock_before) +
      parseFloat(item.in) -
      parseFloat(item.out),
  });
});

const useDetailData = () => {
  const [items, setItems] = useState(initialItems);

  return { items, columns, detail: movementDetail.detail };
};

export default useDetailData;
