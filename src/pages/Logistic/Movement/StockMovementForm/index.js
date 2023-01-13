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
  Space,
  Select,
} from "antd";
import moment from "moment";
import useFormData from "../hooks/useFormData";
import InputWrapper from "../../../../components/form/InputWrapper";
import { Link } from "react-router-dom";

const { Title } = Typography;

function SalesOrderForm() {
  const { items, addItem, columns, type, setType, detail } = useFormData();

  const hanldeAddItemClick = () => {
    addItem();
  };

  const onChangeType = (value) => {
    setType(value);
  };

  return (
    <Row gutter={[24, 0]}>
      <Col xs="24" xl={24}>
        <Card
          bordered={false}
          className="tablespace mb-24"
          title={<Title level={4}>New Stock Movement</Title>}
        >
          <div style={{ padding: "24px" }}>
            <Descriptions layout="vertical">
              <Descriptions.Item
                label="Type"
                contentStyle={{ display: "inline-block" }}
              >
                <InputWrapper>
                  <Select
                    size="large"
                    style={{ width: "100%" }}
                    value={type}
                    onChange={onChangeType}
                    options={[
                      {
                        value: "ADJUSTMENT",
                        label: "ADJUSTMENT",
                      },
                      {
                        value: "SALES",
                        label: "SALES",
                      },
                      {
                        value: "PURCHASE",
                        label: "PURCHASE",
                      },
                    ]}
                  ></Select>
                </InputWrapper>
              </Descriptions.Item>
              {type === "SALES" ? (
                <Descriptions.Item
                  label="Sales Order"
                  contentStyle={{ display: "inline-block" }}
                >
                  <InputWrapper>
                    <Select
                      size="large"
                      style={{ width: "100%" }}
                      options={[
                        {
                          value: "S00001",
                          label: "S00001",
                        },
                        {
                          value: "S00002",
                          label: "S00002",
                        },
                        {
                          value: "S00003",
                          label: "S00003",
                        },
                      ]}
                    ></Select>
                  </InputWrapper>
                </Descriptions.Item>
              ) : type === "PURCHASE" ? (
                <Descriptions.Item
                  label="Purchase Order"
                  contentStyle={{ display: "inline-block" }}
                >
                  <InputWrapper>
                    <Select
                      size="large"
                      style={{ width: "100%" }}
                      options={[
                        {
                          value: "P00001",
                          label: "P00001",
                        },
                        {
                          value: "P00002",
                          label: "P00002",
                        },
                        {
                          value: "P00003",
                          label: "P00003",
                        },
                      ]}
                    ></Select>
                  </InputWrapper>
                </Descriptions.Item>
              ) : (
                <Descriptions.Item></Descriptions.Item>
              )}

              <Descriptions.Item label="Date">
                {moment(new Date()).format("DD/MM/YYYY")}
              </Descriptions.Item>
              <Descriptions.Item
                label="Notes"
                contentStyle={{ display: "inline-block" }}
              >
                <InputWrapper>
                  <Input.TextArea defaultValue={""} />
                </InputWrapper>
              </Descriptions.Item>
              <Descriptions.Item
                label="Warehouse"
                contentStyle={{ display: "inline-block" }}
              >
                <InputWrapper>
                  <Input defaultValue={"Gudang Jakarta"} />
                </InputWrapper>
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
              size="small"
              type="primary"
              className="mb-2"
              onClick={hanldeAddItemClick}
            >
              add item
            </Button>
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

export default SalesOrderForm;
