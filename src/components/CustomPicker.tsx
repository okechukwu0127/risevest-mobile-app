/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Platform,
} from 'react-native';
/* import {Picker} from '@react-native-picker/picker';
 */
import {colors, HP, WP} from '../constants';
import Icon from './icon';

import DropDownPicker from 'react-native-dropdown-picker';

export default function CustomPicker(props) {
  const {
    defaultValue,
    placeholder,
    items,
    label,
    setGetState,
    listMode,
    style,
    error,
    onFocus,
    onBlur,
  } = props;

  const [borderColor, setBorderColor] = useState(colors.inputColor);
  const CustomFocus = (e: any) => {
    console.log(e);
    setGetState(e);

    setOpen(e);

    if (e) {
      onFocus;
      setBorderColor(colors.riseDarkGreen);
    } else {
      onBlur;
      setBorderColor(colors.inputColor);
    }
  };

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [item, setItem] = useState(items);

  return (
    <View style={styles.container}>
      <View style={{flex: 0, marginLeft: 10}}>
        <DropDownPicker
          placeholder="Select Code"
          placeholderStyle={{
            fontSize: 11,
            fontWeight: '500',
            //color: colors.riseDarkGreen,
            textAlign: 'left',
          }}
          listMode={listMode}
          style={[
            {
              ...styles.numberStyle,
              ...style,
              height: 10,
              borderColor: error && error.length > 1 ? 'red' : colors.white,
              marginTop: -10,
              // backgroundColor: backgroundColor,
            },
          ]}
          showBadgeDot={true}
          open={open}
          value={value || defaultValue}
          items={item}
          setOpen={CustomFocus}
          setValue={setValue}
          setItems={setItem}
        />
      </View>
      {error && error.length > 1 && (
        <Text style={styles.errorStyle}>{error}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
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

    width: WP('35%'),
    height: 22,
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
  errorStyle: {
    fontSize: 12,
    fontWeight: '300',
    color: 'red',
    marginTop: 10,
    marginLeft: 10,
  },
});
