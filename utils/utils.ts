import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Linking, Platform } from "react-native";
import { RootStackParamList } from "../types";

export const makerPhonePressCallback = (phoneNum: string) => () => {
  Linking.openURL(
    Platform.OS === "android" ? `tel:${phoneNum}` : `telprompt:${phoneNum}`
  );
};

type TMakerNavigationCallback = <T extends keyof RootStackParamList>(
  navigation: NativeStackNavigationProp<RootStackParamList, T, undefined>,
  targetScreen: keyof RootStackParamList
) => () => void;

export const makerNavigationCallback: TMakerNavigationCallback =
  (navigation, targetScreen) => () => {
    navigation.push(targetScreen);
  };
