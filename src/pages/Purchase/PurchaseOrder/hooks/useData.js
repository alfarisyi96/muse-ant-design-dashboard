import { useState } from "react";
import { Avatar, Typography, Dropdown, Tooltip, Progress, Tag } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import purchaseOrderData from "../data/purchaseOrderData.json";
import { STATUS_PROPS } from "../constants";

const { Title } = Typography;

const columns = [
  {
    title: "CODE",
    dataIndex: "code",
    key: "code",
  },
  {
    title: "SUPPLIER",
    dataIndex: "supplier",
    key: "supplier",
  },
  {
    title: "TOTAL AMOUNT",
    key: "total_amount",
    dataIndex: "total_amount",
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
  {
    title: "STATUS",
    key: "status",
    dataIndex: "status",
  },
  {
    title: "USER",
    key: "user",
    dataIndex: "user",
  },
];

const initialData = [];

purchaseOrderData.map((purchaseOrder) => {
  initialData.push({
    key: purchaseOrder.id,
    code: (
      <Link to="/purchase-order/detail/detail">
        <span>
          <b>{purchaseOrder.code}</b>
        </span>
      </Link>
    ),
    supplier: purchaseOrder.supplier,
    total_amount: purchaseOrder.total_amount,
    progress: (
      <>
        <Tooltip title={`${purchaseOrder.progress_received} received`}>
          <Progress percent={purchaseOrder.progress_received} />
        </Tooltip>
      </>
    ),
    due_date: purchaseOrder.due_date,
    created_date: purchaseOrder.created_date,
    user: (
      <>
        <Avatar.Group>
          <div className="avatar-info">
            <Title level={5}>{purchaseOrder.user.name}</Title>
            <p>{purchaseOrder.user.email}</p>
          </div>
        </Avatar.Group>
      </>
    ),
    status: (
      <>
        <Dropdown overlay={STATUS_PROPS[purchaseOrder.status].menu}>
          <Tag color={STATUS_PROPS[purchaseOrder.status].color}>
            {STATUS_PROPS[purchaseOrder.status].label}
            {purchaseOrder.status !== "VOID" ? (
              <DownOutlined style={{ marginLeft: "1rem" }} />
            ) : null}
          </Tag>
        </Dropdown>
      </>
    ),
  });
});

const useData = () => {
  const [data, setData] = useState(initialData);

  return { data, columns };
};

export default useData;
