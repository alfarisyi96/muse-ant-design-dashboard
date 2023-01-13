import {
  Descriptions,
  Row,
  Col,
  Card,
  Table,
  Typography,
  Avatar,
  Tag,
  Space,
  Button,
  Dropdown,
} from "antd";
import useDetailData from "../hooks/useDetailData";
import { STATUS_PROPS } from "../constants";
import { DownOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const { Title } = Typography;

function SalesOrderDetail() {
  const { items, columns, detail, totalAmount } = useDetailData();

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
              <Title level={4}>Sales Order Invoice - INV00001</Title>
              <Dropdown overlay={STATUS_PROPS[detail.status].menu}>
                <Tag
                  color={STATUS_PROPS[detail.status].color}
                  size="large"
                  style={{ padding: "4px 8px" }}
                >
                  {STATUS_PROPS[detail.status].label}
                  {detail.status !== "VOID" ? (
                    <DownOutlined style={{ marginLeft: "1rem" }} />
                  ) : null}
                </Tag>
              </Dropdown>
            </div>
          }
        >
          <div style={{ padding: "24px" }}>
            <Descriptions layout="vertical">
              <Descriptions.Item
                label="Sales Order"
                contentStyle={{ display: "inline-block" }}
              >
                {detail.code}
              </Descriptions.Item>
              <Descriptions.Item label="Customer Name">
                {detail.customer.name}
              </Descriptions.Item>
              <Descriptions.Item label="Address">
                {detail.customer.shipping_address}
              </Descriptions.Item>
              <Descriptions.Item
                label="Due Date"
                contentStyle={{ display: "inline-block" }}
              >
                {detail.due_date}
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
              <Descriptions.Item
                span={1}
                label="Notes"
                contentStyle={{ display: "inline-block" }}
              ></Descriptions.Item>
            </Descriptions>
          </div>
          <div style={{ padding: "0px 24px" }}>
            <Title level={5}>Items</Title>
          </div>
          <div className="table-responsive">
            <Table
              columns={columns}
              dataSource={items}
              pagination={false}
              className="ant-border-space"
            />
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
                Generate Invoice
              </Button>
              <Link to="/finance/sales-order">
                <Button type="default" size="large">
                  Back
                </Button>
              </Link>
            </Space>
          </div>
        </Card>
      </Col>
    </Row>
  );
}

export default SalesOrderDetail;
