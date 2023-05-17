import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import {FocusAwareStatusBar, H4, H6} from '../../components';
import {colors, images, HP} from '../../constants';
import useTimeout from '../../hooks/useTimeout';
import stack from '../../constants/routes';

interface IProps {
  navigation: NavigationProp<ParamListBase>;
}
function Splash({navigation}: IProps) {
  const {onboarding} = stack.stack;

  useTimeout(() => {
    navigation.navigate(onboarding);
  }, 3000);

  // console.log(navigation);
  return (
    <View style={styles.container}>
      <FocusAwareStatusBar
        barStyle="light-content"
        showHideTransition={'slide'}
        hidden={false}
        backgroundColor={colors.riseDarkGreen}
      />
      <Image source={images.riseLogo} style={styles.img} />
      <H4 center bold color={colors.white} style={styles.splashTopText}>
        Dollar investments that help you grow
      </H4>

      <View style={styles.bottomView}>
        <H6 style={styles.bottomTextStyle}>All rights reserved</H6>
        <H6 style={styles.bottomTextCopyStyle}>(c) 2021</H6>
      </View>
    </View>
  );
}
export default Splash;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.riseDarkGreen,
    alignItems: 'flex-start',
    height: HP('100%'),
  },
  img: {
    height: 37,
    width: 123,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: HP('10%'),
  },
  splashTopText: {
    width: 197,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 40,
  },
  bottomView: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute', //Here is the trick
    bottom: 50, //Here is the trick
  },
  bottomTextStyle: {
    color: '#fff',
    width: 100,
    textAlignVertical: 'center',
    verticalAlign: 'middle',
    textAlign: 'center',
    padding: 5,
  },
  bottomTextCopyStyle: {
    color: '#fff',
    width: 50,
    textAlignVertical: 'center',
    verticalAlign: 'middle',
    textAlign: 'center',
    padding: 0,
    marginTop: -5,
  },
});
