import { Row, Col, Card, Table, Button, Tabs } from "antd";
import { Link } from "react-router-dom";
import useData from "./hooks/useData";
import useSalesOrderData from "./hooks/useSalesOrderData";

function PurchaseOrder() {
  const { data, columns } = useData();
  const { data: salesOrderData, columns: salesOrderColumns } =
    useSalesOrderData();

  return (
    <>
      <div className="tabled">
        <Row gutter={[24, 0]}>
          <Col xs="24" xl={24}>
            <Card
              bordered={false}
              className="criclebox tablespace mb-24"
              title="Purchase Order"
              extra={
                <>
                  <Link to="/purchase-order/form">
                    <Button type="primary">New Purchase Order</Button>
                  </Link>
                </>
              }
            >
              <Tabs className="purchase-order-tabs">
                <Tabs.TabPane tab="Purchase Order" key="item-1">
                  <div className="table-responsive">
                    <Table
                      columns={columns}
                      dataSource={data}
                      pagination={false}
                      className="ant-border-space"
                    />
                  </div>
                </Tabs.TabPane>
                <Tabs.TabPane tab={`Sales Order (${salesOrderData.length})`} key="item-2">
                  <div className="table-responsive">
                    <Table
                      columns={salesOrderColumns}
                      dataSource={salesOrderData}
                      pagination={false}
                      className="ant-border-space"
                    />
                  </div>
                </Tabs.TabPane>
              </Tabs>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default PurchaseOrder;
