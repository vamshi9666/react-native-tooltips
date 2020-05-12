import React, { useCallback, useRef } from "react";
import { StyleSheet, View, Button } from "react-native";

const Top (props) {
    const parent = useRef(null)
    const target1 = useRef(null)
    const target2 = useRef(null)
    const onPress = useCallback((target) => {
        props.onPress(parent.current, target.current)
    },[])
    return (
      <View style={styles.container} ref={parent}>
        <Button
          title={"Top Left"}
          ref={target1}
          onPress={() => {
            onPress(target1)
          }}
        />
        <Button
          title={"Top Right"}
          ref={target2}
          onPress={() => {
           onPress(target2)
          }}
        />
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between"
  }
});

export default Top;
