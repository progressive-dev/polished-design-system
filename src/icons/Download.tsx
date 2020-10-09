import * as React from "react";

function SvgDownload(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 485 485" fill="#fff" {...props}>
      <path d="M233 378.7c2.6 2.6 6.1 4 9.5 4s6.9-1.3 9.5-4l107.5-107.5c5.3-5.3 5.3-13.8 0-19.1-5.3-5.3-13.8-5.3-19.1 0L256 336.5v-323C256 6 250 0 242.5 0S229 6 229 13.5v323l-84.4-84.4c-5.3-5.3-13.8-5.3-19.1 0s-5.3 13.8 0 19.1L233 378.7zM426.5 458h-368C51 458 45 464 45 471.5S51 485 58.5 485h368c7.5 0 13.5-6 13.5-13.5s-6-13.5-13.5-13.5z" />
    </svg>
  );
}

export default SvgDownload;
