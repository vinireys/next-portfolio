import { SVGProps } from "react";

interface CopyInconProps extends SVGProps<SVGSVGElement> {
  title?: string;
}

export const CopyIncon = ({title, ...props}: CopyInconProps) => {
  return (
    <svg
      {...props}
      strokeWidth="0"
      viewBox='0 0 24 24'
      height='1em'
      width='1em'
      xmlns="http://www.w3.org/2000/svg"
    >
      {title && <title>{title}</title>}
      <path fill="none" d="M0 0h24v24H0V0z"></path>
      <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
    </svg>
  );
};
