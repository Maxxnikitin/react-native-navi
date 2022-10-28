import { Linking, Platform } from "react-native";

export const makerPhonePressCallback = (phoneNum: string) => () => {
  Linking.openURL(
    Platform.OS === "android" ? `tel:${phoneNum}` : `telprompt:${phoneNum}`
  );
};
