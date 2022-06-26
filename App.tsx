import React from "react";
import { View } from 'react-native';
import { Counter } from "./src/components";

const App = () => {
  return <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
    <Counter initialCount={0} />
  </View>
}

export default App;