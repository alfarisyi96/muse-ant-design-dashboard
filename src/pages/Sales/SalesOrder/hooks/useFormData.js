import {
  Button,
  Avatar,
  Typography,
  Menu,
  Dropdown,
  Tooltip,
  Progress,
} from "antd";
import { DownOutlined } from "@ant-design/icons";

const { Title } = Typography;

const menu = (
  <Menu>
    <Menu.Item>APPROVE</Menu.Item>
    <Menu.Item danger>REJECT</Menu.Item>
    <Menu.Item danger>VOID</Menu.Item>
  </Menu>
);

const columns = [
  {
    title: "CODE",
    dataIndex: "code",
    key: "code",
  },
  {
    title: "CUSTOMER",
    dataIndex: "customer",
    key: "customer",
  },
  {
    title: "TOTAL AMOUNT",
    key: "total_amount",
    dataIndex: "total_amount",
  },
  {
    title: "PROGRESS",
    key: "progress",
    dataIndex: "progress",
  },
  {
    title: "DUE DATE",
    key: "due_date",
    dataIndex: "due_date",
  },
  {
    title: "CREATED DATE",
    key: "created_date",
    dataIndex: "created_date",
  },
  {
    title: "STATUS",
    key: "status",
    dataIndex: "status",
  },
  {
    title: "USER",
    key: "user",
    dataIndex: "user",
  },
];

const useData = () => {
  const data = [
    {
      key: "1",
      code: "S00001",
      customer: "PT Nayaka Pratama",
      total_amount: "Rp 152.000.000",
      progress: (
        <>
          <Tooltip title="3 done / 3 in progress / 4 to do">
            <Progress percent={60} success={{ percent: 30 }} />
          </Tooltip>
        </>
      ),
      due_date: "20/01/2023",
      created_date: "20/01/2023",
      user: (
        <>
          <Avatar.Group>
            <div className="avatar-info">
              <Title level={5}>Michael John</Title>
              <p>michael@mail.com</p>
            </div>
          </Avatar.Group>{" "}
        </>
      ),
      status: (
        <>
          <Dropdown overlay={menu} trigger={["click"]}>
            <Button type="primary" size="small">
              APPROVED <DownOutlined style={{ marginLeft: "1rem" }} />
            </Button>
          </Dropdown>
        </>
      ),
    },
    {
      key: "1",
      code: "S00001",
      customer: "PT Nayaka Pratama",
      total_amount: "Rp 152.000.000",
      due_date: "20/01/2023",
      created_date: "20/01/2023",
      user: (
        <>
          <Avatar.Group>
            <div className="avatar-info">
              <Title level={5}>Michael John</Title>
              <p>michael@mail.com</p>
            </div>
          </Avatar.Group>{" "}
        </>
      ),
      status: (
        <>
          <Dropdown overlay={menu}>
            <Button type="primary" size="small">
              APPROVED <DownOutlined style={{ marginLeft: "1rem" }} />
            </Button>
          </Dropdown>
        </>
      ),
    },
    {
      key: "2",
      code: "S00001",
      customer: "PT Nayaka Pratama",
      total_amount: "Rp 152.000.000",
      due_date: "20/01/2023",
      created_date: "20/01/2023",
      user: (
        <>
          <Avatar.Group>
            <div className="avatar-info">
              <Title level={5}>Michael John</Title>
              <p>michael@mail.com</p>
            </div>
          </Avatar.Group>{" "}
        </>
      ),
      status: (
        <>
          <Dropdown overlay={menu}>
            <Button type="primary" size="small">
              APPROVED <DownOutlined style={{ marginLeft: "1rem" }} />
            </Button>
          </Dropdown>
        </>
      ),
    },
    {
      key: "3",
      code: "S00001",
      customer: "PT Nayaka Pratama",
      total_amount: "Rp 152.000.000",
      due_date: "20/01/2023",
      created_date: "20/01/2023",
      user: (
        <>
          <Avatar.Group>
            <div className="avatar-info">
              <Title level={5}>Michael John</Title>
              <p>michael@mail.com</p>
            </div>
          </Avatar.Group>{" "}
        </>
      ),
      status: (
        <>
          <Dropdown overlay={menu}>
            <Button type="primary" size="small">
              APPROVED <DownOutlined style={{ marginLeft: "1rem" }} />
            </Button>
          </Dropdown>
        </>
      ),
    },
    {
      key: "4",
      code: "S00001",
      customer: "PT Nayaka Pratama",
      total_amount: "Rp 152.000.000",
      due_date: "20/01/2023",
      created_date: "20/01/2023",
      user: (
        <>
          <Avatar.Group>
            <div className="avatar-info">
              <Title level={5}>Michael John</Title>
              <p>michael@mail.com</p>
            </div>
          </Avatar.Group>{" "}
        </>
      ),
      status: (
        <>
          <Dropdown overlay={menu}>
            <Button type="primary" size="small">
              APPROVED <DownOutlined style={{ marginLeft: "1rem" }} />
            </Button>
          </Dropdown>
        </>
      ),
    },
    {
      key: "5",
      code: "S00001",
      customer: "PT Nayaka Pratama",
      total_amount: "Rp 152.000.000",
      due_date: "20/01/2023",
      created_date: "20/01/2023",
      user: (
        <>
          <Avatar.Group>
            <div className="avatar-info">
              <Title level={5}>Michael John</Title>
              <p>michael@mail.com</p>
            </div>
          </Avatar.Group>{" "}
        </>
      ),
      status: (
        <>
          <Dropdown overlay={menu}>
            <Button type="primary" size="small">
              APPROVED <DownOutlined style={{ marginLeft: "1rem" }} />
            </Button>
          </Dropdown>
        </>
      ),
    },
  ];

  return { data, columns };
};

export default useData;
