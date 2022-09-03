import React, { useState, useEffect } from "react";
import { Line } from "@ant-design/plots";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../store/actions";
import ReactDOM from "react-dom";
const LineChart = () => {
  let data = useSelector((state) => state.data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, []);

  const config = {
    data,
    width: 150,
    height: 200,
    xField: "id",
    yField: "userId",
    seriesField: "userId",
    yAxis: {
      label: {
        // formatter: (v) => `${(v / 1).toFixed(2)}`,
      },
    },
    legend: {
      position: "bottom",
    },
    smooth: true,

    animation: {
      appear: {
        animation: "path-in",
        duration: 5000,
      },
    },
  };

  return <Line {...config} />;
};

export default LineChart;
