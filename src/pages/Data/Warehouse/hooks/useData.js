import { useState } from "react";
import stockData from "../data/stockData.json";

const columns = [
  {
    title: "CODE",
    dataIndex: "code",
    key: "code",
  },
  {
    title: "WAREHOUSE",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "ADDRESS",
    key: "address",
    dataIndex: "address",
  },
];

const initialData = [];

stockData.map((stock) => {
  initialData.push({
    key: stock.id,
    code: stock.code,
    name: stock.name,
    address: stock.address,
  });
});

const useData = () => {
  const [data, setData] = useState(initialData);

  return { data, columns };
};

export default useData;
