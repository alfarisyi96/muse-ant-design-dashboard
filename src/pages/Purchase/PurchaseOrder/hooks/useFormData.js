import { useState, useEffect } from "react";
import { Input, Button } from "antd";
import PurchaseOrderDetail from "../data/purchaseOrderDetail.json";

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
  {
    title: "",
    key: "action",
    dataIndex: "action",
  },
];

const useData = () => {
  const [totalAmount, setTotalAmount] = useState(0);
  const [rawItems, setRawItems] = useState(PurchaseOrderDetail.detail.items);
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItemsData();
    console.log(rawItems);
  }, [rawItems]);

  const addItem = () => {
    setRawItems((prev) => [
      ...prev,
      {
        name: null,
        stock: null,
        purchase_order: null,
        quantity: null,
        delivered: null,
        price: null,
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
    console.log(itemIndex);
    console.log(array);
    setRawItems(array);
  };

  const setItemsData = () => {
    const initialItems = [];
    let initialTotalAmount = 0;

    rawItems.map((item, index) => {
      initialItems.push({
        key: index,
        name: (
          <Input
            value={item.name}
            onChange={(e) => onChange(e.target.value, "name", index)}
          />
        ),
        stock: item.stock,
        quantity: (
          <Input
            type="number"
            value={item.quantity}
            onChange={(e) => onChange(e.target.value, "quantity", index)}
          />
        ),
        price: (
          <Input
            type="number"
            value={item.price}
            onChange={(e) => onChange(e.target.value, "price", index)}
          />
        ),
        sub_total: (item.quantity * item.price).toLocaleString("id-ID"),
        action: (
          <Button type="danger" onClick={() => deleteItem(index)}>
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
    detail: PurchaseOrderDetail.detail,
  };
};

export default useData;
