import { useState } from "react";
import { Tooltip, Progress } from "antd";
import { Link } from "react-router-dom";
import purchaseOrderData from "../data/purchaseOrderData.json";

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

purchaseOrderData.map((purchaseOrder) => {
  initialData.push({
    key: purchaseOrder.id,
    code: (
      <Link to="/logistic/movement/purchase/detail">
        <span>
          <b>{purchaseOrder.code}</b>
        </span>
      </Link>
    ),
    progress: (
      <Tooltip title={`${purchaseOrder.progress}% received`}>
        <Progress percent={purchaseOrder.progress} />
      </Tooltip>
    ),
    due_date: purchaseOrder.due_date,
  });
});

const useData = () => {
  const [data, setData] = useState(initialData);

  return { data, columns };
};

export default useData;
