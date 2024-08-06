// inputNode.js

import { useState } from "react";
import { AbstractionNode } from "../abstractionNode";

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.inputName || id.replace("customInput-", "input_")
  );
  console.log(id, data, currName);

  const [inputType, setInputType] = useState(data.inputType || "Text");

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setInputType(e.target.value);
  };

  return (
    <AbstractionNode
      label="Input Node"
      handles={[{ type: "source", position: "Right", id: `${id}-value` }]}
    >
      <div>
        <div>
          <span>Input</span>
        </div>
        <div>
          <label>
            Name:
            <input type="text" value={currName} onChange={handleNameChange} />
          </label>
          <label>
            Type:
            <select value={inputType} onChange={handleTypeChange}>
              <option value="Text">Text</option>
              <option value="File">File</option>
            </select>
          </label>
        </div>
      </div>
    </AbstractionNode>
  );
};
