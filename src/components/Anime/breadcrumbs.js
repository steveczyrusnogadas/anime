import React, { useState, useEffect, useLayoutEffect, useRef, useCallback } from 'react';
import BreadcrumbItem from './breadcrumbItem';

const Breadcrumbs = ({ items, children }) => {
  const [widths, setWidths] = useState([]);
  const [collapsed, setCollapsed] = useState(false);
  const containerRef = useRef(null);

  const childrenArray = React.Children.toArray(children);
  const itemsCount = items ? items.length : childrenArray.length;

  const updateWidth = (index, width) => {
    setWidths((currentWidths) => {
      console.log('currentWidths', { currentWidths });
      const newWidths = [...currentWidths];
      console.log('newWidths', { newWidths });

      newWidths[index] = width;
      console.log('newWidths2', { newWidths });
      return newWidths;
    });
  };

  const checkOverflow = useCallback(() => {
    console.log('widths1', { widths })
    const totalWidth = widths.reduce((acc, width) => acc + width, 0);
    console.log('widths2', { widths })

    if (containerRef.current) {
      setCollapsed(totalWidth > containerRef.current.clientWidth);
      console.log('widths3', { widths })
    }
  }, [widths]);

  useLayoutEffect(() => {
    console.log('counts', { itemsCount });
    setWidths(new Array(itemsCount).fill(0));
  }, [itemsCount]);

  useLayoutEffect(() => {
    const resizeObserver = new ResizeObserver(() => {
    console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@');

      checkOverflow();
    });

    if (containerRef.current) {
    console.log('WWWWWWWWWWWWWWWWWWWWWWWW');

      resizeObserver.observe(containerRef.current);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, [checkOverflow, itemsCount]);

  const renderBreadcrumbItems = () => {
    if (items) {
      return items.map((item, index) => (
        <BreadcrumbItem
          key={index}
          onWidthChange={(width) => updateWidth(index, width)}
        >
          {item}
        </BreadcrumbItem>
      ));
    }

    return React.Children.map(children, (child, index) =>
      React.isValidElement(child)
        ? React.cloneElement(child, {
            key: index,
            onWidthChange: (width) => updateWidth(index, width),
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
