import { useRef } from "react";
import { useIsVisible } from "../../helpers/useIsVisible";

function Title({ children, className, ...props }) {
  const ref = useRef();
  const isVisible = useIsVisible(ref, true);

  return (
    <h1
      ref={ref}
      className={`font-title text-secondary text-4xl text-center mt-8 leading-normal 
        transition-opacity ease-in  duration-1000 ${
          isVisible ? "opacity-100" : "opacity-0"
        } ${className}`}
      {...props}
    >
      {children}
    </h1>
  );
}

export default Title;
