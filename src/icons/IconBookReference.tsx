
import { SVGAttributes } from 'react'

export default function IconBookReference(props?: SVGAttributes<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"            
      className="w-6 h-6"
      {...props}
    >
      <path d="M6 4H5a1 1 0 110-2h11V1a1 1 0 00-1-1H4a2 2 0 00-2 2v16c0 1.1.9 2 2 2h12a2 2 0 002-2V5a1 1 0 00-1-1h-7v8l-2-2-2 2V4z" />
    </svg>
  );
}
