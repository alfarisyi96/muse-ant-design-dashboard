import { Row, Col, Card, Table, Button, Tabs } from "antd";
import { Link } from "react-router-dom";
import useData from "./hooks/useData";
import useSalesOrderData from "./hooks/useSalesOrderData";
import usePurchaseOrderData from "./hooks/usePurchaseOrderData";

function StockMovement() {
  const { data, columns } = useData();
  const { data: salesOrderData, columns: salesOrderColumns } =
    useSalesOrderData();
  const { data: purchaseOrderData, columns: purchaseOrderColumns } =
    usePurchaseOrderData();

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
                  <Link to="/logistic/movement/form">
                    <Button type="primary">New Stock Movement</Button>
                  </Link>
                </>
              }
            >
              <Tabs className="purchase-order-tabs">
                <Tabs.TabPane tab="Stock Movement" key="item-1">
                  <div className="table-responsive">
                    <Table
                      columns={columns}
                      dataSource={data}
                      pagination={false}
                      className="ant-border-space"
                    />
                  </div>
                </Tabs.TabPane>
                <Tabs.TabPane
                  tab={`Sales Order (${salesOrderData.length})`}
                  key="item-2"
                >
                  <div className="table-responsive">
                    <Table
                      columns={salesOrderColumns}
                      dataSource={salesOrderData}
                      pagination={false}
                      className="ant-border-space"
                    />
                  </div>
                </Tabs.TabPane>
                <Tabs.TabPane
                  tab={`Purchase Order (${purchaseOrderData.length})`}
                  key="item-3"
                >
                  <div className="table-responsive">
                    <Table
                      columns={purchaseOrderColumns}
                      dataSource={purchaseOrderData}
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

export default StockMovement;
