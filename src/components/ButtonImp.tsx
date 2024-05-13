//import Link from "next/link";
import React from "react";

export default function ButtonImp(props) {
  const { children, style, href } = props;
  return (
    <button style={style ? style : { background: "bg-yellow-500" }}>
      {children}
    </button>
  );
}
