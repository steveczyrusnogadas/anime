import React, { memo, useEffect, useRef } from 'react';

const BreadcrumbItem = memo(
  ({ children, onWidthChange, isLastIndex = false }) => {
    const ref = useRef(null);

    useEffect(() => {
      if (ref.current && onWidthChange) {
        onWidthChange(ref.current.offsetWidth);
      }
    }, [onWidthChange]);

    return (
      <span ref={ref}>
        {children}
        {!isLastIndex ? ' / ' : ''}
      </span>
    );
  },
);

export default BreadcrumbItem;
