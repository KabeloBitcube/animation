import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { RootTabParamList } from './types/route.type';
import Drag from './screens/drag';
import Tap from './screens/tap';
import Carousel from './screens/carousel';
import Menu from './screens/menu';
import Theme from './screens/theme';
import Scroll from './screens/scroll';
import Move from './screens/move';
import Rotation from './screens/rotation';
import { StyleSheet, View } from 'react-native';

const Tabs = createBottomTabNavigator<RootTabParamList>();

export default function App() {

  return (
    <GestureHandlerRootView>
      <SafeAreaProvider>
        <NavigationContainer>

          <Tabs.Navigator
            screenOptions={{
              tabBarStyle: {
                backgroundColor: "#ffffffff",
                height: 60,
                borderRadius: 10,
                position: "absolute",
                shadowColor: "#000",
                shadowOpacity: 0.05,
                shadowRadius: 3,
                elevation: 5,
                margin: 10,
                marginBottom: 50,
              },
            }}
          >
            <Tabs.Screen
              name="tap"
              component={Tap}
              options={{
                headerShown: false,
                tabBarIcon: ({ color }) => <Ionicons size={28} name="heart" color={color} />,
                title: 'Tap',
              }}
            />

            <Tabs.Screen
              name="carousel"
              component={Carousel}
              options={{
                headerShown: false,
                tabBarIcon: ({ color }) => <Ionicons size={28} name="images" color={color} />,
                title: 'Carousel',
              }}
            />

            <Tabs.Screen
              name="menu"
              component={Menu}
              options={{
                headerShown: false,
                tabBarIcon: ({ color }) => <Ionicons size={28} name="menu" color={color} />,
                title: 'Menu',
              }}
            />

            <Tabs.Screen
              name="theme"
              component={Theme}
              options={{
                headerShown: false,
                tabBarIcon: ({ color }) => <Ionicons size={28} name="contrast" color={color} />,
                title: 'Theme',
              }}
            />

            <Tabs.Screen
              name="scroll"
              component={Scroll}
              options={{
                headerShown: false,
                tabBarIcon: ({ color }) => <Ionicons size={28} name="swap-horizontal" color={color} />,
                title: 'Scroll',
              }}
            />

            <Tabs.Screen
              name="drag"
              component={Drag}
              options={{
                headerShown: false,
                tabBarIcon: ({ color }) => <Ionicons size={28} name="move" color={color} />,
                title: 'Drag',
              }}
            />

            <Tabs.Screen
              name="move"
              component={Move}
              options={{
                headerShown: false,
                tabBarIcon: ({ color }) => <Ionicons size={28} name="trail-sign" color={color} />,
                title: 'Move',
              }}
            />

            <Tabs.Screen
              name="rotation"
              component={Rotation}
              options={{
                headerShown: false,
                tabBarIcon: ({ color }) => <Ionicons size={28} name="sync" color={color} />,
                title: 'Rotate',
              }}
            />

          </Tabs.Navigator>

        </NavigationContainer>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}