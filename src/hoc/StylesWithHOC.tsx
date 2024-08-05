// A Higher-Order Component (HOC) that applies styling:

import React from "react";

interface WithStylesProps {
  styles?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const withStyles = <P extends WithStylesProps>(
  WrappedComponent: React.ComponentType<P>,
  styles: React.CSSProperties
) => {
  return (
    props: Omit<P, "styles"> & {
      onClick?: React.MouseEventHandler<HTMLButtonElement>;
    }
  ) => {
    return <WrappedComponent {...(props as P)} styles={styles} />;
  };
};
