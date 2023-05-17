/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {colors, WP} from '../constants';
import Icon from './icon';

export default function DatePicker(props: any) {
  const {dateValue, error, backgroundColor, placeholderColor, onPress} = props;

  return (
    <View style={styles.container}>
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
                //...styles.dateIcon,
                color: placeholderColor ? placeholderColor : colors.black,
              }}>
              {dateValue}
            </Text>
            <View style={styles.dateIcon}>
              <Icon name={'calendar'} size={25} color={colors.riseDarkGreen} />
            </View>
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
    fontSize: 13,
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
    fontSize: 13,
    fontWeight: '700',
    color: colors.black,
    borderStyle: 'solid',
    borderWidth: 0.7,
  },
  dateIcon: {
    marginRight: -26,
    marginBottom: 10,
  },
  errorStyle: {
    fontSize: 12,
    fontWeight: '300',
    color: 'red',
    marginTop: 10,
    marginLeft: 10,
  },
});
