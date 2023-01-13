import {
  Descriptions,
  Row,
  Col,
  Card,
  Table,
  Typography,
  Avatar,
  Input,
  Divider,
  Space,
  Button,
  message,
  Upload,
} from "antd";
import InputWrapper from "../../../../components/form/InputWrapper";
import useFormData from "../hooks/useFormData";
import { UploadOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import "./../style.css";

const { Title } = Typography;

const uploadProps = {
  name: "file",
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  headers: {
    authorization: "authorization-text",
  },
  onChange(info) {
    if (info.file.status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === "done") {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

function PurchaseOrderForm() {
  const { items, columns, detail, totalAmount, addItem } = useFormData();

  const hanldeAddItemClick = (salesOrderCode) => {
    addItem(salesOrderCode);
  };

  return (
    <Row gutter={[24, 0]}>
      <Col xs="24" xl={24}>
        <Card
          bordered={false}
          className="tablespace mb-24"
          title={
            <div
              style={{
                justifyContent: "space-between",
                flexDirection: "row",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Title level={4}>Purchase Order - P00001</Title>
            </div>
          }
        >
          <div style={{ padding: "24px" }}>
            <Descriptions layout="vertical">
              <Descriptions.Item
                label="Supplier Name"
                contentStyle={{ display: "inline-block" }}
              >
                <InputWrapper>
                  <Input defaultValue={detail.supplier.name} />
                </InputWrapper>
              </Descriptions.Item>
              <Descriptions.Item
                label="Supplier Info"
                contentStyle={{ display: "inline-block" }}
              >
                <div className="avatar-info mb-2">
                  <Title level={5}>{detail.supplier.phone_number}</Title>
                  <p>{detail.supplier.address}</p>
                </div>
              </Descriptions.Item>
              <Descriptions.Item
                label="Warehouse"
                contentStyle={{ display: "inline-block" }}
              >
                <InputWrapper>
                  <Input defaultValue={detail.warehouse} />
                </InputWrapper>
              </Descriptions.Item>
              <Descriptions.Item
                label="Sales Order"
                contentStyle={{ display: "inline-block" }}
              >
                <InputWrapper>
                  <Input
                    defaultValue={detail.sales_order
                      .map((item) => item.code)
                      .join(", ")}
                  />
                </InputWrapper>
              </Descriptions.Item>
              <Descriptions.Item
                label="Due Date"
                contentStyle={{ display: "inline-block" }}
              >
                <InputWrapper>
                  <Input defaultValue={detail.due_date} />
                </InputWrapper>
              </Descriptions.Item>
              <Descriptions.Item
                label="Attachment"
                contentStyle={{ display: "inline-block" }}
              >
                <Upload {...uploadProps}>
                  <Button icon={<UploadOutlined />}>Click to Upload</Button>
                </Upload>
              </Descriptions.Item>
              <Descriptions.Item
                label="Notes"
                contentStyle={{ display: "inline-block" }}
              >
                <InputWrapper>
                  <Input.TextArea defaultValue={""} />
                </InputWrapper>
              </Descriptions.Item>
              <Descriptions.Item label="Created Date">
                {detail.created_date}
              </Descriptions.Item>
              <Descriptions.Item label="User">
                <Avatar.Group>
                  <div className="avatar-info">
                    <Title level={5}>{detail.user.name}</Title>
                    <p>{detail.user.email}</p>
                  </div>
                </Avatar.Group>
              </Descriptions.Item>
            </Descriptions>
          </div>
          <div style={{ padding: "24px" }}>
            {items.map((sales_order, index) => {
              return (
                <div key={index}>
                  {index !== 0 ? <Divider dashed /> : null}
                  <div className="sales-order-items-wrapper">
                    <Descriptions layout="horizontal">
                      <Descriptions.Item label="Sales Code">
                        {sales_order.code}
                      </Descriptions.Item>
                      <Descriptions.Item label="Due Date">
                        {sales_order.due_date}
                      </Descriptions.Item>
                    </Descriptions>
                    <div
                      className="table-responsive"
                      style={{ marginBottom: "16px" }}
                    >
                      <Table
                        columns={columns}
                        dataSource={sales_order.items}
                        pagination={false}
                        className="ant-border-space purchase-order-form-table"
                      />
                    </div>
                    <Button
                      size="small"
                      type="primary"
                      className="mb-2"
                      onClick={() => {
                        hanldeAddItemClick(sales_order.code);
                      }}
                    >
                      add item
                    </Button>
                    <Descriptions layout="vertical">
                      <Descriptions.Item label="Total Amount" span={1}>
                        <Title level={5}>
                          Rp {sales_order.total.toLocaleString("id-ID")}
                        </Title>
                      </Descriptions.Item>
                    </Descriptions>
                  </div>
                </div>
              );
            })}
          </div>
          <div style={{ padding: "24px" }}>
            <Descriptions layout="vertical">
              <Descriptions.Item label="Total Amount" span={1}>
                <Title level={4}>
                  Rp {totalAmount.toLocaleString("id-ID")}
                </Title>
              </Descriptions.Item>
            </Descriptions>
          </div>
          <div style={{ padding: "24px" }}>
            <Space>
              <Button type="primary" size="large">
                Save
              </Button>
              <Link to="/sales-order">
                <Button type="default" size="large">
                  Cancel
                </Button>
              </Link>
            </Space>
          </div>
        </Card>
      </Col>
    </Row>
  );
}

export default PurchaseOrderForm;
