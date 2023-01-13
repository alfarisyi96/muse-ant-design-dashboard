import {
  Descriptions,
  Row,
  Col,
  Card,
  Table,
  Typography,
  Avatar,
  Space,
  Button,
  Input,
} from "antd";
import useDetailData from "../hooks/useDetailData";
import InputWrapper from "../../../../components/form/InputWrapper";
import { Link } from "react-router-dom";
const { Title } = Typography;

function PurchaseOrderForm() {
  const { items, columns, detail, totalAmount } = useDetailData();

  return (
    <Row gutter={[24, 0]}>
      <Col xs="24" xl={24}>
        <Card bordered={false} className="tablespace mb-24" title="New Invoice">
          <div style={{ padding: "24px" }}>
            <Descriptions layout="vertical">
              <Descriptions.Item
                label="purchase Order"
                contentStyle={{ display: "inline-block" }}
              >
                <InputWrapper>
                  <Input defaultValue={detail.code} />
                </InputWrapper>
              </Descriptions.Item>
              <Descriptions.Item label="Supplier Name">
                {detail.supplier.name}
              </Descriptions.Item>
              <Descriptions.Item label="Address">
                {detail.supplier.shipping_address}
              </Descriptions.Item>
              <Descriptions.Item
                label="Due Date"
                contentStyle={{ display: "inline-block" }}
              >
                <InputWrapper>
                  <Input defaultValue={detail.due_date} />
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
              <Descriptions.Item
                span={1}
                label="Notes"
                contentStyle={{ display: "inline-block" }}
              >
                <InputWrapper>
                  <Input.TextArea defaultValue={""} />
                </InputWrapper>
              </Descriptions.Item>
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
                Save
              </Button>
              <Link to="/finance/purchase-order">
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
