import React, { Children } from "react";
import { StyleSheet, View, Text } from "react-native";
import ArticleView from "./src/components/ArticleView";
import CartView from "./src/components/CartView";
import Footer from "./src/components/Footer";
import Title from "./src/components/Title";
import { Context } from "./src/context/store";
import useArticles from "./src/hooks/useArticles";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  const { state, dispatch } = useArticles();

  return (
    <Context.Provider value={{ state, dispatch }}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={ArticleView}
            options={{
              headerTitle: () => <Title />,
            }}
          />
          <Stack.Screen
            name="Cart"
            component={CartView}
            options={{
              headerTitle: () => <Title />,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Context.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "column",
    flexWrap: "wrap",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
