import { useState } from "react";
import stockData from "../data/stockData.json";

const columns = [
  {
    title: "CODE",
    dataIndex: "code",
    key: "code",
  },
  {
    title: "NAME",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "PHONE NUMBER",
    key: "phone_number",
    dataIndex: "phone_number",
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
    phone_number: stock.phone_number,
    address: stock.address,
  });
});

const useData = () => {
  const [data, setData] = useState(initialData);

  return { data, columns };
};

export default useData;
