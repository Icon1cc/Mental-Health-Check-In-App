import { Image, StyleSheet } from "react-native";
import React from "react";

interface ImageViewerProps {
  placeholderImage: any;
  selectedImage: string | null;
}

const ImageViewer = ({ placeholderImage, selectedImage }: ImageViewerProps) => {
  const imageSource = selectedImage ? { uri: selectedImage } : placeholderImage;
  return <Image source={imageSource} style={styles.image} />;
};

export default ImageViewer;

const styles = StyleSheet.create({
  image: {
    width: 90,
    height: 90,
    borderRadius: 30,
    resizeMode: "cover",
  },
});
