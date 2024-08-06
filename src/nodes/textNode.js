// textNode.js

import { useState } from "react";
import { AbstractionNode } from "../abstractionNode";
import { Handle, Position } from "reactflow";

const specialChar = /[-!{}\[\]@#$%^&*(),.?"':;|_+~=]/;
const firstLetterNumber = /^\d/;

const getRandomPosition = (max) => Math.floor(Math.random() * max);

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || "{{input}}");
  const [handles, setHandles] = useState([
    { type: "source", position: "Right", id: `${id}-value` },
  ]);

  const handleTextChange = (e) => {
    const value = e.target.value;
    if (value.startsWith("{{") && value.endsWith("}}")) {
      const result = value.match(/\{\{(.*?)\}\}/);

      const varName = result[1];
      if (!/\s/.test(varName.trim())) {
        if (!specialChar.test(varName) && !firstLetterNumber.test(varName)) {
          setCurrText(varName);
        }
      }
    } else {
      setCurrText(value);
    }
  };

  const createHandles = () => {
    const randomY = getRandomPosition(32);
    setHandles((prev) => [
      ...prev,
      { type: "target", id: `${id}-value`, position: "Left", y: randomY },
    ]);
    setCurrText("");
  };

  return (
    <AbstractionNode label="Text" handles={[]}>
      {handles.map((data, i) => (
        <Handle
          position={Position[data.position]}
          type={data.type}
          x={0}
          y={87}
          id={data.id}
        />
      ))}
      <div className="p-2">
        <div className="flex flex-col">
          <label htmlFor="text" className="text-slate-600">
            Enter some text:
          </label>
          <textarea
            id="text"
            value={currText}
            onChange={handleTextChange}
            className="min-h-0 p-1 whitespace-pre-wrap"
          />
        </div>
        {/* <span className="absolute -right-12 bottom-16 text-purple-700 font-semibold">
          Hello
        </span> */}
        <button
          className="relative left-[65%] text-white bg-purple-500 rounded-md px-3 hover:bg-purple-600"
          onClick={createHandles}
        >
          Create
        </button>
      </div>
    </AbstractionNode>
  );
};
