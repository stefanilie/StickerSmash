import { View, Pressable, StyleSheet } from "react-native";
import { IconButton } from "./IconButton";

export const CircleButton = ({ onPress }) => {
  return (
    <View style={styles.circleButtonContainer}>
      <IconButton
        icon="airline-seat-flat-angled"
        size={38}
        color="#25292e"
        onPress={onPress}
        containerSyle={styles.circleButton}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  circleButtonContainer: {
    width: 84,
    height: 84,
    marginHorizontal: 60,
    borderWidth: 4,
    borderColor: "#ffd33d",
    borderRadius: 42,
    padding: 3,
  },
  circleButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 42,
    backgroundColor: "#fff",
  },
});
