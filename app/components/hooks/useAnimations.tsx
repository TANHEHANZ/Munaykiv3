import { useEffect } from "react";
import {
  useSharedValue,
  withTiming,
  Easing,
  withSequence,
  withRepeat,
  useAnimatedStyle,
} from "react-native-reanimated";

export const useAnimations = () => {
  const opacity = useSharedValue(1);
  const translateX = useSharedValue(0);
  const scale = useSharedValue(1);

  const fadeInOut = (callback: any) => {
    opacity.value = withTiming(0, {
      duration: 300,
      easing: Easing.inOut(Easing.quad),
    });

    setTimeout(() => {
      callback();
      opacity.value = withTiming(1, {
        duration: 300,
        easing: Easing.inOut(Easing.quad),
      });
    }, 300);
  };

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [{ translateX: translateX.value }],
  }));

  const scaleAnimation = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  useEffect(() => {
    scale.value = withRepeat(
      withSequence(
        withTiming(1.1, { duration: 500, easing: Easing.bounce }),
        withTiming(0.9, { duration: 500, easing: Easing.ease }),
      ),
      -1,
      true,
    );
  }, []);

  return { fadeInOut, animatedStyle, scaleAnimation };
};
