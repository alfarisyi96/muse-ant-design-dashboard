import { useState } from "react";
import { Avatar, Typography, Dropdown, Tooltip, Progress, Tag } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import invoiceData from "../data/invoiceData.json";
import { STATUS_PROPS } from "../constants";

const { Title } = Typography;

const columns = [
  {
    title: "INVOICE NUMBER",
    dataIndex: "invoice_number",
    key: "invoice_number",
  },
  {
    title: "SALES ORDER",
    dataIndex: "sales_order_code",
    key: "sales_order_code",
  },
  {
    title: "TOTAL AMOUNT",
    key: "total_amount",
    dataIndex: "total_amount",
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

invoiceData.map((salesOrder) => {
  initialData.push({
    key: salesOrder.id,
    invoice_number: (
      <Link to="/finance/sales-order/detail/1">
        <span>
          <b>{salesOrder.invoice_number}</b>
        </span>
      </Link>
    ),
    sales_order_code: (
      <Link to="/sales-order/detail/1">
        <span>
          <b>{salesOrder.sales_order_code}</b>
        </span>
      </Link>
    ),
    total_amount: salesOrder.total_amount,
    due_date: salesOrder.due_date,
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
