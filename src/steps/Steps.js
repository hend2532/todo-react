import React, { useState } from "react";

function Steps() {
    const [step,setStep]=useState(0);
  const orders = [
    "Learn React ⚛️",
    "Apply for jobs 💼",
    "Invest your new income 🤑",
  ];
  const next=()=>{
    if(step<2) setStep((s)=>s+1);
  }
  const prev=()=>{
    if(step>0) setStep((s)=>s-1);
  }
  return (
    <div>
      <div>
        <span>1</span>
        <span>2</span>
        <span>3</span>
      </div>
      <div>step {step+1}:
        {
            orders[step]
        } 
        </div>
        <button onClick={prev}>prev</button>
        <button onClick={next}>Next</button>
    </div>
  );
}

export default Steps;
