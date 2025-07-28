import React, { useEffect } from "react";

const withLogger =
  <P extends object>(WrappedComponent: React.ComponentType<P>) =>
  (props: P) => {
    useEffect(() => {
      console.log("Component mounted:", WrappedComponent.name);
    }, []);
    return <WrappedComponent {...props} />;
  };

export default withLogger;
