import { Space, Table } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteData, fetchData } from "../../store/actions";
import { DeleteOutlined, DeleteTwoTone, EditOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
function TableList() {
  const data = useSelector((state) => state.data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, []);
  // console.log(data);
  const onDelete = (id, e) => {
    e.preventDefault();
    // const dataDelete = data.filter((item) => item.id !== id);
    dispatch(deleteData(id));
    // deleteData({ dataDelete, isPageTween: false });
  };
  const columns = [
    {
      title: "No",
      dataIndex: "id",
    },
    {
      title: "Creator Id",
      dataIndex: "userId",
      width: "10%",
    },
    {
      title: "Title",
      dataIndex: "title",
      width: "20%",
    },
    {
      title: "Description",
      dataIndex: "body",
      width: "60%",
    },
    {
      title: "Action",
      // dataIndex: "body",
      key: "action",
      render: (_, record) => (
        <Space size="large">
          <EditOutlined />
          <Link
            to="/update"
            onClick={(e) => {
              onDelete(record.key, e);
            }}
            // className="action"
            // style={{ marginLeft: 30 }}
          >
            <DeleteTwoTone />
          </Link>
        </Space>
      ),
      width: "20%",
    },
  ];

  return (
    <>
      <div className="app">
        <div className="table">
          <h1>LIST DATA</h1>
          <Table dataSource={data} columns={columns} />
        </div>
      </div>
    </>
  );
}

export default TableList;
