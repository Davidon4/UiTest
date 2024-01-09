import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    // paddingVertical: 20,
    // paddingHorizontal: 8,
    borderRadius: 8,
    flex: 1,
  },
  title: {
    color: colors.white,
    textAlign: "center",
    fontSize: 14,
    fontFamily: 'Roboto-Regular',
    fontWeight: "600",
  },
  bottom:{
    position: 'absolute',
  },
  item: {
    bottom: -100
  },
  signUpStyle:{
    color: colors.primary
  }
});
