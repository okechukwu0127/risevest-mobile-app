import React, {useState} from 'react';
import {View} from 'react-native';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import {FocusAwareStatusBar} from '../../components';
import {colors, images} from '../../constants';
import Swiper from 'react-native-swiper';
import SlideCard from './atoms/SlideCard';
import ControlButtons from './atoms/ControlButtons';
import {ISlides} from './atoms/interface';
import {styles} from './styles';

interface IProps {
  navigation: NavigationProp<ParamListBase>;
}
function OnBoarding({navigation}: IProps) {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const [currentBgColor, setCurrentBgColor] = useState<string>(colors.step1Bg);
  const [currentActiveColor, setCurrentActiveColor] = useState<string>(
    colors.activeStep1,
  );

  const [currentBgImage, setCurrentBgImage] = useState<any>(images.step1Img);

  const toggleBg = (index: number) => {
    setCurrentIndex(index);
    setCurrentBgColor(slides[index].bgColor);
    setCurrentBgImage(slides[index].image);
    setCurrentActiveColor(slides[index].activeColor);
    return slides[index].bgColor;
  };

  const slides: ISlides[] = [
    {
      image: images.step1Img,
      mainText: 'Quality assets',
      helperText:
        'Rise invests your money into the best dollar investments around the world.',
      bgColor: colors.step1Bg,
      activeColor: colors.activeStep1,
    },
    {
      image: images.step2Img,
      mainText: 'Superior Selection',
      helperText:
        'Our expert team and intelligent algorithms select assets that beat the markets.',
      bgColor: colors.step2Bg,
      activeColor: colors.activeStep2,
    },
    {
      image: images.step3Img,
      mainText: 'Better Performance',
      helperText:
        'You earn more returns, achieve more of your financial goals and protect your money from devaluation.',
      bgColor: colors.step3Bg,
      activeColor: colors.activeStep3,
    },
  ];

  const NextSlide = (index: number) => {
    if (index <= slides.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const PrevSlide = (index: number) => {
    if (index > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const randNumber = () => {
    return Math.floor(Math.random() * 1000000 + 1);
  };

  return (
    <View style={[styles.container, {backgroundColor: currentBgColor}]}>
      <FocusAwareStatusBar
        barStyle="light-content"
        backgroundColor={currentBgColor}
      />
      <Swiper
        onIndexChanged={index => toggleBg(index)}
        scrollEnabled={true}
        bounces={true}
        index={currentIndex}
        autoplay={false}
        dotColor={colors.greyVariantOne}
        activeDotColor={currentActiveColor}
        dotStyle={styles.dot}
        activeDotStyle={styles.dot}>
        {slides.map(item => (
          <SlideCard
            item={item}
            index={randNumber()}
            currentActiveColor={currentActiveColor}
            currentBgColor={currentBgColor}
            currentBgImage={currentBgImage}
            styles={styles}
            colors={colors}
          />
        ))}
      </Swiper>

      <ControlButtons
        navigation={navigation}
        currentIndex={currentIndex}
        styles={styles}
        colors={colors}
        slides={slides}
        NextSlide={NextSlide}
        PrevSlide={PrevSlide}
        currentActiveColor={currentActiveColor}
      />
    </View>
  );
}

export default OnBoarding;
