import React, { useEffect, useRef } from 'react';

const BreadcrumbItem = ({ children, onWidthChange, isLastIndex = false  }) => {
    const ref = useRef(null);

    useEffect(() => {
      const updateWidth = () => {
        if (ref.current) {
          onWidthChange(ref.current.offsetWidth);
        }
      };
  
      updateWidth();
      window.addEventListener('resize', updateWidth);
  
      return () => {
        window.removeEventListener('resize', updateWidth);
      };
    }, [onWidthChange]);
  
    return <span ref={ref}>{children}{!isLastIndex ? ' / ': ''}</span>;
};

export default BreadcrumbItem;
