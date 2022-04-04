import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import {
  Link,
  NativeRouter,
  Outlet,
  Route,
  Routes,
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-native";
import { getInvoice, getInvoices } from "./data";
export const Home = () => {
  return (
    <View>
      <Text style={{ fontSize: 24, paddingBottom: 4 }}>Bookeeper</Text>
      <View
        style={{
          borderBottomWidth: "1px",
          paddingBottom: 4,
        }}
      >
        <View>
          <Link to="/invoices">
            <Text>Invoices</Text>
          </Link>
          <Link to="/expenses">
            <Text>Expenses</Text>
          </Link>
        </View>
      </View>
      <Outlet />
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

function QueryNavLink({ to, children, ...props }) {
  let location = useLocation();
  return (
    <Link to={to + location.search} {...props}>
      {children}
    </Link>
  );
}
export const Invoices = () => {
  let invoices = getInvoices();
  let [searchParams, setSearchParams] = useSearchParams({ replace: true });

  return (
    <View style={{ display: "flex" }}>
      <View
        style={{
          display: "flex",
          borderRightWidth: 1,
          padding: 8,
        }}
      >
        <View>
          {invoices
            .filter((invoice) => {
              let filter = searchParams.get("filter");
              if (!filter) return true;
              let name = invoice.name.toLowerCase();
              return name.startsWith(filter.toLowerCase());
            })
            .map((invoice) => (
              <View>
                <QueryNavLink to={`/invoices/${invoice.number}`}>
                  <Text>{invoice.name}</Text>
                </QueryNavLink>
              </View>
            ))}
        </View>
      </View>
      <View
        style={{
          display: "flex",
        }}
      >
        <Text>hello</Text>
        <Outlet />
      </View>
    </View>
  );
};
export const Invoice = () => {
  const navigate = useNavigate();
  const params = useParams();
  const invoice = getInvoice(parseInt(params.invoiceId, 10));
  return (
    <View style={{ padding: 8 }}>
      <Text style={{ fontSize: 18 }}>Total Due: {invoice.amount}</Text>
      <Text>
        {invoice.name}: {invoice.number}
      </Text>
      <Text>Due Date: {invoice.due}</Text>
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
