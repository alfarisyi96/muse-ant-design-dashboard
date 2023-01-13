import { useState, useEffect } from "react";
import { Input } from "antd";
import SalesOrderDetail from "../data/salesOrderDetail.json";

const columns = [
  {
    title: "ITEM",
    dataIndex: "name",
    key: "name",
    width: "40%",
  },
  {
    title: "STOCK",
    dataIndex: "stock",
    key: "stock",
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

const useData = () => {
  const [totalAmount, setTotalAmount] = useState(0);
  const [rawItems, setRawItems] = useState(SalesOrderDetail.detail.items);
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItemsData();
  }, [rawItems]);

  const onChange = (value, name, index) => {
    setRawItems((prev) => [
      ...prev.map((item, itemIndex) => {
        if (index === itemIndex) {
          item[name] = value;
        }
        return item;
      }),
    ]);
  };

  const setItemsData = () => {
    const initialItems = [];
    let initialTotalAmount = 0;

    rawItems.map((item, index) => {
      initialItems.push({
        key: index,
        name: <Input defaultValue={item.name} />,
        stock: item.stock,
        quantity: (
          <Input
            defaultValue={item.quantity}
            onChange={(e) => onChange(e.target.value, "quantity", index)}
          />
        ),
        price: (
          <Input
            defaultValue={item.price}
            onChange={(e) => onChange(e.target.value, "price", index)}
          />
        ),
        sub_total: (item.quantity * item.price).toLocaleString("id-ID"),
      });
      initialTotalAmount += item.quantity * item.price;
    });

    setItems(initialItems);
    setTotalAmount(initialTotalAmount);
  };

  return { items, columns, totalAmount, detail: SalesOrderDetail.detail };
};

export default useData;
