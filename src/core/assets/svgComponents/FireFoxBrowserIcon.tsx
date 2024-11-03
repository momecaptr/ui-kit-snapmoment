import * as React from 'react';
import { Ref, SVGProps, forwardRef } from 'react';
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg fill={'none'} height={36} ref={ref} width={36} xmlns={'http://www.w3.org/2000/svg'} {...props}>
    <g clipPath={'url(#a)'}>
      <path
        d={
          'm17.963 35.28-.262.001c-3.65 0-7.036-1.12-9.836-3.035l.06.039c-2.882-1.96-5.133-4.651-6.51-7.812l-.046-.117C.6 22.594.12 20.547.037 18.396l-.001-.032a25.03 25.03 0 0 1 .549-6.778l-.03.166c.513-2.347 1.274-4.421 2.275-6.35l-.067.142A16.568 16.568 0 0 1 6.316.727L6.324.72l-.218 5.59c.146-.187.596-.29 1.352-.309.755-.019 1.22.084 1.392.309A6.695 6.695 0 0 1 12 3.579l.044-.015a10.979 10.979 0 0 1 4.648-1.174h.018a12.971 12.971 0 0 0-2.346 2.896l-.033.06a5.505 5.505 0 0 0-1.164 3.245v.007c.35.111.77.205 1.201.264l.042.004c.497.073.915.123 1.253.15.338.027.788.053 1.352.08.564.025.899.045 1.005.06.199.066.262.368.189.905a3.324 3.324 0 0 1-.614 1.507l.006-.01a3.25 3.25 0 0 1-.327.368l-.001.002c-.327.264-.696.5-1.09.69l-.035.015a6.647 6.647 0 0 1-1.968.671l-.04.006.305 3.767-2.765-1.334c-.141.3-.225.653-.225 1.024 0 .213.028.42.078.617l-.004-.018c.138.515.386.96.718 1.327l-.003-.003a3.03 3.03 0 0 0 1.282.82l.021.005a3.282 3.282 0 0 0 1.633.127l-.02.003a6.342 6.342 0 0 0 1.983-.709l-.032.017c.624-.338 1.178-.636 1.662-.895a2.721 2.721 0 0 1 1.34-.349c.043 0 .086.002.128.003h-.006.03c.673 0 1.286.25 1.754.66l-.003-.003a1.297 1.297 0 0 1 .388 1.301l.001-.008c-.014.027-.03.063-.049.11a1.472 1.472 0 0 1-.171.25l.001-.002c-.1.124-.217.228-.353.306l-.005.002c-.182.098-.392.17-.615.208l-.012.001a2.983 2.983 0 0 1-.937.019l.015.001a7.063 7.063 0 0 1-2.84 2.677l-.04.02a7.822 7.822 0 0 1-3.152.65 7.97 7.97 0 0 1-1.055-.07l.04.005a7.98 7.98 0 0 0 3.178 1.63l.055.012a7.604 7.604 0 0 0 1.938.245c.5 0 .99-.048 1.463-.137l-.049.007a12.269 12.269 0 0 0 3.144-1.069l-.07.032a10.183 10.183 0 0 0 2.552-1.745l-.005.004a7.855 7.855 0 0 0 1.58-2.032l.02-.041a7.966 7.966 0 0 0 .777-3.848v.017a11.637 11.637 0 0 0-.773-3.83l.027.079a6.079 6.079 0 0 0-1.564-2.475l-.003-.002c1.042.432 1.94.964 2.75 1.6l-.024-.019a5.286 5.286 0 0 1 1.521 2.202l.012.036a14.952 14.952 0 0 0-5.292-12.457l-.024-.019c3.376.907 6.201 2.877 8.171 5.52l.029.04a17.335 17.335 0 0 1 3.004 10.322v-.025l.001.173c0 1.752-.295 3.436-.84 5.003l.032-.107a16.916 16.916 0 0 1-2.49 4.78l.032-.044a20.713 20.713 0 0 1-3.72 3.867l-.041.031a17.243 17.243 0 0 1-10.663 3.687h-.002l.005.004Z'
        }
        fill={'#fff'}
      />
    </g>
    <defs>
      <clipPath id={'a'}>
        <path d={'M0 0h36v36H0z'} fill={'#fff'} />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(SvgComponent);

export default ForwardRef;