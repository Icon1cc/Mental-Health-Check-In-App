import { Image } from "react-native";
import React from "react";

interface ImageViewerProps {
  selectedImage?: string;
  size: number;
}

const placeholder = require("@/assets/images/user/smiling-woman.jpeg");

export default function ImageViewer({ size, selectedImage }: ImageViewerProps) {
  const imageSource = selectedImage ? { uri: selectedImage } : placeholder;
  return (
    <Image
      source={imageSource}
      style={{
        width: size,
        height: size,
        resizeMode: "cover",
        borderRadius: size / 2,
      }}
    />
  );
}
