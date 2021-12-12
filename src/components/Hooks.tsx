import React from "react";
import { useCallback, useRef,useContext } from "react";
import { StyleSheet, TextInput, Text, TouchableOpacity, View } from "react-native";

// export const ThemeContext = React.createContext()

const Hooks = () => {
  const inputRef:any = useRef();
  const editText = useCallback(() => {
    inputRef.current.setNativeProps({ text: "" });
  }, []);

  return (
    <View style={styles.container}>
      <TextInput ref={inputRef} style={styles.input} />
      <TouchableOpacity onPress={editText}>
        <Text style={{fontSize:20,margin:10 }}>Clear Text</Text>


      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {

  },
  input: {
    height: 50,
    width: 100,
    marginHorizontal: 20,
    borderWidth: 1,
    borderColor: "#ccc",

  },
});

export default Hooks;