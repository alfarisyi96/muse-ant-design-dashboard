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
    title: "PURCHASE ORDER",
    dataIndex: "purchase_order_code",
    key: "purchase_order_code",
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

invoiceData.map((purchaseOrder) => {
  initialData.push({
    key: purchaseOrder.id,
    invoice_number: (
      <Link to="/finance/purchase-order/detail/1">
        <span>
          <b>{purchaseOrder.invoice_number}</b>
        </span>
      </Link>
    ),
    purchase_order_code: (
      <Link to="/purchase-order/detail/1">
        <span>
          <b>{purchaseOrder.purchase_order_code}</b>
        </span>
      </Link>
    ),
    total_amount: purchaseOrder.total_amount,
    due_date: purchaseOrder.due_date,
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
