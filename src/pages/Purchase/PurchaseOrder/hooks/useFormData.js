import { useState, useEffect } from "react";
import { Input, Button } from "antd";
import PurchaseOrderDetail from "../data/purchaseOrderDetail.json";

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
    title: "SALES QUANTITY",
    key: "sales_quantity",
    dataIndex: "sales_quantity",
  },
  {
    title: "REQUIRED QUANTITY",
    key: "required_quantity",
    dataIndex: "required_quantity",
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
  const [rawItems, setRawItems] = useState(
    PurchaseOrderDetail.detail.sales_order
  );
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItemsData();
  }, [rawItems]);

  const addItem = (salesOrderCode) => {
    const salesOrderCollection = [...rawItems];
    const salesOrder = salesOrderCollection.find(
      (item) => item.code === salesOrderCode
    );
    if (salesOrder) {
      salesOrder.items.push({
        is_new: true,
        name: null,
        stock: null,
        purchase_order: null,
        sales_quantity: null,
        required_quantity: null,
        quantity: null,
        delivered: null,
        price: null,
      });
    }
    setRawItems(salesOrderCollection);
  };

  const onChange = (value, name, index, salesOrderCode) => {
    const salesOrderCollection = [...rawItems];
    const salesOrder = salesOrderCollection.find(
      (item) => item.code === salesOrderCode
    );
    if (salesOrder) {
      salesOrder.items.map((item, itemIndex) => {
        if (index === itemIndex) {
          item[name] = value;
        }
        return item;
      });
    }
    setRawItems(salesOrderCollection);
  };

  const deleteItem = (itemIndex, salesOrderCode) => {
    const salesOrderCollection = [...rawItems];
    const salesOrder = salesOrderCollection.find(
      (item) => item.code === salesOrderCode
    );
    if (salesOrder) {
      salesOrder.items.splice(itemIndex, 1);
    }
    setRawItems(salesOrderCollection);
  };

  const setItemsData = () => {
    const initialSalesOrderItems = [];
    let initialTotalAmount = 0;

    rawItems.map((salesOrder, index) => {
      const items = [];
      let total = 0;
      salesOrder.items.map((item, itemIndex) => {
        items.push({
          key: itemIndex,
          name:
            typeof is_new !== "undefined" ? (
              item.name
            ) : (
              <Input
                value={item.name}
                onChange={(e) =>
                  onChange(e.target.value, "name", itemIndex, salesOrder.code)
                }
              />
            ),
          stock: item.stock,
          purchase_order: item.purchase_order,
          sales_quantity: item.sales_quantity,
          required_quantity: item.required_quantity,
          quantity: (
            <Input
              type="number"
              value={item.quantity}
              onChange={(e) =>
                onChange(e.target.value, "quantity", itemIndex, salesOrder.code)
              }
            />
          ),
          price: (
            <Input
              type="number"
              value={item.price}
              onChange={(e) =>
                onChange(e.target.value, "price", itemIndex, salesOrder.code)
              }
            />
          ),
          sub_total: (
            <b>{(item.quantity * item.price).toLocaleString("id-ID")}</b>
          ),
          action: (
            <Button
              type="danger"
              size="small"
              onClick={() => deleteItem(itemIndex, salesOrder.code)}
            >
              delete
            </Button>
          ),
        });
        total += item.quantity * item.price;
      });

      initialTotalAmount += total;

      initialSalesOrderItems.push({
        code: salesOrder.code,
        due_date: salesOrder.due_date,
        items: items,
        total: total,
      });
    });

    setItems(initialSalesOrderItems);
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
