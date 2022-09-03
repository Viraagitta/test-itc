import React, { useState, useEffect } from "react";
import { Pie } from "@ant-design/plots";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../store/actions";

const PieChart = () => {
  const data = useSelector((state) => state.data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, []);

  const totalData = data.length;

  function filtered(id) {
    return data.filter((el) => el.userId === id);
  }
  // console.log(filtered(1), "<<pie");
  let items = [
    {
      type: "1 Lorem",
      value: filtered(1).length,
    },
    {
      type: "2. Ipsum",
      value: filtered(2).length,
    },
    {
      type: "3. Laboriosam",
      value: filtered(3).length,
    },
    {
      type: "4. Pariatur",
      value: filtered(4).length,
    },
    {
      type: "5. Aliquid",
      value: filtered(5).length,
    },
    {
      type: "6. Consequatur",
      value: filtered(6).length,
    },
    {
      type: "7. Dolorem",
      value: filtered(7).length,
    },
    {
      type: "8. Delectus",
      value: filtered(8).length,
    },
    {
      type: "9. Temporibus",
      value: filtered(9).length,
    },
    {
      type: "10. Voluptatum",
      value: filtered(10).length,
    },
  ];
  let config = {
    appendPadding: 10,
    data: items,
    angleField: "value",
    colorField: "type",
    radius: 1,
    innerRadius: 0.6,
    label: {
      type: "inner",
      offset: "-50%",
      content: "{value}",
      style: {
        textAlign: "center",
        fontSize: 14,
      },
    },
    interactions: [{ type: "element-selected" }, { type: "element-active" }],
    statistic: {
      title: false,
      content: {
        style: {
          whiteSpace: "pre-wrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        },
        content: `Total Data \n ${totalData}`,
      },
    },
  };
  return <Pie {...config} />;
};

export default PieChart;
