// toolbar.js

import { DraggableNode } from "./draggableNode";

export const PipelineToolbar = () => {
  return (
    <div style={{ padding: "10px" }}>
      <div
        style={{
          marginTop: "20px",
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
        }}
      >
        <DraggableNode type="customInput" label="Input" />
        <DraggableNode type="llm" label="LLM" />
        <DraggableNode type="customOutput" label="Output" />
        {/* <DraggableNode type="text" label="Text" /> */}
        <DraggableNode type="test" label="Test" />
        <DraggableNode type="color" label="Color" />
        <DraggableNode type="note" label="Note" />
        <DraggableNode type="pipeline" label="Pipeline" />
        <DraggableNode type="fileSave" label="File Save" />
      </div>
    </div>
  );
};
