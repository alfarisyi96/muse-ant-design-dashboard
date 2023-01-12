import { Row, Col, Card, Table, Button } from "antd";
import { Link } from "react-router-dom";
import useData from "./hooks/useData";

function SalesOrder() {
  const { data, columns } = useData();

  return (
    <>
      <div className="tabled">
        <Row gutter={[24, 0]}>
          <Col xs="24" xl={24}>
            <Card
              bordered={false}
              className="criclebox tablespace mb-24"
              title="Sales Order"
              extra={
                <>
                  <Link to="/sales-order/form">
                    <Button type="primary">New Sales Order</Button>
                  </Link>
                </>
              }
            >
              <div className="table-responsive">
                <Table
                  columns={columns}
                  dataSource={data}
                  pagination={false}
                  className="ant-border-space"
                />
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default SalesOrder;
