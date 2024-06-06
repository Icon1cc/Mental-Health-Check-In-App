import { Image } from "react-native";
import React from "react";

interface ImageViewerProps {
  selectedImage?: string;
  icon?: "star" | "joystick" | "coin" | "poition" | "target" | "skull";
  size: number;
}

const placeholder = require("@/assets/images/user/smiling-woman.jpeg");

export default function ImageViewer({
  size,
  selectedImage,
  icon,
}: ImageViewerProps) {
  const iconMap = {
    star: require("@/assets/images/icons/star.png"),
    joystick: require("@/assets/images/icons/joystick.png"),
    coin: require("@/assets/images/icons/coin.png"),
    poition: require("@/assets/images/icons/potion.png"),
    target: require("@/assets/images/icons/target.png"),
    skull: require("@/assets/images/icons/skull.png"),
  };
  const iconSource = icon === undefined ? undefined : iconMap[icon];
  const imageSource = icon
    ? iconSource
    : selectedImage
      ? { uri: selectedImage }
      : placeholder;
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
