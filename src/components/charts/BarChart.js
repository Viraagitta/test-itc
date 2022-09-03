import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Bar } from "@ant-design/plots";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../store/actions";

const BarChart = () => {
  let data = useSelector((state) => state.data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, []);

  // const data = [
  //   {
  //     type: "家具家电",
  //     sales: 38,
  //   },
  //   {
  //     type: "粮油副食",
  //     sales: 52,
  //   },
  //   {
  //     type: "生鲜水果",
  //     sales: 61,
  //   },
  //   {
  //     type: "美容洗护",
  //     sales: 145,
  //   },
  //   {
  //     type: "母婴用品",
  //     sales: 48,
  //   },
  //   {
  //     type: "进口食品",
  //     sales: 38,
  //   },
  //   {
  //     type: "食品饮料",
  //     sales: 38,
  //   },
  //   {
  //     type: "家庭清洁",
  //     sales: 38,
  //   },
  // ];
  const config = {
    data,
    xField: "id",
    yField: "userId",
    minBarWidth: 20,
    maxBarWidth: 20,
  };
  return <Bar {...config} />;
};

export default BarChart;
