import { Menu } from "antd";

const STATUS_PROPS = {
  DRAFT: {
    label: "DRAFT",
    color: "grey",
    menu: (
      <Menu>
        <Menu.Item>SUBMIT</Menu.Item>
      </Menu>
    ),
  },
  WAITING_APPROVAL: {
    label: "WAITING FOR APPROVAL",
    color: "orange",
    menu: (
      <Menu>
        <Menu.Item>APPROVE</Menu.Item>
        <Menu.Item danger>REJECT</Menu.Item>
      </Menu>
    ),
  },
  APPROVED: {
    label: "APPROVED",
    color: "blue",
    menu: (
      <Menu>
        <Menu.Item>COMPLETE</Menu.Item>
        <Menu.Item danger>VOID</Menu.Item>
      </Menu>
    ),
  },
  REJECTED: {
    label: "REJECTED",
    color: "red",
    menu: (
      <Menu>
        <Menu.Item danger>DRAFT</Menu.Item>
      </Menu>
    ),
  },
  COMPLETED: {
    label: "COMPLETED",
    color: "green",
    menu: (
      <Menu>
        <Menu.Item danger>VOID</Menu.Item>
      </Menu>
    ),
  },
  VOID: {
    label: "VOID",
    color: "grey",
    menu: <></>,
  },
};

const STATUS_FINANCE_PROPS = {
  ON_PROGRESS: {
    label: "ON PROGRESS",
    color: "grey",
    menu: <></>,
  },
  COMPLETED: {
    label: "COMPLETED",
    color: "green",
    menu: <></>,
  },
};

export { STATUS_PROPS, STATUS_FINANCE_PROPS };
