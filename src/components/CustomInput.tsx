/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';
import {colors, WP} from '../constants';
import Icon from './icon';

//import config from '../../setting/config';

export default function CustomInput(props: any) {
  const [borderColor, setBorderColor] = useState(colors.inputColor);
  const [isFocus, setIsFocus] = useState(false);
  const [changeVisibility, setChangeVisibility] = useState(false);

  //

  const {
    inputType,
    icon,
    icon2,
    placeholder,
    label,
    value,
    onChangeText,
    backgroundColor,
    onFocus,
    style,
    //secureTextEntry,
    error,
    onBlur,
    keyboardType,
    inputRef,
    hideBorder,
    editable,
  } = props;

  const CustomFocus = () => {
    onFocus;
    setBorderColor(colors.riseDarkGreen);
    setIsFocus(true);
  };

  const CustomBlur = () => {
    onBlur;
    setIsFocus(false);
    setBorderColor(colors.inputColor);
  };

  return (
    <View style={styles.container}>
      {label && isFocus && (
        <View style={styles.labelHolder}>
          <Text style={styles.labelText}>{label}</Text>
        </View>
      )}

      <View style={{flexDirection: 'column'}}>
        <TextInput
          keyboardType={keyboardType}
          placeholderTextColor={colors.black}
          style={[
            {
              ...styles.numberStyle,
              ...style,
              height: 40,
              borderColor:
                error && error.length > 1
                  ? 'red'
                  : hideBorder
                  ? colors.white
                  : borderColor,
              paddingLeft: hideBorder ? 40 : 'auto',
              marginTop: hideBorder ? -10 : null,
              backgroundColor: backgroundColor,
            },
          ]}
          placeholder={placeholder}
          secureTextEntry={
            keyboardType === 'email-address' ||
            keyboardType === 'phone-pad' ||
            keyboardType === 'ascii-capable'
              ? false
              : !changeVisibility
          }
          onChangeText={onChangeText}
          value={value}
          autoCorrect={false}
          selectTextOnFocus={true}
          autoCompleteType="off"
          autoCapitalize="none"
          multiline={false}
          onFocus={CustomFocus}
          //keyboardType={keyboardType}
          onBlur={CustomBlur}
          ref={inputRef}
          editable={editable}
          {...props}
        />
        {inputType === 'password' ? (
          <TouchableOpacity
            activeOpacity={0}
            onPress={() => {
              icon2 === '' ? null : setChangeVisibility(!changeVisibility);
            }}
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              paddingRight: 20,
              borderTopRightRadius: 10,
              borderBottomRightRadius: 10,
              position: 'absolute',

              right: -8,
              top: 14,
            }}>
            <Icon
              name={!changeVisibility ? icon : icon2}
              size={25}
              color={colors.riseDarkGreen}
            />
          </TouchableOpacity>
        ) : null}

        {error && error.length > 1 && (
          <Text style={styles.errorStyle}>{error}</Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    // borderColor: 'red',
    // borderWidth: 0.4,
    // borderStyle: 'solid',
  },
  labelText: {
    fontSize: 11,
    fontWeight: '500',
    color: colors.riseDarkGreen,
    textAlign: 'left',
  },
  labelHolder: {
    marginBottom: -12,
    marginLeft: 20,
    zIndex: 9999,

    backgroundColor: colors.white,
    padding: 2,
    //borderWidth: 1,
    // borderColor: 'black',
    width: WP('35%'),
    height: 22,
  },

  selectTextStyle: {
    fontSize: 12,
    fontWeight: '300',
    color: 'grey',
  },
  numberStyle: {
    minHeight: 60,
    borderRadius: 10,
    width: '100%',
    paddingHorizontal: 12,
    alignItems: 'center',
    alignSelf: 'center',
    fontSize: 15,
    fontWeight: '700',
    color: colors.black,
    borderStyle: 'solid',
    borderWidth: 0.7,
    //borderColor: 'black',
  },
  errorStyle: {
    fontSize: 12,
    fontWeight: '300',
    color: 'red',
    marginTop: 10,
    marginLeft: 10,
  },
});
