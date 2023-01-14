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
    title: "EST. SALES PRICE",
    key: "est_sales_price",
    dataIndex: "est_sales_price",
  },
  {
    title: "EST. PURCHASE PRICE",
    key: "est_purchase_price",
    dataIndex: "est_purchase_price",
  },
];

const initialData = [];

stockData.map((stock) => {
  initialData.push({
    key: stock.id,
    code: stock.code,
    name: stock.name,
    est_sales_price: stock.est_sales_price.toLocaleString('id-ID'),
    est_purchase_price: stock.est_purchase_price.toLocaleString('id-ID')
  });
});

const useData = () => {
  const [data, setData] = useState(initialData);

  return { data, columns };
};

export default useData;
