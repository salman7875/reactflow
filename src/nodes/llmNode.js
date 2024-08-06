// llmNode.js

import { AbstractionNode } from "../abstractionNode";

export const LLMNode = ({ id, data }) => {
  return (
    <AbstractionNode
      label="LLM"
      handles={[
        {
          type: "target",
          position: "Left",
          id: `${id}-value`,
          style: { top: `${100 / 3}%` },
        },
        {
          type: "target",
          position: "Left",
          id: `${id}-value`,
          style: { top: `${200 / 3}%` },
        },
        { type: "source", position: "Right", id: `${id}-value` },
      ]}
    >
      <div className="px-2">
        <div>
          <span>This is a LLM.</span>
        </div>
      </div>
    </AbstractionNode>
  );
};
