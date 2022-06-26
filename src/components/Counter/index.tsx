import React, { useState } from "react";
import { Text } from "react-native";

export type Props = {
  initialCount: number,
  onChange?: Function,
};

const Counter: React.FC<Props> = (props) => {
  const { initialCount, } = props;
  const [count, setCount] = useState(initialCount);

  const onPress = () => {
    setCount(c => c + 1);
  }

  const componentProps = { onPress };

  return <Text {...componentProps}>Clicked: {count}</Text>
}

export default Counter;
