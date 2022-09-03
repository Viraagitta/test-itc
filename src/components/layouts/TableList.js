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
  // console.log(data);
  const [pagination, setPagination] = useState({});
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
