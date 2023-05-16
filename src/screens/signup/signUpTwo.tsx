import React, {useEffect, useState} from 'react';
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
  CustomPicker,
  Text,
} from '../../components';
import {colors, HP, spacing, WP} from '../../constants';
import {useForm, Controller, useWatch} from 'react-hook-form';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';

import stack from '../../constants/routes';
import {styles} from './styles';
import countriesPhone from '../../../assets/countriesPhone';
interface IProps {
  navigation: NavigationProp<ParamListBase>;
}

function SignUpTwo({navigation}: IProps) {
  const schema = yup.object().shape({
    lastName: yup.string().required('Email address is required'),
    firstName: yup.string().required('Password field is required'),
    nickName: yup.string(), //.required('Password field is required'),
  });

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(schema),
  });

  const placeholder = {
    label: 'Select country',
    value: null,
    color: '#9EA0A4',
  };

  const [borderColor, setBorderColor] = useState(colors.inputColor);

  const [getState, setGetState] = useState<boolean>(false);

  const [countryCode, setCountryCode] = useState('');
  const [countryFlag, setCountryFlag] = useState('');
  const [countryName, setCountryName] = useState('');

  useEffect(() => {
    if (getState) {
      setBorderColor(colors.riseDarkGreen);
    } else {
      setBorderColor(colors.inputColor);
    }
  }, [getState]);

  const [listData, setListData] = useState<any[]>([]);

  const CountryList = async () => {
    let list: any[] = [];
    countriesPhone.map(data => {
      return list.push({
        label: `${data.flag}  ${data.dial_code}`,
        value: data.dial_code,
      });
    });
    setListData(list);
  };

  useEffect(() => {
    CountryList();
    setCountryCode(
      countriesPhone.filter(obj => obj.name === 'Nigeria')[0].dial_code,
    );
    setCountryFlag(
      countriesPhone.filter(obj => obj.name === 'Nigeria')[0].flag,
    );
    setCountryName(
      countriesPhone.filter(obj => obj.name === 'Nigeria')[0].name,
    );
  }, []);

  const selectCountry = country => {
    let countryCode_ = countriesPhone.filter(obj => obj.name === country)[0]
      .dial_code;
    // Get the country flag
    let countryFlag_ = countriesPhone.filter(obj => obj.name === country)[0]
      .flag;
    let countryValue_ = countriesPhone.filter(obj => obj.name === country)[0]
      .name;

    setCountryCode(countryCode_);
    setCountryFlag(countryFlag_);
    setCountryName(countryValue_);
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
          Tell Us More About You
        </H3>
        <H5 left color={colors.subTitle}>
          Please use your name as it appears on your ID.
        </H5>
        <View style={styles.formContainer}>
          <View style={styles.spaceInline}>
            <Controller
              control={control}
              render={({field: {onChange, onBlur, value}}) => (
                <TextInput
                  onChangeText={onChange}
                  label={'Legal First Name'}
                  value={value}
                  placeholder="Legal First Name"
                  error={errors.firstName?.message}
                  editable={true}
                  inputType="text"
                  keyboardType={'ascii-capable'}
                />
              )}
              name="firstName"
            />
          </View>

          <View style={styles.spaceInline}>
            <Controller
              control={control}
              render={({field: {onChange, onBlur, value}}) => (
                <TextInput
                  onChangeText={onChange}
                  label={'Legal Last Name'}
                  value={value}
                  placeholder="Legal Last Name"
                  error={errors.email?.message}
                  editable={true}
                  inputType="text"
                  keyboardType={'ascii-capable'}
                />
              )}
              name="lastName"
            />
          </View>

          <View style={styles.spaceInline}>
            <Controller
              control={control}
              render={({field: {onChange, onBlur, value}}) => (
                <TextInput
                  onChangeText={onChange}
                  label={'Nick Name'}
                  value={value}
                  placeholder="Nick Name"
                  error={errors.email?.message}
                  editable={true}
                  inputType="text"
                  keyboardType={'ascii-capable'}
                />
              )}
              name="nickName"
            />
          </View>

          <View
            style={[
              styles.numberStyle,
              styles.numberSTyle2,
              {
                borderColor: borderColor,
              },
            ]}>
            {getState && (
              <View style={styles.labelHolder}>
                <Text style={styles.labelText}>Phone Number</Text>
              </View>
            )}
            <View style={[styles.flexBet]}>
              <View style={{width: WP('35%')}}>
                {Object.keys(listData).length > 0 && (
                  <Controller
                    control={control}
                    render={({field: {onChange, onBlur, value}}) => (
                      <CustomPicker
                        backgroundColor={colors.white}
                        label={'code'}
                        listMode="MODAL" //FLATLIST
                        defaultValue={'+234'}
                        setGetState={setGetState}
                        onValueChange={onChange}
                        selectedValue={value}
                        placeholder={placeholder}
                        items={listData}
                        error={errors.code?.message}
                      />
                    )}
                    name="code"
                  />
                )}
              </View>
              <View style={styles.Lines} />
              <View style={{width: WP('62%')}}>
                <Controller
                  control={control}
                  render={({field: {onChange, onBlur, value}}) => (
                    <TextInput
                      onChangeText={onChange}
                      value={value}
                      hideBorder={true}
                      error={errors.phone?.message}
                      editable={true}
                      placeholder="000 000 000"
                      inputType="text"
                      keyboardType={'phone-pad'}
                    />
                  )}
                  name="phone"
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

export default SignUpTwo;
