import { AbstractionNode } from "../abstractionNode";

const FileSaveNode = ({ id, data }) => {
  return (
    <AbstractionNode
      label="File Save"
      handles={[
        { type: "source", position: "Right", id: `${id}-value` },
        { type: "target", position: "Left", id: `${id}-value` },
      ]}
    >
      <div className="text-slate-600">
        <p className="text-center">This is for testing purpose only.</p>
      </div>
    </AbstractionNode>
  );
};

export default FileSaveNode;
