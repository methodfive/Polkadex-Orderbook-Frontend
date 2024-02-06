import { ComponentProps } from "react";

export function Ask(props: ComponentProps<"svg">) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27 20" {...props}>
      <path
        d="M2.09992 19.73L8.99988 19.73C10.4999 19.73 11.0999 19.09 11.0999 17.5L11.1 2.23C11.1 0.64 10.5 -2.62223e-08 8.99998 -9.17894e-08L2.10002 -3.93401e-07C0.600018 -4.58968e-07 1.71382e-05 0.64 1.70687e-05 2.23L-7.99199e-05 17.5C-7.99894e-05 19.09 0.59992 19.73 2.09992 19.73Z"
        fill="#E6007A"
      />
      <path
        d="M17.1 19.23L24 19.23C25.5 19.23 26.1 18.59 26.1 17L26.1001 3.00002C26.1001 1.41002 25.5001 0.77002 24.0001 0.770019L17.1001 0.770019C15.6001 0.770019 15.0001 1.41002 15.0001 3.00002L15 17C15 18.59 15.6 19.23 17.1 19.23Z"
        stroke="#575A60"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
