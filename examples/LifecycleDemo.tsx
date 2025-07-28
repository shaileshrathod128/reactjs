import React, { useEffect, useState } from "react";

const LifecycleDemo = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    console.log("Component Mounted");
    setMounted(true);
    return () => console.log("Component Unmounted");
  }, []);

  return <div>{mounted ? "Mounted" : "Mounting..."}</div>;
};

export default LifecycleDemo;
