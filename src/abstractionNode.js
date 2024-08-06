import { useState } from "react";
import "./index.css";
import { Handle, Position } from "reactflow";

export const AbstractionNode = ({ label = "", children, handles = [] }) => {
  let handleEl;

  if (handles.length > 0) {
    handleEl = handles.map((data, i) => {
      const { position, ...others } = data;
      return <Handle position={Position[position]} {...others} key={i} />;
    });
  } else {
    handleEl = null;
  }

  return (
    <div className="w-60 min-h-32 max-h-fit ring-2 rounded-lg ring-purple-200 duration-300  hover:ring-purple-500 hover:shadow-sm hover:shadow-purple-300">
      {label.length < 1 ? null : (
        <div className="p-2 font-medium">
          <span className="text-purple-700">{label}</span>
        </div>
      )}
      {children}
      {handleEl}
    </div>
  );
};
