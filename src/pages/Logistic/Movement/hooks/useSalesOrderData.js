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
    title: "PROGRESS",
    key: "progress",
    dataIndex: "progress",
  },
  {
    title: "DUE DATE",
    key: "due_date",
    dataIndex: "due_date",
  },
];

const initialData = [];

salesOrderData.map((salesOrder) => {
  initialData.push({
    key: salesOrder.id,
    code: (
      <Link to="/logistic/movement/sales/detail">
        <span>
          <b>{salesOrder.code}</b>
        </span>
      </Link>
    ),
    progress: (
      <Tooltip title={`${salesOrder.progress}% delivered`}>
        <Progress percent={salesOrder.progress} />
      </Tooltip>
    ),
    due_date: salesOrder.due_date,
  });
});

const useData = () => {
  const [data, setData] = useState(initialData);

  return { data, columns };
};

export default useData;
