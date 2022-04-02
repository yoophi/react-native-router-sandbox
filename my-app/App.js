import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Link, NativeRouter, Route, Routes } from "react-router-native";
import HelloScreen from "./screens/hello";
import HomeScreen from "./screens/home";
import NotFoundScreen from "./screens/not-found";
import PageOneScreen from "./screens/page-one";
import PageTwoScreen from "./screens/page-two";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NativeRouter>
        <View style={{ padding: 8, borderWidth: 2 }}>
          <Link to="/">
            <Text>Home</Text>
          </Link>
          <Link to="/page-one">
            <Text>Page One</Text>
          </Link>
          <Link to="/page-two">
            <Text>Page Two</Text>
          </Link>
          <Link to="/invalid-page">
            <Text>Invalid Link</Text>
          </Link>
        </View>
        <View
          style={{ padding: 8, borderBottomColor: "#ff00ff", borderWidth: 2 }}
        >
          <Routes>
            <Route exact path="/" element={<HomeScreen />} />
            <Route exact path="/page-one" element={<PageOneScreen />} />
            <Route exact path="/page-two" element={<PageTwoScreen />} />
            <Route exact path="/hello" element={<HelloScreen />} />
            <Route path="*" element={<NotFoundScreen />} />
          </Routes>
        </View>
      </NativeRouter>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
