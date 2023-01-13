import { useState, useEffect } from "react";
import { Input, Button } from "antd";
import SalesOrderDetail from "../data/movementDetail.json";

const columns = [
  {
    title: "ITEM",
    dataIndex: "name",
    key: "name",
    width: "40%",
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
  {
    title: "",
    key: "action",
    dataIndex: "action",
  },
];

const useData = () => {
  const [totalAmount, setTotalAmount] = useState(0);
  const [rawItems, setRawItems] = useState(SalesOrderDetail.detail.items);
  const [items, setItems] = useState([]);
  const [type, setType] = useState("ADJUSTMENT");

  useEffect(() => {
    setItemsData();
  }, [rawItems]);

  useEffect(() => {
    setItemsData();
  }, [type]);

  const addItem = () => {
    setRawItems((prev) => [
      ...prev,
      {
        name: null,
        stock_before: 0,
        in: 0,
        out: 0,
      },
    ]);
  };

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

  const deleteItem = (itemIndex) => {
    const array = [...rawItems];
    array.splice(itemIndex, 1);
    setRawItems(array);
  };

  const setItemsData = () => {
    const initialItems = [];
    let initialTotalAmount = 0;

    rawItems.map((item, index) => {
      const inStock = type === "SALES" ? 0 : item.in;
      const outStock = type === "PURCHASE" ? 0 : item.out;

      initialItems.push({
        key: index,
        name: (
          <Input
            value={item.name}
            onChange={(e) => onChange(e.target.value, "name", index)}
          />
        ),
        stock_before: item.stock_before,
        in: (
          <Input
            type="number"
            value={inStock}
            disabled={type === "SALES"}
            onChange={(e) => onChange(e.target.value, "in", index)}
          />
        ),
        out: (
          <Input
            type="number"
            value={outStock}
            disabled={type === "PURCHASE"}
            onChange={(e) => onChange(e.target.value, "out", index)}
          />
        ),
        stock:
          parseFloat(item.stock_before) +
          parseFloat(inStock) -
          parseFloat(outStock),
        action: (
          <Button type="danger" size="small" onClick={() => deleteItem(index)}>
            delete
          </Button>
        ),
      });
      initialTotalAmount += item.quantity * item.price;
    });

    setItems(initialItems);
    setTotalAmount(initialTotalAmount);
  };

  return {
    items,
    addItem,
    columns,
    totalAmount,
    type,
    setType,
    detail: SalesOrderDetail.detail,
  };
};

export default useData;
