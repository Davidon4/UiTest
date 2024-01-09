import React from "react";
import {
  TextInput,
  View,
  Image,
  Text,
} from "react-native";
import { styles } from "./styles";

const AppInput = ({
  placeholder,
  value,
  onChangeText,
  style,
  source,
  text,
  ...props
}) => {

  return (
    <View style={styles.container}>
        <View style={styles.inputContainer}>
        <Image resizeMode="contain" source={source}/>
          <TextInput
            value={value}
            onChangeText={onChangeText}
            placeholder={placeholder}
            style={[styles.input, style]}
            {...props}
          />
          <Text style={styles.text}>{text}</Text>
        </View>
    </View>
  );
};

export default React.memo(AppInput);
