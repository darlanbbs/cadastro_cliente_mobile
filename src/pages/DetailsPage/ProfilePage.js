import React, { useEffect, useState } from "react";
import { Text } from "react-native";
import { getAnyUser } from "../../config/db";

const ProfilePage = ({ route }) => {
  const { email } = route.params;
  const [client, setClient] = useState([]);

  useEffect(() => {
    getAnyUser(email).then((data) => {
      if (JSON.stringify(data) !== JSON.stringify(client)) {
        setClient(data);
      }
    });
  }, [client]);
  console.log(client);
  return <Text>{email}</Text>;
};

export default ProfilePage;
