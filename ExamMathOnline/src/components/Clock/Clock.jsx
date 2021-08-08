import React, { useEffect, useState } from "react";

export default function Clock(props) {
  const [timeDown, setTimeDown] = useState(2700);

  useEffect(() => {
    const timeInterval = setInterval(() => {
      const timer = timeDown;
      if (timer > 0) setTimeDown(timer - 1);
    }, 1000);
    props.getTimeDown(timeDown);
    if (timeDown === 0) {
      props.finish();
    }
    return () => {
      clearInterval(timeInterval);
    };
  }, [timeDown]);

  return <span>{props.clock(timeDown)}</span>;
}
