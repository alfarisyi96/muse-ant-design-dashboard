import { useState } from "react";
import { Tooltip, Progress } from "antd";
import { Link } from "react-router-dom";
import salesOrderData from "../data/salesOrderData.json";

const columns = [
  {
    title: "CODE",
    dataIndex: "code",
    key: "code",
  },
  {
    title: "STOCK",
    key: "stock",
    dataIndex: "stock",
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
    title: "DELIVERED",
    key: "delivered_quantity",
    dataIndex: "delivered_quantity",
  },
  {
    title: "DUE DATE",
    key: "due_date",
    dataIndex: "due_date",
  },
  {
    title: "PROGRESS",
    key: "progress",
    dataIndex: "progress",
  },
];

const initialData = [];

salesOrderData.map((salesOrder) => {
  initialData.push({
    key: salesOrder.id,
    code: (
      <Link to="/monitoring/detail/1">
        <span>
          <b>{salesOrder.code}</b>
        </span>
      </Link>
    ),
    stock: salesOrder.stock,
    purchase_order: salesOrder.purchase_order,
    sales_quantity: salesOrder.sales_quantity,
    delivered_quantity: salesOrder.delivered_quantity,
    due_date: salesOrder.due_date,
    progress: (
      <>
        <Tooltip
          title={`${salesOrder.progress_delivered}% delivered / ${salesOrder.progress_stocks}% fulfilled`}
        >
          <Progress
            percent={salesOrder.progress_stocks}
            success={{ percent: salesOrder.progress_delivered }}
          />
        </Tooltip>
      </>
    ),
  });
});

const useData = () => {
  const [data] = useState(initialData);

  return { data, columns };
};

export default useData;
