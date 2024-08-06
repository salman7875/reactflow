import { AbstractionNode } from "../abstractionNode";

const PipelineNode = ({ id, data }) => {
  return (
    <AbstractionNode label="Pipeline">
      <div className="p-2">
        <div className="flex  items-center space-x-2">
          <input type="checkbox" id="batch" className="h-4 w-4 accent-purple-600" />
          <label htmlFor="batch" className="text-sm text-slate-500">Batch Mode</label>
        </div>
      </div>
    </AbstractionNode>
  );
};

export default PipelineNode;
