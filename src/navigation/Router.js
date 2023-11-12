import React from 'react';
import { View, StyleSheet} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Chat, HomePage, Pesanan, Promo } from '../screens/index';
import { Home2, DiscountShape, NoteFavorite, Send2 } from 'iconsax-react-native';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function MainApp() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: "#000",
        tabBarInactiveTintColor: "#000",
        tabBarStyle: {
          paddingBottom: 10,
          paddingTop: 10,
          height: 60,
          borderTopColor: '#b8b8b8',
          borderTopWidth: 1,
        },
        tabBarLabelStyle: {
          marginTop: 5,
          fontSize: 10,
        },
      }}
    >
      <Tab.Screen
        name="HomePage"
        component={HomePage}
        options={{
          tabBarLabel: 'HomePage',
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center' }}>
              {focused && <View style={styles.line} />}
              <Home2
                color="#000"
                variant={focused ? 'Bold' : 'Linear'}
                size={24}
              />
            </View>
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Promo"
        component={Promo}
        options={{
          tabBarLabel: 'Promo',
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center' }}>
              {focused && <View style={styles.line} />}
              <DiscountShape
                color="#000"
                variant={focused ? 'Bold' : 'Linear'}
                size={24}
              />
            </View>
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Pesanan"
        component={Pesanan}
        options={{
          tabBarLabel: 'Pesanan',
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center' }}>
              {focused && <View style={styles.line} />}
              <NoteFavorite
                color="#000"
                variant={focused ? 'Bold' : 'Linear'}
                size={24}
              />
            </View>
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Chat"
        component={Chat}
        options={{
          tabBarLabel: 'Chat',
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center' }}>
              {focused && <View style={styles.line} />}
              <Send2
                color="#000"
                variant={focused ? 'Bold' : 'Linear'}
                size={24}
              />
            </View>
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  line: {
    borderTopColor: '#12b800',
    borderTopWidth: 2,
    width: 40,
  },
});

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default Router;
