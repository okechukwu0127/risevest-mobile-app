import {NavigationProp, ParamListBase} from '@react-navigation/native';

export type IControlButtonStyles = {
  btnLastContainer: object;
  btnContainer: object;
  btn: object;
  leftButton: object;
  rightButton: object;
  rightIcon: object;
};

export type ISlides = {
  mainText: string;
  helperText: string;
  image: string;
  bgColor: string;
  activeColor: string;
};

export interface IControlButton {
  NextSlide: Function;
  PrevSlide: Function;
  slides: ISlides[];
  currentIndex: number;
  styles: IControlButtonStyles;
  colors: any;
  currentActiveColor: string;
  navigation: NavigationProp<ParamListBase>;
}

///

export type ISlideCardStyles = {
  slide: object;
  img: object;
  content: object;
  helperText: object;
};

export type ISlideCardItem = {
  mainText: string;
  helperText: string;
};
export interface ISlideCardItemProps {
  item: ISlideCardItem;
  index: number;
  currentActiveColor: string;
  currentBgColor: string;
  currentBgImage: any;
  styles: ISlideCardStyles;
  colors: any;
}

//

export type IStylePassword = {
  passwordChecker: object;
};
export interface IPasswordHolder {
  styles: IStylePassword;
  stepChecker: Function;
}
