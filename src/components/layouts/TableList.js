import { Table } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../store/actions";
function TableList() {
  const data = useSelector((state) => state.data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, []);
  console.log(data);
  const columns = [
    {
      title: "No",
      dataIndex: "id",
    },
    {
      title: "Creator Id",
      dataIndex: "userId",
      // sorter: (a, b) => (a.name.first > b.name.first ? 1 : -1),
      // render: (name) => `${name.first} ${name.last}`,
      width: "10%",
    },
    {
      title: "Title",
      dataIndex: "title",
      // sorter: (a, b) => (a.name.first > b.name.first ? 1 : -1),
      // render: (name) => `${name.first} ${name.last}`,
      width: "20%",
    },
    {
      title: "Description",
      dataIndex: "body",
      // filters: [
      //   { text: "Male", value: "male" },
      //   { text: "Female", value: "female" },
      // ],
      width: "60%",
    },
  ];
  return (
    <>
      <div className="app">
        <div className="table">
          <Table dataSource={data} columns={columns} pagination={false} />
        </div>
      </div>
    </>
  );
}

export default TableList;
