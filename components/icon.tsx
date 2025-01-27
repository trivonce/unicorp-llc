// Icon.tsx
import React, { FC, useMemo } from 'react';
import clsx from 'clsx';

interface IconProps extends React.HTMLAttributes<HTMLSpanElement> {
  icon: string;
  color?: string;
  size?: number;
  className?: string;
  active?: boolean;
  colored?: boolean;
  hidden?: boolean
  onClick?: (event: React.MouseEvent<HTMLElement>) => void; 
  style?: React.CSSProperties,
}

const Icon: FC<IconProps> = ({ icon, color = '#5D5D5D', size = 22, className, active = false, colored = false, hidden = false, onClick, style }) => {
  const computedStyle = useMemo(() => ({
    backgroundColor: active ? "white" : color,
    width: size,
    height: size,
    maskImage: `url(/assets/icons/${icon}.svg)`,
    WebkitMaskImage: `url(/assets/icons/${icon}.svg)`,
    maskRepeat: 'no-repeat',
    WebkitMaskRepeat: 'no-repeat',
    maskSize: '100%',
    WebkitMaskSize: '100%',
    maskPosition: 'center',
    WebkitMaskPosition: 'center',
    backgroundImage: colored ? `url(/assets/icons/${icon}.svg)` : undefined,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100%',
    backgroundPosition: 'center',
    display: hidden ? "none" : "inline-block"
  }), [icon, color, size, active, colored, hidden]);

  return (
    <span
      className={clsx(`inline-block shrink-0 duration-100`, className)}
      onClick={onClick}
      style={{ ...computedStyle, ...style }}
    />
  );
};

export default Icon;
