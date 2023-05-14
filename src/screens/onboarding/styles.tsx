import {StyleSheet} from 'react-native';
import {colors, spacing, HP, WP} from '../../constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: HP('100%'),
  },
  slide: {
    height: HP('100%'),
    justifyContent: 'center',
    marginTop: -spacing.xlarge + 10,
  },
  img: {
    width: HP('35%'),
    height: HP('35%'),
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  dot: {
    top: -HP('41%'),
    width: 7,
    height: 7,
    marginRight: spacing.xxsmall,
  },
  content: {
    paddingHorizontal: spacing.xxsmall,
    marginTop: spacing.large + 20,
  },
  helperText: {
    marginTop: spacing.mini,
  },
  btnContainer: {
    position: 'absolute',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: spacing.large,
    paddingHorizontal: spacing.xxsmall,
    bottom: spacing.xxsmall,
    width: WP('100%'),
  },

  btnLastContainer: {
    position: 'absolute',
    flex: 1,
    flexDirection: 'column',
    marginBottom: spacing.small,
    paddingHorizontal: spacing.xxsmall,
    bottom: spacing.xxsmall,
    gap: 10,
    width: WP('100%'),
  },
  leftButton: {
    padding: 20,
    backgroundColor: colors.blurGreyButton,
  },

  rightButton: {
    padding: 20,
    backgroundColor: colors.blurGreyButton,
    flexDirection: 'row',
    gap: 7,
    justifyContent: 'space-evenly',
  },
  rightIcon: {paddingTop: 5, fontWeight: '800'},
  btn: {},
});
