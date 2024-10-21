import { useEffect, useRef } from "react";

export function useOutsideClick(onCloseClick, listenCapturing = true) {
  const ref = useRef();

  useEffect(
    function () {
      function handleClick(e) {
        if (ref.current && !ref.current.contains(e.target)) {
          onCloseClick();
        }
      }

      document.addEventListener("click", handleClick, listenCapturing);

      return () => document.removeEventListener("click", handleClick, true);
    },
    [onCloseClick, listenCapturing]
  );
  return ref;
}
