import React from "react";
import { TouchableWithoutFeedback } from "react-native";

export default function DoubleTap(props) {
  const defaultProps = {
    delay: 300,
    onDoubleTap: () => null,
  };

  let lastTap = null;
  const handleDoubleTap = () => {
    const now = Date.now();
    if (lastTap && now - lastTap < (defaultProps.delay || props.delay)) {
      props.onDoubleTap() || defaultProps.onDoubleTap();
    } else {
      lastTap = now;
    }
  };

  return (
    <TouchableWithoutFeedback onPress={handleDoubleTap}>
      {props.children}
    </TouchableWithoutFeedback>
  );
}
