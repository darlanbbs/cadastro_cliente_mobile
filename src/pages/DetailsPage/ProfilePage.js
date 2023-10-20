import React from "react";
import { Text } from "react-native";

const ProfilePage = ({ route }) => {
  const { email } = route.params;
  return <Text>{email}</Text>;
};

export default ProfilePage;
