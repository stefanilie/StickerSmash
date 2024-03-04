import { StyleSheet, Image } from "react-native";

const PlaceholderImage = require("../assets/images/background-image.png");

export const ImageViewer = ({ selectedImage }) => {
  const imageSource = selectedImage
    ? { uri: selectedImage.uri }
    : PlaceholderImage;

  return <Image source={imageSource} style={styles.image} />;
};

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
