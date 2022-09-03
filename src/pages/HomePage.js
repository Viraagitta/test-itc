import { Layout } from "antd";
import { useState } from "react";
import PieChart from "../components/charts/PieChart";
import NavBar from "../components/layouts/NavBar";
import SideBar from "../components/layouts/SideBar";
import TableList from "../components/layouts/TableList";
import TopicMenu from "../components/layouts/TopicMenu";
import styled from "styled-components";
// const Wrapper = styled.div`
//   margin: 64px 32px;
// `;

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
              {/* <Wrapper> */}
              <PieChart />
              {/* </Wrapper> */}
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
