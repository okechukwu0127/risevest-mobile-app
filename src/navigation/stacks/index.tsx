import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import stack from '../../constants/routes';
import {colors} from '../../constants';
import {OnBoarding} from '../../screens/onboarding';
import {Home} from '../../screens/home';
import {Splash} from '../../screens/splash';
import {SignUp} from '../../screens/signup';
import SignUpTwo from '../../screens/signup/signUpTwo';

const Stack = createNativeStackNavigator();
function Routes() {
  const {onboarding, home, splash, signUp, signUpTwo} = stack.stack;
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerStyle: {
          backgroundColor: colors.white,
        },
      }}
      initialRouteName={signUpTwo}>
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
      <Stack.Screen name={signUp} component={SignUp} />
      <Stack.Screen name={signUpTwo} component={SignUpTwo} />
    </Stack.Navigator>
  );
}

export default Routes;
