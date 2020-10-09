import * as React from "react";

function SvgCross(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" {...props}>
      <path d="M28.71 4.71l-1.42-1.42L16 14.59 4.71 3.29 3.29 4.71 14.59 16 3.29 27.29l1.42 1.42L16 17.41l11.29 11.3 1.42-1.42L17.41 16l11.3-11.29z" />
    </svg>
  );
}

export default SvgCross;
