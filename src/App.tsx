import React, { useState } from "react";
import { Form, Input, Switch, Radio, Checkbox, Button } from "antd";
import "./App.css";

const App: React.FC = () => {
  const [isEditable, setIsEditable] = useState<boolean>(true);
  const [firstName, setFirstName] = useState<string>("");
  const [isProficient, setIsProficient] = useState<boolean>(false);
  const [tools, setTools] = useState<string[]>(["0", "2", "3", "4"]);

  const onToggleChange = (checked: boolean) => {
    setIsEditable(checked);
  };
  const onFinish = () => {
    console.log("Form state: ", { isEditable, firstName, isProficient, tools });
  };

  return (
    <div className="form-wrapper">
      <Form.Item label="Editable" name="editable" className="toggle-wrapper">
        <Switch checked={isEditable} onChange={onToggleChange} />
      </Form.Item>
      <Form onFinish={onFinish}>
        <Form.Item name="firstName">
          <Input
            disabled={!isEditable}
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </Form.Item>

        <Form.Item
          name="proficiency"
          label={
            <span className="bold-label">
              Are you proficient in ReactJS development?
            </span>
          }
          labelCol={{ span: 24 }} // Label takes full width
          wrapperCol={{ span: 24 }} // Input wrapper takes full width
        >
          <Radio.Group
            disabled={!isEditable}
            defaultValue={isProficient}
            onChange={(e) => setIsProficient(e.target.value)}
          >
            <Radio value={false}>No</Radio>
            <Radio value={true}>Yes</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          name="tools"
          label={<span className="bold-label">Which tools do you use?</span>}
          className="form-question"
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
          initialValue={tools}
        >
          <Checkbox.Group
            style={{ width: "100%" }}
            disabled={!isEditable}
            onChange={setTools}
          >
            <Checkbox value="0">Redux</Checkbox>
            <Checkbox value="1">Lodash</Checkbox>
            <Checkbox value="2">Ant design</Checkbox>
            <Checkbox value="3">Webpack</Checkbox>
            <Checkbox value="4">Other</Checkbox>
          </Checkbox.Group>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="submit-button"
            disabled={!isEditable}
          >
            Process
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default App;
