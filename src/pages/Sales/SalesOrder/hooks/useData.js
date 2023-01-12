import { Button, Avatar, Typography, Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import face from "../../../../assets/images/face-1.jpg";
import face2 from "../../../../assets/images/face-2.jpg";
import face3 from "../../../../assets/images/face-3.jpg";
import face4 from "../../../../assets/images/face-4.jpg";
import face5 from "../../../../assets/images/face-5.jpeg";
import face6 from "../../../../assets/images/face-6.jpeg";

const { Title } = Typography;

const menu = (
  <Menu>
    <Menu.Item>APPROVE</Menu.Item>
    <Menu.Item danger>REJECT</Menu.Item>
    <Menu.Item danger>VOID</Menu.Item>
  </Menu>
);

const useData = () => {
  const data = [
    {
      key: "1",
      code: "S00001",
      customer: "PT Nayaka Pratama",
      due_date: "20/01/2023",
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
      key: "1",
      code: "S00001",
      customer: "PT Nayaka Pratama",
      due_date: "20/01/2023",
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
      due_date: "20/01/2023",
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
      due_date: "20/01/2023",
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
      due_date: "20/01/2023",
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
      due_date: "20/01/2023",
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

  return { data };
};

export default useData;
