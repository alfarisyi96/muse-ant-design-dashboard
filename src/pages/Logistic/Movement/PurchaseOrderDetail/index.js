import {
  Descriptions,
  Row,
  Col,
  Card,
  Table,
  Typography,
  Tooltip,
  Progress,
  Button,
} from "antd";
import usePurchaseDetailData from "../hooks/usePurchaseDetailData";
import { Link } from "react-router-dom";

const { Title } = Typography;

function PurchaseOrderDetail() {
  const { items, columns, detail } = usePurchaseDetailData();

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
              <Title level={4}>Purchase Order - {detail.code}</Title>
            </div>
          }
          extra={
            <>
              <Link to="/logistic/movement/form">
                <Button type="primary">New Stock Movement</Button>
              </Link>
            </>
          }
        >
          <div style={{ padding: "24px" }}>
            <Descriptions layout="vertical">
              <Descriptions.Item label="Due Date">
                {detail.due_date}
              </Descriptions.Item>
              <Descriptions.Item label="Warehouse">
                {detail.warehouse}
              </Descriptions.Item>
              <Descriptions.Item label="Progress" span={1}>
                <Tooltip title={`${detail.progress_received}% received`}>
                  <Progress percent={detail.progress_received} />
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
  );
}

export default PurchaseOrderDetail;
