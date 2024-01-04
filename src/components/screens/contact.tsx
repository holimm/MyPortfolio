import React, { useState } from "react";

export const ContactScreen = () => {
  const [variableA, setVariableA] = useState("Initial Value");

  const handleChangeVariableA = (newValue: any) => {
    setVariableA(newValue);
  };

  return (
    <div className="bg-white">
      <h2>Parent Component</h2>
      <p>Variable A: {variableA}</p>
      <br />
      <ChildComponent1
        variableA={variableA}
        onChangeVariableA={handleChangeVariableA}
      />
      <br />
      <ChildComponent2 variableA={variableA} />
    </div>
  );
};

function ChildComponent1({ variableA, onChangeVariableA }: any) {
  const [variableB, setVariableB] = useState("Initial Value");
  return (
    <div>
      <h3>Child Component 1</h3>
      <p>Variable A in Child 1: {variableB}</p>
      <button onClick={() => setVariableB("New Value from Child 1")}>
        Change Variable A in Child 1
      </button>
    </div>
  );
}

function ChildComponent2({ variableA }: any) {
  const [variableB, setVariableB] = useState("Initial Value");
  return (
    <div>
      <h3>Child Component 2</h3>
      <p>Variable A in Child 2: {variableA}</p>
      {/* Child 2 does not modify the variableA */}
    </div>
  );
}

// import "../../css/scrollbar.css";
// import { PageLayout } from "../common";

// export const ContactScreen = () => {
//   return <PageLayout>Test</PageLayout>;
// };
