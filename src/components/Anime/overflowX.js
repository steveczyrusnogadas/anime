import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';

export const useDetectOverflowX = ({ itemsCount }) => {
  const [widths, setWidths] = useState([]);
  const [collapsed, setCollapsed] = useState(false);
  const containerRef = useRef(null);

  const updateWidth = useCallback((index, width) => {
    setWidths((currentWidths) => {
      if (currentWidths[index] === width) {
        return currentWidths;
      }
      const newWidths = [...currentWidths];
      newWidths[index] = width;
      return newWidths;
    });
  }, []);

  useEffect(() => {
    const totalWidth = widths.reduce((acc, width) => acc + width, 0);
    if (containerRef.current) {
      const isOverflowing = totalWidth > containerRef.current.clientWidth;
      if (isOverflowing !== collapsed) {
        setCollapsed(isOverflowing);
      }
    }
  }, [widths, itemsCount, collapsed]);

  const onWidthChange = useCallback(
    (index) => (width) => {
      updateWidth(index, width);
    },
    [updateWidth],
  );

  const checkOverflow = useCallback(() => {
    const totalWidth = widths.reduce((acc, width) => acc + width, 0);

    if (containerRef.current) {
      setCollapsed(totalWidth > containerRef.current.clientWidth);
    }
  }, [widths]);

  useLayoutEffect(() => {
    setWidths(new Array(itemsCount).fill(0));
  }, [itemsCount]);

  useLayoutEffect(() => {
    const resizeObserver = new ResizeObserver(() => {
      checkOverflow();
    });

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, [checkOverflow, itemsCount]);

  return {
    collapsed,
    containerRef,
    onWidthChange,
  };
};

export default useDetectOverflowX;
