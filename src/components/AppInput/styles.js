import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

export const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  }, 
  inputContainer: {
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: "center",
    backgroundColor: colors.white,
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
  },
  text:{
    color: colors.primary,
    fontWeight: '800',
    fontSize: 12,
    fontFamily: 'Roboto-Medium'
  }
});
