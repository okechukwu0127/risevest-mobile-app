import React, {Fragment} from 'react';
import {View, TouchableOpacity} from 'react-native';
import {H4, Button, Icon} from '../../../components';
import {IControlButton} from './interface';
import stack from '../../../constants/routes';

const ControlButtons = ({
  currentIndex,
  styles,
  colors,
  slides,
  NextSlide,
  PrevSlide,
  currentActiveColor,
  navigation,
}: IControlButton) => {
  const {home, splash} = stack.stack;

  const handleSignUpPress = () => {
    navigation.navigate(splash);
  };

  const handleLoginPress = () => {
    navigation.navigate(home);
  };

  return (
    <Fragment>
      {currentIndex === slides.length - 1 && (
        <View style={styles.btnLastContainer}>
          <Button
            text="Sign Up"
            onPress={() => handleSignUpPress()}
            backgroundColor={colors.riseDarkGreen}
          />
          <Button
            text="Sign Up"
            onPress={() => handleLoginPress()}
            textColor={colors.riseDarkGreen}
            backgroundColor={colors.blurGreyButton}
          />
        </View>
      )}
      {currentIndex !== slides.length - 1 && (
        <View style={styles.btnContainer}>
          <TouchableOpacity
            onPress={() => {
              PrevSlide(currentIndex);
            }}
            style={styles.btn}>
            <View style={styles.leftButton}>
              <Icon
                name="arrow-back"
                color={
                  currentIndex === 0
                    ? colors.leftIconDisabled
                    : currentActiveColor
                }
              />
            </View>
          </TouchableOpacity>
          <View style={styles.btn}>
            <TouchableOpacity
              style={styles.rightButton}
              onPress={() => NextSlide(currentIndex)}>
              <H4 right bold color={currentActiveColor}>
                Next
              </H4>

              <Icon
                name="arrow-forward"
                color={currentActiveColor}
                style={styles.rightIcon}
              />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </Fragment>
  );
};

export default ControlButtons;
