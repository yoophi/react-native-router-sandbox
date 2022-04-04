import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { NativeRouter, Route, Routes } from "react-router-native";

export const Home = () => {
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
};
export const Expenses = () => {
  return (
    <View>
      <Text>Expenses</Text>
    </View>
  );
};
export const Invoices = () => {
  return (
    <View>
      <Text>Invoices</Text>
    </View>
  );
};
export const Invoice = () => {
  return (
    <View>
      <Text>Invoice</Text>
    </View>
  );
};

export default function App() {
  return (
    <SafeAreaView>
      <NativeRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="expenses" element={<Expenses />} />
            <Route path="invoices" element={<Invoices />}>
              <Route
                index
                element={
                  <View>
                    <Text>Select an invoice</Text>
                  </View>
                }
              ></Route>
              <Route path=":invoiceId" element={<Invoice />}></Route>
            </Route>
          </Route>
          <Route
            path="*"
            element={
              <View style={styles.container}>
                <Text>Open up App.js to start working on your app!</Text>
                <StatusBar style="auto" />
              </View>
            }
          ></Route>
        </Routes>
      </NativeRouter>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
