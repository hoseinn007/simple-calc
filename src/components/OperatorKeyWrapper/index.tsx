import React from "react";
import OperatorKey from "../operatorKey";
import "./style.scss";

interface IOperatorKeyWrapperProps {
  onClick: (value: string) => void;
}

const OperatorKeyWrapper: React.FC<IOperatorKeyWrapperProps> = (props) => {
  return (
    <div className="operator-wrapper">
      <OperatorKey operator=" * " onClick={props.onClick} />
      <OperatorKey operator=" / " onClick={props.onClick} />
      <OperatorKey operator=" - " onClick={props.onClick} />
      <OperatorKey operator=" % " onClick={props.onClick} />
      <OperatorKey operator=" + " onClick={props.onClick} isDouble />
      <OperatorKey operator=" = " onClick={props.onClick} isDouble />
    </div>
  );
};

export default OperatorKeyWrapper;
