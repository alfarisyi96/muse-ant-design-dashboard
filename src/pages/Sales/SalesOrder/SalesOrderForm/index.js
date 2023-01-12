import { Form, Input, Button, Select, Row, Col, Card, Space, Table } from "antd";
import {
  Cascader,
  DatePicker,
  InputNumber,
  Radio,
  Switch,
  TreeSelect,
} from "antd";
import React, { useState } from "react";
import useFormData from "../hooks/useFormData";

const SalesOrderForm = () => {
  const { data, columns } = useFormData();
  const [componentSize, setComponentSize] = useState("default");
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  return (
    <Row gutter={[24, 0]}>
      <Col xs="24" xl={24}>
        <Card
          bordered={false}
          className="criclebox tablespace mb-24"
          title="Sales Order Form"
        >
          <div class="form-container">
            <Form
              labelCol={{
                span: 4,
              }}
              wrapperCol={{
                span: 14,
              }}
              layout="horizontal"
              initialValues={{
                size: componentSize,
              }}
              onValuesChange={onFormLayoutChange}
              size={componentSize}
            >
              <Form.Item label="Form Size" name="size">
                <Radio.Group>
                  <Radio.Button value="small">Small</Radio.Button>
                  <Radio.Button value="default">Default</Radio.Button>
                  <Radio.Button value="large">Large</Radio.Button>
                </Radio.Group>
              </Form.Item>
              <Form.Item label="Input">
                <Input />
              </Form.Item>
              <Form.Item label="Select">
                <Select>
                  <Select.Option value="demo">Demo</Select.Option>
                </Select>
              </Form.Item>
              <Form.Item label="TreeSelect">
                <TreeSelect
                  treeData={[
                    {
                      title: "Light",
                      value: "light",
                      children: [
                        {
                          title: "Bamboo",
                          value: "bamboo",
                        },
                      ],
                    },
                  ]}
                />
              </Form.Item>
              <Form.Item label="Cascader">
                <Cascader
                  options={[
                    {
                      value: "zhejiang",
                      label: "Zhejiang",
                      children: [
                        {
                          value: "hangzhou",
                          label: "Hangzhou",
                        },
                      ],
                    },
                  ]}
                />
              </Form.Item>
              <Form.Item label="DatePicker">
                <DatePicker />
              </Form.Item>
              <Form.Item label="InputNumber">
                <InputNumber />
              </Form.Item>
              <Form.Item label="Switch" valuePropName="checked">
                <Switch />
              </Form.Item>
              <div className="table-responsive">
                <Table
                  columns={columns}
                  dataSource={data}
                  pagination={false}
                  className="ant-border-space"
                />
              </div>
              <Form.Item>
                <Space>
                  <Button className="mr-1" type="primary">
                    Save
                  </Button>
                  <Button type="default">Close</Button>
                </Space>
              </Form.Item>
            </Form>
          </div>
        </Card>
      </Col>
    </Row>
  );
};
export default SalesOrderForm;
