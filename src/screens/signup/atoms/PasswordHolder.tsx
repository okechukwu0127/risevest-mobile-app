import React, {Fragment} from 'react';
import {View} from 'react-native';
import {Icon, H4} from '../../../components';
import {IPasswordHolder} from '../../onboarding/atoms/interface';

const PasswordHolder = ({stepChecker, styles}: IPasswordHolder) => {
  return (
    <Fragment>
      <View style={styles.passwordChecker}>
        <Icon
          name={`${
            stepChecker(1) ? 'checkmark-circle' : 'checkmark-circle-outline'
          }`}
          size={20}
        />
        <H4>Minimum of 8 characters</H4>
      </View>
      <View style={styles.passwordChecker}>
        <Icon
          name={`${
            stepChecker(2) ? 'checkmark-circle' : 'checkmark-circle-outline'
          }`}
          size={20}
        />
        <H4>One UPPERCASE character</H4>
      </View>

      <View style={styles.passwordChecker}>
        <Icon
          name={`${
            stepChecker(3) ? 'checkmark-circle' : 'checkmark-circle-outline'
          }`}
          size={20}
        />
        <H4>One unique character (e.g: !@#$%^&*?)</H4>
      </View>
    </Fragment>
  );
};

export default PasswordHolder;
