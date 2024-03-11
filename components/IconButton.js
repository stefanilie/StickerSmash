import { Pressable, StyleSheet, Text } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export const IconButton = ({
  icon,
  label,
  onPress,
  size,
  color,
  containerSyle,
}) => {
  return (
    <Pressable style={containerSyle} onPress={onPress}>
      <MaterialIcons name={icon} size={size} color={color} />
      {label ? <Text style={styles.iconButtonLabel}>{label}</Text> : null}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  iconButtonLabel: {
    color: "#fff",
    marginTop: 12,
  },
});
