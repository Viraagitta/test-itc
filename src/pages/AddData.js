import { Button, Form, Input, InputNumber } from "antd";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "../App.css";
import { createNewData } from "../store/actions";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
/* eslint-disable no-template-curly-in-string */

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};
/* eslint-enable no-template-curly-in-string */

const AddData = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    userId: "",
    id: "",
    title: "",
    body: "",
  });

  const handleChange = (e) => {
    const { value, name } = e.target;

    const getFrom = {
      userId: form.userId,
      id: form.id,
      title: form.title,
      body: form.body,
    };
    getFrom[name] = value;
    setForm(getFrom);
  };
  console.log(form);
  const onFinish = (e) => {
    dispatch(createNewData(form));
    e.preventDefault();
    navigate("/");
  };

  return (
    <Form
      {...layout}
      name="nest-messages"
      onFinish={onFinish}
      validateMessages={validateMessages}
    >
      <Form.Item
        name={"userId"}
        label="User Id"
        rules={[
          {
            type: "number",
            min: 1,
            max: 10,
            required: true,
          },
        ]}
        // onChange={handleChange}
      >
        <InputNumber onChange={handleChange} />
      </Form.Item>
      <Form.Item
        name={"id"}
        label="ID"
        rules={[
          {
            type: "number",
            required: true,
            min: 1,
          },
        ]}
      >
        <InputNumber onChange={handleChange} />
      </Form.Item>
      <Form.Item
        name={"title"}
        label="Title"
        rules={[
          {
            type: "text",
          },
        ]}
      >
        <Input onChange={handleChange} />
      </Form.Item>
      <Form.Item name={"body"} label="Description">
        <Input.TextArea onChange={handleChange} />
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AddData;
