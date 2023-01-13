import {
  Descriptions,
  Row,
  Col,
  Card,
  Table,
  Typography,
  Avatar,
  Input,
  Button,
} from "antd";
import moment from "moment";
import useFormData from "../hooks/useFormData";

const { Title } = Typography;

const InputWrapper = (props) => {
  return <div style={{ padding: "0px 20px 20px 0px" }}>{props.children}</div>;
};
function PurchaseOrderForm() {
  const { items, addItem, columns, detail, totalAmount } = useFormData();

  const hanldeAddItemClick = () => {
    addItem();
  };

  return (
    <Row gutter={[24, 0]}>
      <Col xs="24" xl={24}>
        <Card
          bordered={false}
          className="tablespace mb-24"
          title={<Title level={4}>New Purchase Order</Title>}
        >
          <div style={{ padding: "24px" }}>
            <Descriptions layout="vertical">
              <Descriptions.Item
                label="Customer Name"
                contentStyle={{ display: "inline-block" }}
              >
                <InputWrapper>
                  <Input defaultValue={detail.customer.name} />
                </InputWrapper>
              </Descriptions.Item>
              <Descriptions.Item
                label="Telephone"
                contentStyle={{ display: "inline-block" }}
              >
                <InputWrapper>
                  <Input defaultValue={detail.customer.phone_number} />
                </InputWrapper>
              </Descriptions.Item>
              <Descriptions.Item
                label="Shipping Address"
                contentStyle={{ display: "inline-block" }}
              >
                <InputWrapper>
                  <Input.TextArea
                    defaultValue={detail.customer.shipping_address}
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
              <Descriptions.Item label="Created Date">
                {moment(new Date()).format("DD/MM/YYYY")}
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
            <Button
              type="primary"
              className="mb-2"
              onClick={hanldeAddItemClick}
            >
              add item
            </Button>
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

export default PurchaseOrderForm;
