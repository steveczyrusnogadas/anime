import React, { useState, useLayoutEffect, useRef, useCallback } from 'react';
import BreadcrumbItem from './breadcrumbItem';
import useDetectOverflowX from './overflowX';

const Breadcrumbs = ({ items, children }) => {
  const childrenArray = React.Children.toArray(children);
  const itemsCount = items ? items.length : childrenArray.length;
  const { collapsed, containerRef, onWidthChange } = useDetectOverflowX({
    itemsCount,
  });

  const renderBreadcrumbItems = () => {
    if (items) {
      return items.map((item, index) => (
        <BreadcrumbItem key={index} onWidthChange={onWidthChange(index)}>
          {item}
        </BreadcrumbItem>
      ));
    }

    return React.Children.map(children, (child, index) =>
      React.isValidElement(child)
        ? React.cloneElement(child, {
            key: index,
            onWidthChange: onWidthChange(index),
          })
        : child,
    );
  };

  const renderedBreadcrumbItems = renderBreadcrumbItems();

  return (
    <div
      ref={containerRef}
      style={{ overflow: 'hidden', whiteSpace: 'nowrap' }}
    >
      {collapsed &&
      renderedBreadcrumbItems !== null &&
      renderedBreadcrumbItems !== undefined &&
      renderedBreadcrumbItems.length > 0 ? (
        <>
          {renderedBreadcrumbItems[0]}
          <span>...</span>
          {renderedBreadcrumbItems[renderedBreadcrumbItems.length - 1]}
        </>
      ) : (
        renderedBreadcrumbItems
      )}
    </div>
  );
};

export default Breadcrumbs;
