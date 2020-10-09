import * as React from "react";

function SvgUser(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 64 64" fill="#8a8a8a" {...props}>
      <path d="M41.245 33.035a16 16 0 10-18.49 0A26.041 26.041 0 004 58a2 2 0 002 2h52a2 2 0 002-2 26.041 26.041 0 00-18.755-24.965zM20 20a12 12 0 1112 12 12.014 12.014 0 01-12-12zM8.09 56A22.03 22.03 0 0130 36h4a22.03 22.03 0 0121.91 20z" />
    </svg>
  );
}

export default SvgUser;
