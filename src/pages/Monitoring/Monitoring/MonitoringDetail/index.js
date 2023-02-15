import {
  Descriptions,
  Row,
  Col,
  Card,
  Table,
  Typography,
  Tooltip,
  Progress,
  Modal,
  Timeline,
  Space,
  Input,
  Button,
} from "antd";
import InputWrapper from "../../../../components/form/InputWrapper";
import useSalesDetailData from "../hooks/useDetailData";

const { Title } = Typography;

function SalesOrderDetail() {
  const { items, columns, detail, isModalOpen, handleOk, handleCancel } =
    useSalesDetailData();

  return (
    <>
      <Modal title="Remarks - Clamp Omega 1 1/2 - Plating" visible={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={<></>}>
        <Space direction="vertical">
          <Timeline mode="left">
            <Timeline.Item label="05/01/2023">sedang PO</Timeline.Item>
            <Timeline.Item label="04/01/2023">...</Timeline.Item>
            <Timeline.Item label="03/01/2023">remark lain</Timeline.Item>
            <Timeline.Item label="02/01/2023">contoh remark</Timeline.Item>
            <Timeline.Item label="01/01/2023">remark lain</Timeline.Item>
          </Timeline>
          <Descriptions layout="vertical">
            <Descriptions.Item
              label="Remark"
              contentStyle={{ display: "inline-block" }}
            >
              <InputWrapper>
                <Input.TextArea defaultValue={""} />
              </InputWrapper>
            </Descriptions.Item>
          </Descriptions>
          <Button type="primary">Submit</Button>
        </Space>
      </Modal>
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
                <Title level={4}>Sales Order - S00003</Title>
              </div>
            }
          >
            <div style={{ padding: "24px" }}>
              <Descriptions layout="vertical">
                <Descriptions.Item label="Due Date">
                  {detail.due_date}
                </Descriptions.Item>
                <Descriptions.Item label="Progress" span={1}>
                  <Tooltip
                    title={`${detail.progress_delivered}% delivered / ${detail.progress_stocks}% fulfilled`}
                  >
                    <Progress
                      percent={detail.progress_stocks}
                      success={{ percent: detail.progress_delivered }}
                    />
                  </Tooltip>
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
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default SalesOrderDetail;
