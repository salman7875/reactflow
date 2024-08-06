import { useState } from "react";
import { AbstractionNode } from "../abstractionNode";

const NoteNode = () => {
  const [note, setNote] = useState("");

  return (
    <AbstractionNode>
      <div className="h-[100%] bg-yellow-200/15">
        <textarea
          value={note}
          rows={10}
          onChange={(e) => setNote(e.target.value)}
          className="border outline-none w-full bg-inherit p-2"
        ></textarea>
      </div>
    </AbstractionNode>
  );
};

export default NoteNode;
