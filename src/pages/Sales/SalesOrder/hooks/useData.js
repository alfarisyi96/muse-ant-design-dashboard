import { useState } from "react";
import {
  Button,
  Avatar,
  Typography,
  Menu,
  Dropdown,
  Tooltip,
  Progress,
  Tag,
} from "antd";
import { DownOutlined } from "@ant-design/icons";
import salesOrderData from "../data/salesOrderData.json";

const { Title } = Typography;

const menu = (
  <Menu>
    <Menu.Item>APPROVE</Menu.Item>
    <Menu.Item danger>REJECT</Menu.Item>
    <Menu.Item danger>VOID</Menu.Item>
  </Menu>
);

const columns = [
  {
    title: "CODE",
    dataIndex: "code",
    key: "code",
  },
  {
    title: "CUSTOMER",
    dataIndex: "customer",
    key: "customer",
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

const STATUS_PROPS = {
  DRAFT: {
    label: "DRAFT",
    color: "grey",
    menu: (
      <Menu>
        <Menu.Item>SUBMIT</Menu.Item>
      </Menu>
    ),
  },
  WAITING_APPROVAL: {
    label: "WAITING FOR APPROVAL",
    color: "orange",
    menu: (
      <Menu>
        <Menu.Item>APPROVE</Menu.Item>
        <Menu.Item danger>REJECT</Menu.Item>
      </Menu>
    ),
  },
  APPROVED: {
    label: "APPROVED",
    color: "blue",
    menu: (
      <Menu>
        <Menu.Item danger>VOID</Menu.Item>
      </Menu>
    ),
  },
  REJECTED: {
    label: "REJECTED",
    color: "red",
    menu: (
      <Menu>
        <Menu.Item danger>DRAFT</Menu.Item>
      </Menu>
    ),
  },
  COMPLETED: {
    label: "COMPLETED",
    color: "green",
    menu: (
      <Menu>
        <Menu.Item danger>VOID</Menu.Item>
      </Menu>
    ),
  },
  VOID: {
    label: "VOID",
    color: "grey",
    menu: <></>,
  },
};
const initialData = [];

salesOrderData.map((salesOrder) => {
  initialData.push({
    key: salesOrder.id,
    code: salesOrder.code,
    customer: salesOrder.customer,
    total_amount: salesOrder.total_amount,
    progress: (
      <>
        <Tooltip
          title={`${salesOrder.progress_stocks} fullfilled / ${salesOrder.progress_delivered} delivered`}
        >
          <Progress
            percent={salesOrder.progress_delivered}
            success={{ percent: salesOrder.progress_stocks }}
          />
        </Tooltip>
      </>
    ),
    due_date: salesOrder.due_date,
    created_date: salesOrder.created_date,
    user: (
      <>
        <Avatar.Group>
          <div className="avatar-info">
            <Title level={5}>{salesOrder.user.name}</Title>
            <p>{salesOrder.user.email}</p>
          </div>
        </Avatar.Group>
      </>
    ),
    status: (
      <>
        <Dropdown overlay={STATUS_PROPS[salesOrder.status].menu}>
          <Tag color={STATUS_PROPS[salesOrder.status].color}>
            {STATUS_PROPS[salesOrder.status].label}
            {salesOrder.status !== 'VOID' ? (
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
