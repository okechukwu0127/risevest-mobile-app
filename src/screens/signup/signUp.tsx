import React, {useState} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import {
  FocusAwareStatusBar,
  H4,
  H5,
  H3,
  Button,
  Icon,
  TextInput,
} from '../../components';
import {colors, HP, spacing, WP} from '../../constants';
import {useForm, Controller, useWatch} from 'react-hook-form';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';

import stack from '../../constants/routes';
import PasswordHolder from './atoms/PasswordHolder';

interface IProps {
  navigation: NavigationProp<ParamListBase>;
}

const getCharacterValidationError = (str: string) => {
  return `Your password must have at least 1 ${str} character`;
};

function SignUp({navigation}: IProps) {
  const schema = yup.object().shape({
    email: yup
      .string()
      .email('Please enter a valid email')
      .required('Email address is required'),
    password: yup
      .string()
      .required('Password field is required')
      .min(8, 'Password must be at list 8 Xters')
      .matches(/(?=.*[A-Z])/, getCharacterValidationError('Uppercase'))
      //One unique character (e.g: !@#$%^&*?)
      .matches(/(?=.*[!@#\$%\^&\*?])/, getCharacterValidationError('Unique')),
  });

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(schema),
  });

  const password = useWatch({
    control,
    name: 'password', // without supply name will watch the entire form, or ['firstName', 'lastName'] to watch both
    defaultValue: '', // default value before the render
  });

  const stepChecker = (step: number): boolean => {
    if (step === 1) {
      return new RegExp('^.*(?=.{8,})').test(password);
    }

    if (step === 2) {
      return new RegExp('^.*(?=.*[A-Z])').test(password);
    }

    if (step === 3) {
      return new RegExp('^.*(?=.*[!@#$%^&*?])').test(password);
    }
    return false;
  };

  const onSubmit = async data => {
    console.log(data);
  };
  return (
    <ScrollView scrollEnabled={false} contentContainerStyle={styles.pb250}>
      <View style={styles.container}>
        <FocusAwareStatusBar
          barStyle="dark-content"
          showHideTransition={'slide'}
          hidden={false}
          backgroundColor={colors.white}
        />

        <H3 left bold color={colors.black}>
          Create an account
        </H3>
        <H5 left color={colors.subTitle}>
          Start building your dollar-denominated investment portfolio
        </H5>

        <View style={styles.formContainer}>
          <View style={styles.spaceInline}>
            <Controller
              control={control}
              render={({field: {onChange, onBlur, value}}) => (
                <TextInput
                  onChangeText={onChange}
                  label={'Email address'}
                  value={value}
                  placeholder="Email address"
                  //backgroundColor={config.themeDefault.COLORS.profileInput}
                  error={errors.email?.message}
                  editable={true}
                  // onBlur={onBlur}
                  //onFocus={onFocus}
                  inputType="email"
                  icon="eye-off-sharp"
                  keyboardType={'email-address'}
                />
              )}
              name="email"
            />
          </View>

          <View style={styles.spaceInline}>
            <Controller
              control={control}
              render={({field: {onChange, onBlur, value}}) => (
                <TextInput
                  onChangeText={onChange}
                  label={'Password'}
                  value={value}
                  placeholder="Password"
                  error={errors.password?.message}
                  editable={true}
                  type="password"
                  inputType="password"
                  icon="eye-off-sharp"
                  icon2="eye-sharp"
                />
              )}
              name="password"
            />
          </View>

          <View style={styles.passwordHolder}>
            <PasswordHolder stepChecker={stepChecker} styles={styles} />
          </View>

          <View style={styles.buttonHolder}>
            <Button
              text="Sign Up"
              onPress={handleSubmit(onSubmit)}
              textColor={colors.white}
              backgroundColor={
                stepChecker(1) && stepChecker(2) && stepChecker(3)
                  ? colors.riseDarkGreen
                  : colors.riseLightGreen
              }
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
export default SignUp;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    alignItems: 'flex-start',
    height: HP('100%'),
    paddingHorizontal: spacing.xxsmall + 10,
    paddingTop: spacing.large,
  },
  pb250: {paddingBottom: 250},
  spaceInline: {
    marginVertical: 20,

    //borderWidth: 1,
    //borderColor: 'red',
  },
  passwordHolder: {
    marginTop: spacing.xxsmall,
  },

  buttonHolder: {marginTop: spacing.small},
  passwordChecker: {
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'flex-start',
    marginVertical: 5,
  },

  formContainer: {
    paddingVertical: 18,
    width: WP('100%') - 46,
    marginTop: 20,
  },
  searchInputContainer: {
    marginTop: spacing.xsmall,
    marginBottom: spacing.xsmall,
    marginHorizontal: spacing.xxsmall,
  },
});
