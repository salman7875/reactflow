import { Handle, Position } from "reactflow";
import { AbstractionNode } from "../abstractionNode";

const TestNode = ({ id, data }) => {
  return (
    <AbstractionNode
      label="Test"
      handles={[
        { type: "source", position: "Right", id: `${id}-value` },
        { type: "target", position: "Left", id: `${id}-value` },
      ]}
    >
      <div
        style={{
          backgroundColor: "palegoldenrod",
          padding: "0 4px",
          borderRadius: 4,
        }}
      >
        eruilwerli
      </div>
    </AbstractionNode>
  );
};

export default TestNode;
