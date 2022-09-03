import { Layout } from "antd";
import { useState } from "react";
import PieChart from "../components/charts/PieChart";
import NavBar from "../components/layouts/NavBar";
import SideBar from "../components/layouts/SideBar";
import TableList from "../components/layouts/TableList";
import TopicMenu from "../components/layouts/TopicMenu";
import styled from "styled-components";
import LineChart from "../components/charts/LineChart";
import BarChart from "../components/charts/BarChart";
import "../App.css";

const Wrapper = styled.div`
  margin: 40px;
`;

function HomePage() {
  const topics = ["Home", "Create New Data"];
  const [contentIndex, setContentIndex] = useState(0);
  const [selectedKey, setSelectedKey] = useState("0");
  const changeSelectedKey = (event) => {
    const key = event.key;
    setSelectedKey(key);
    setContentIndex(+key);
  };
  const Menu = (
    <TopicMenu
      topics={topics}
      selectedKey={selectedKey}
      changeSelectedKey={changeSelectedKey}
    />
  );
  return (
    <>
      <div className="App">
        <NavBar menu={Menu} />
        <Layout>
          <SideBar menu={Menu} />
          {topics[contentIndex] === "Home" ? (
            <Layout.Content className="content">
              <div className="d-flex ">
                <div className="p-2 flex-fill flexChart">
                  <BarChart />
                </div>
                <div className="p-2 flex-fill flexChart">
                  <PieChart />
                </div>
              </div>
              <Wrapper>
                <LineChart />
              </Wrapper>
              {/* <BarChart /> */}
              <TableList />
            </Layout.Content>
          ) : (
            <Layout.Content className="content">
              <PieChart />
            </Layout.Content>
          )}
        </Layout>
      </div>
      <div></div>
    </>
  );
}

export default HomePage;
