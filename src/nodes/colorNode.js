import { useCallback, useState } from "react";
import { AbstractionNode } from "../abstractionNode";

const ColorNode = ({ id, data }) => {
  const [rgb, setRgb] = useState({ red: 0, green: 0, blue: 0 });

  const onChangeHandler = useCallback((evt) => {
    const cappedNumber = Math.min(255, Math.max(0, evt.target.value));
    setRgb((prev) => ({ ...prev, [evt.target.name]: cappedNumber }));
  }, []);

  return (
    <AbstractionNode
      label="Color Node"
      handles={[{ type: "source", position: "Right", id: `${id}-value` }]}
    >
      <div className="pb-4">
        <InputEl data={rgb.red} label="red" onChangeHandler={onChangeHandler} />

        <InputEl
          data={rgb.green}
          label="green"
          onChangeHandler={onChangeHandler}
        />
        <InputEl
          data={rgb.blue}
          label="blue"
          onChangeHandler={onChangeHandler}
        />

        <div
          className={`h-8 w-[95%] mt-2 mx-auto rounded-md border`}
          style={{
            background: `rgb(${rgb.red},${rgb.green},${rgb.blue})`,
          }}
        ></div>
      </div>
    </AbstractionNode>
  );
};

const InputEl = ({ data, label, onChangeHandler }) => {
  return (
    <div className="flex flex-col p-2 space-y-1">
      <label htmlFor={label} className="font-medium">
        {label.toUpperCase()} :
      </label>
      <input
        type="number"
        min="0"
        max="255"
        name={label}
        id={label}
        value={data == 0 ? "" : data.toString()}
        onChange={onChangeHandler}
        className="border-2 px-2 py-1 border-purple-300 outline-none w-full rounded-md"
      />
    </div>
  );
};

export default ColorNode;
