import { useState } from "react";
import {
  Avatar,
  Typography,
  Dropdown,
  Tooltip,
  Progress,
  Tag,
} from "antd";
import { DownOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import salesOrderData from "../data/salesOrderData.json";
import { STATUS_FINANCE_PROPS } from "../constants";

const { Title } = Typography;

const columns = [
  {
    title: "INVOICE NUMBER",
    dataIndex: "invoice_number",
    key: "code",
  },
  {
    title: "SALES ORDER",
    dataIndex: "sales_order_coder",
    key: "sales_order_coder",
  },
  {
    title: "TOTAL AMOUNT",
    key: "total_amount",
    dataIndex: "total_amount",
  },
  {
    title: "TOTAL PAID",
    key: "total_amount",
    dataIndex: "total_amount",
  },
  {
    title: "PROGRESS",
    key: "progress_payment",
    dataIndex: "progress_payment",
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

salesOrderData.map((salesOrder) => {
  initialData.push({
    key: salesOrder.id,
    code: (
      <Link to="/sales-order/detail/detail">
        <span><b>{salesOrder.code}</b></span>
      </Link>
    ),
    customer: salesOrder.customer,
    total_amount: salesOrder.total_amount,
    progress: (
      <>
        <Tooltip
          title={`${salesOrder.progress_stocks}% fullfilled / ${salesOrder.progress_delivered}% delivered`}
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
        <Dropdown overlay={STATUS_FINANCE_PROPS[salesOrder.status].menu}>
          <Tag color={STATUS_FINANCE_PROPS[salesOrder.status].color}>
            {STATUS_FINANCE_PROPS[salesOrder.status].label}
            {salesOrder.status !== "VOID" ? (
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
