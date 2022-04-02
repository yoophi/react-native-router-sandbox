import React from "react";
import { Text, View } from "react-native";
import { Link } from "react-router-native";

const PageOneScreen = () => {
  return (
    <View>
      <Text>Page One</Text>
      <Link to="/page-two">
        <Text>go to Page Two</Text>
      </Link>
    </View>
  );
};

export default PageOneScreen;
