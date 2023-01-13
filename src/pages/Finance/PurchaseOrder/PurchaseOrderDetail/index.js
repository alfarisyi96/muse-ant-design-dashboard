import {
  Descriptions,
  Row,
  Col,
  Card,
  Table,
  Typography,
  Avatar,
  Tooltip,
  Progress,
  Tag,
  Dropdown,
  Tabs,
  Divider,
} from "antd";
import useDetailData from "../hooks/useDetailData";
import { STATUS_PROPS } from "../constants";
import { DownOutlined } from "@ant-design/icons";
import "./../style.css";

const { Title } = Typography;
const { TabPane } = Tabs;

function PurchaseOrderDetail() {
  const {
    items,
    salesOrderitems,
    columns,
    columnsSalesOrder,
    detail,
    totalAmount,
  } = useDetailData();

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
              <Title level={4}>Purchase Order - S00001</Title>
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
              <Descriptions.Item label="Supplier Name">
                {detail.supplier.name}
              </Descriptions.Item>
              <Descriptions.Item label="Supplier Info">
                <div className="avatar-info mb-2">
                  <Title level={5}>{detail.supplier.phone_number}</Title>
                  <p>{detail.supplier.address}</p>
                </div>
              </Descriptions.Item>
              <Descriptions.Item label="Warehouse">
                {detail.warehouse}
              </Descriptions.Item>
              <Descriptions.Item label="Sales Order">
                {detail.sales_order.map((item) => item.code).join(", ")}
              </Descriptions.Item>
              <Descriptions.Item label="Due Date">
                {detail.due_date}
              </Descriptions.Item>
              <Descriptions.Item label="Attachment">
                <ul>
                  <li>document 1.pdf</li>
                  <li>document 2.pdf</li>
                </ul>
              </Descriptions.Item>
              <Descriptions.Item label="Notes">
                put notes here
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
              <Descriptions.Item label="Progress">
                <Tooltip title={`${detail.progress_received}% received`}>
                  <Progress percent={detail.progress_received} />
                </Tooltip>
              </Descriptions.Item>
              <Descriptions.Item label=""></Descriptions.Item>
            </Descriptions>
          </div>
          <div style={{ padding: "24px" }}>
            <Tabs defaultActiveKey="1">
              <TabPane tab="All Items" key="1">
                <div className="table-responsive">
                  <Table
                    columns={columns}
                    dataSource={items}
                    pagination={false}
                    className="ant-border-space"
                  />
                </div>
              </TabPane>
              <TabPane tab="Sales Order (2)" key="2">
                {salesOrderitems.map((sales_order, index) => {
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
                            columns={columnsSalesOrder}
                            dataSource={sales_order.items}
                            pagination={false}
                            className="ant-border-space"
                          />
                        </div>
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
              </TabPane>
            </Tabs>
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
        </Card>
      </Col>
    </Row>
  );
}

export default PurchaseOrderDetail;
