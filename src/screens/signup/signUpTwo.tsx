import React, {useEffect, useState} from 'react';
import {View, ScrollView} from 'react-native';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import {
  FocusAwareStatusBar,
  H5,
  H3,
  Button,
  TextInput,
  CustomPicker,
  Text,
} from '../../components';
import {colors, WP} from '../../constants';
import {useForm, Controller} from 'react-hook-form';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';

import stack from '../../constants/routes';
import {styles} from './styles';
import countriesPhone from '../../../assets/countriesPhone';
import DatePicker from '../../components/datePicker';
import {DatePickerModal} from 'react-native-paper-dates';

interface IProps {
  navigation: NavigationProp<ParamListBase>;
}

function SignUpTwo({navigation}: IProps) {
  const {splash} = stack.stack;

  const schema = yup.object().shape({
    lastName: yup.string().required('lastName  is required'),
    firstName: yup.string().required('firstName  is required'),
    phone: yup.number().required('Phone is required'),

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

  const [openDate, setOpenDate] = useState(false);
  const [dateLable, setDateLabel] = useState('');
  const [date, setDate] = useState(new Date());
  const [listData, setListData] = useState<any[]>([]);

  const onDismissSingle = React.useCallback(() => {
    setOpenDate(false);
  }, [setOpenDate]);

  const onConfirmSingle = React.useCallback(
    (params: any) => {
      console.log(params.date, 'data');
      setDate(params.date);
      setDateLabel(params.date.toDateString());
      setOpenDate(false);
    },
    [setOpenDate, setDate],
  );

  useEffect(() => {
    if (getState) {
      setBorderColor(colors.riseDarkGreen);
    } else {
      setBorderColor(colors.inputColor);
    }
  }, [getState]);

  const onSubmit = async (data: any) => {
    console.log(data);
    navigation.navigate(splash);
  };

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
                  error={errors.lastName?.message}
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
                  error={errors.nickName?.message}
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

          <View
            style={[
              styles.numberStyle,
              styles.numberSTyle2,
              styles.h50,
              {
                borderColor: borderColor,
              },
            ]}>
            {openDate && (
              <View style={styles.labelHolder}>
                <Text style={styles.labelText}>Date of Birth</Text>
              </View>
            )}

            <DatePickerModal
              mode="single"
              visible={openDate}
              onDismiss={onDismissSingle}
              date={date}
              onConfirm={onConfirmSingle}
            />

            <DatePicker
              // backgroundColor={colors.profileInput}
              dateValue={dateLable}
              label={'Started Date'}
              onPress={() => setOpenDate(true)}
            />
          </View>

          <View style={[styles.buttonHolder]}>
            <Button
              text="Sign Up"
              onPress={handleSubmit(onSubmit)}
              textColor={colors.white}
              backgroundColor={
                true ? colors.riseDarkGreen : colors.riseLightGreen
              }
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

export default SignUpTwo;
