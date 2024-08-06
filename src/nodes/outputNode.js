// outputNode.js

import { useState } from "react";
import { AbstractionNode } from "../abstractionNode";

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.outputName || id.replace("customOutput-", "output_")
  );
  const [outputType, setOutputType] = useState(data.outputType || "Text");

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setOutputType(e.target.value);
  };

  return (
    <AbstractionNode
      label="Output Node"
      handles={[{ type: "target", position: "Left", id: `${id}-value` }]}
    >
      <div className="p-2">
        <div>
          <label>
            Name:
            <input type="text" value={currName} onChange={handleNameChange} className="border p-1 rounded-md" />
          </label>
          <label>
            Type:
            <select value={outputType} onChange={handleTypeChange}>
              <option value="Text">Text</option>
              <option value="File">Image</option>
            </select>
          </label>
        </div>
      </div>
    </AbstractionNode>
  );
};
