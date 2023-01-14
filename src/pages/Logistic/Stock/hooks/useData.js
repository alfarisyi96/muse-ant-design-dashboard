import { useState } from "react";
import stockData from "../data/stockData.json";

const columns = [
  {
    title: "CODE",
    dataIndex: "code",
    key: "code",
  },
  {
    title: "ITEM",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "PREVIOUS STOCK",
    key: "previous_stock",
    dataIndex: "previous_stock",
  },
  {
    title: "IN",
    key: "in",
    dataIndex: "in",
  },
  {
    title: "OUT",
    key: "out",
    dataIndex: "out",
  },
  {
    title: "LAST STOCK",
    key: "last_stock",
    dataIndex: "last_stock",
  },
];

const initialData = [];

stockData.map((stock) => {
  initialData.push({
    key: stock.id,
    code: stock.code,
    name: stock.name,
    previous_stock: stock.previous_stock,
    in: stock.in,
    out: stock.out,
    last_stock:
      parseFloat(stock.previous_stock) +
      parseFloat(stock.in) -
      parseFloat(stock.out),
  });
});

const useData = () => {
  const [data, setData] = useState(initialData);

  return { data, columns };
};

export default useData;
