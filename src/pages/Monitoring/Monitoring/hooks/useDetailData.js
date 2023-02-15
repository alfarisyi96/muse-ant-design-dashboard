import { useState, useEffect } from "react";
import { Space } from "antd";
import { HistoryOutlined } from "@ant-design/icons";
import SalesOrderDetail from "../data/salesOrderDetail.json";

const columns = [
  {
    title: "ITEM",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "UNIT",
    dataIndex: "unit",
    key: "unit",
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
    title: "DELIVERED",
    key: "delivered_quantity",
    dataIndex: "delivered_quantity",
  },
  {
    title: "REMARKS",
    key: "remarks",
    dataIndex: "remarks",
  },
];

const initialItems = [];

const useDetailData = () => {
  const [items, setItems] = useState(initialItems);
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const newItems = [];

    SalesOrderDetail.detail.items.map((item, index) => {
      newItems.push({
        key: index,
        name: item.name,
        unit: item.unit,
        stock: item.stock,
        purchase_order: item.purchase_order,
        sales_quantity: item.sales_quantity,
        required_quantity: item.required_quantity,
        delivered_quantity: item.delivered_quantity,
        remarks: (
          <>
            <Space>
              <span>{item.remarks}</span>
              <HistoryOutlined
                onClick={hanldeRemarkHistoryClick}
                style={{ cursor: "pointer", color: "0099CC" }}
              />
            </Space>
          </>
        ),
      });
    });

    setItems(newItems);
  }, []);

  const hanldeRemarkHistoryClick = () => {
    setModalOpen((prev) => !prev);
  };

  const handleOk = () => {
    setModalOpen(false);
  };

  const handleCancel = () => {
    setModalOpen(false);
  };

  return {
    items,
    columns,
    detail: SalesOrderDetail.detail,
    isModalOpen,
    handleOk,
    handleCancel,
  };
};

export default useDetailData;
