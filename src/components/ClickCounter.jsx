import { useState } from "react";

export const ClickCounter = ({ onUpdate, value }) => {
  return <button onClick={onUpdate}>Current: {value}</button>;
};
