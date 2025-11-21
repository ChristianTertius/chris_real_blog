import { useState, useRef, useEffect, ReactNode } from 'react';

type TooltipPosition = 'top' | 'bottom' | 'left' | 'right';

interface TooltipProps {
  content: ReactNode;
  children: ReactNode;
  position?: TooltipPosition;
  delay?: number;
  className?: string;
}

const Tooltip = ({
  content,
  children,
  position = 'top',
  delay = 200,
  className = ''
}: TooltipProps) => {
  const [visible, setVisible] = useState(false);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const timeoutRef = useRef<NodeJS.Timeout>();
  const triggerRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  const showTooltip = () => {
    timeoutRef.current = setTimeout(() => {
      setVisible(true);
    }, delay);
  };

  const hideTooltip = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setVisible(false);
  };

  useEffect(() => {
    if (visible && triggerRef.current && tooltipRef.current) {
      const triggerRect = triggerRef.current.getBoundingClientRect();
      const tooltipRect = tooltipRef.current.getBoundingClientRect();

      let x = 0;
      let y = 0;

      switch (position) {
        case 'top':
          x = triggerRect.left + triggerRect.width / 2 - tooltipRect.width / 2;
          y = triggerRect.top - tooltipRect.height - 8;
          break;
        case 'bottom':
          x = triggerRect.left + triggerRect.width / 2 - tooltipRect.width / 2;
          y = triggerRect.bottom + 8;
          break;
        case 'left':
          x = triggerRect.left - tooltipRect.width - 8;
          y = triggerRect.top + triggerRect.height / 2 - tooltipRect.height / 2;
          break;
        case 'right':
          x = triggerRect.right + 8;
          y = triggerRect.top + triggerRect.height / 2 - tooltipRect.height / 2;
          break;
      }

      setCoords({ x, y });
    }
  }, [visible, position]);

  const getArrowClass = () => {
    const base = 'absolute w-2 h-2 bg-gray-900 rotate-45';
    switch (position) {
      case 'top':
        return `${base} bottom-[-4px] left-1/2 -translate-x-1/2`;
      case 'bottom':
        return `${base} top-[-4px] left-1/2 -translate-x-1/2`;
      case 'left':
        return `${base} right-[-4px] top-1/2 -translate-y-1/2`;
      case 'right':
        return `${base} left-[-4px] top-1/2 -translate-y-1/2`;
      default:
        return base;
    }
  };

  return (
    <>
      <div
        ref={triggerRef}
        onMouseEnter={showTooltip}
        onMouseLeave={hideTooltip}
        className="inline-block"
      >
        {children}
      </div>

      {visible && (
        <div
          ref={tooltipRef}
          style={{
            position: 'fixed',
            left: `${coords.x}px`,
            top: `${coords.y}px`,
            zIndex: 9999,
          }}
          className={`px-3 py-2 text-sm text-white bg-gray-900 rounded-lg shadow-lg animate-in fade-in zoom-in-95 duration-200 ${className}`}
        >
          {content}
          <div className={getArrowClass()} />
        </div>
      )}
    </>
  );
};
