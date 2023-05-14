import React from 'react';
import {View} from 'react-native';
import {H3, H4, Image} from '../../../components';
import {ISlideCardItemProps} from './interface';

const SlideCard = ({
  item,
  currentActiveColor,
  currentBgColor,
  currentBgImage,
  styles,
  index,
  colors,
}: ISlideCardItemProps) => {
  return (
    <View key={index} style={[styles.slide, {backgroundColor: currentBgColor}]}>
      <Image source={currentBgImage} style={styles.img} />

      <View style={styles.content}>
        <H3 left bold color={currentActiveColor}>
          {item.mainText}
        </H3>
        <H4 left bold color={colors.black} style={styles.helperText}>
          {item.helperText}
        </H4>
      </View>
    </View>
  );
};

export default SlideCard;
