import React from 'react';
import { StatusBar, View } from 'react-native';
import { useHeaderHeight } from '@react-navigation/elements';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import { SafeAreaProvider } from 'react-native-safe-area-context';

const App = () => {
  const backgroundStyle = {
    backgroundColor: '#fafffe', // isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaProvider>
      <View
        style={[
          backgroundStyle,
          {
            flex: 1,
          },
        ]}>
        <StatusBar barStyle={'dark-content'} />
        <View
          style={{
            flex: 1,
            height: '100%',
          }}>
          <Navigation />
        </View>
      </View>
    </SafeAreaProvider>
  );
};

const List = () => {
  const navBarHeight = useHeaderHeight();

  return (
    <View style={{ flex: 1, backgroundColor: '#00fffa' }}>
      <View
        style={{
          backgroundColor: '#fffa00',
          position: 'absolute',
          top: navBarHeight,
          width: 200,
          height: 100,
        }}
      />
    </View>
  );
};

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerBackVisible: false,
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerBlurEffect: 'dark',
          headerTransparent: true,
        }}>
        <Stack.Screen name="Header" component={List} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
