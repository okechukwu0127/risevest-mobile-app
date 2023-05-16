/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';
import {colors, WP} from '../constants';
import Icon from './icon';

//import config from '../../setting/config';

export default function DatePicker(props: any) {
  const [borderColor, setBorderColor] = useState(colors.inputColor);
  const [isFocus, setIsFocus] = useState(false);
  const [changeVisibility, setChangeVisibility] = useState(false);

  //

  const {
    dateValue,
    error,
    placeholder,
    label,
    backgroundColor,
    placeholderColor,
    onPress,
  } = props;

  return (
    <View style={styles.container}>
      {label && isFocus && (
        <View style={styles.labelHolder}>
          <Text style={styles.labelText}>{label}</Text>
        </View>
      )}

      <View style={{flexDirection: 'column'}}>
        <View
          style={{
            ...styles.container,
            borderStyle: 'solid',
            borderWidth: 0.5,
            borderColor: error && error.length > 1 ? 'red' : colors.white,
            backgroundColor: backgroundColor,
          }}>
          <TouchableOpacity
            onPress={onPress}
            style={{
              ...styles.contentStyle,
            }}>
            <Text
              style={{
                ...styles.labelText,
                //fontSize: 12,
                color: placeholderColor ? placeholderColor : colors.black,
              }}>
              {dateValue}
            </Text>
            <Icon name={'calendar'} size={25} color={colors.greyDark} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 40,
    justifyContent: 'center',
    // borderColor: 'red',
    // borderStyle: 'solid',
    // borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 14,
  },
  contentStyle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textStyle: {
    fontWeight: '300',
    fontSize: 14,
    color: 'black',
    paddingTop: 3,
  },
  labelText: {
    fontSize: 15,
    fontWeight: '600',
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
