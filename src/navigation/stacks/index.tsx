import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import stack from '../../constants/routes';
import {colors} from '../../constants';
import {OnBoarding} from '../../screens/onboarding';
import {Home} from '../../screens/home';
import {Splash} from '../../screens/splash';

const Stack = createNativeStackNavigator();
function Routes() {
  const {onboarding, home, splash} = stack.stack;
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerStyle: {
          backgroundColor: colors.white,
        },
      }}
      initialRouteName={splash}>
      <Stack.Screen
        options={{
          headerShown: false,
          headerStyle: {
            backgroundColor: colors.black,
          },
        }}
        name={onboarding}
        component={OnBoarding}
      />
      <Stack.Screen name={home} component={Home} />
      <Stack.Screen name={splash} component={Splash} />
    </Stack.Navigator>
  );
}

export default Routes;
