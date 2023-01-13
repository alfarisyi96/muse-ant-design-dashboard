import { useState } from "react";
import {
  Avatar,
  Typography,
  Dropdown,
  Tag,
} from "antd";
import { DownOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import movementData from "../data/movementData.json";
import { STATUS_PROPS } from "../constants";

const { Title } = Typography;

const columns = [
  {
    title: "CODE",
    dataIndex: "code",
    key: "code",
  },
  {
    title: "TYPE",
    dataIndex: "type",
    key: "type",
  },
  {
    title: "WAREHOUSE",
    dataIndex: "warehouse",
    key: "warehouse",
  },
  {
    title: "DATE",
    key: "date",
    dataIndex: "date",
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

const initialData = [];

movementData.map((movement) => {
  initialData.push({
    key: movement.id,
    code: (
      <Link to="/movement/detail/detail">
        <span><b>{movement.code}</b></span>
      </Link>
    ),
    type: movement.type,
    warehouse: movement.warehouse,
    date: movement.due_date,
    user: (
      <>
        <Avatar.Group>
          <div className="avatar-info">
            <Title level={5}>{movement.user.name}</Title>
            <p>{movement.user.email}</p>
          </div>
        </Avatar.Group>
      </>
    ),
    status: (
      <>
        <Dropdown overlay={STATUS_PROPS[movement.status].menu}>
          <Tag color={STATUS_PROPS[movement.status].color}>
            {STATUS_PROPS[movement.status].label}
            {movement.status !== "VOID" ? (
              <DownOutlined style={{ marginLeft: "1rem" }} />
            ) : null}
          </Tag>
        </Dropdown>
      </>
    ),
  });
});

const useData = () => {
  const [data, setData] = useState(initialData);

  return { data, columns };
};

export default useData;
