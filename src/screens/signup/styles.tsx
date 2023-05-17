import {StyleSheet} from 'react-native';
import {colors, spacing, HP, WP} from '../../constants';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    alignItems: 'flex-start',
    height: HP('100%'),
    paddingHorizontal: spacing.xxsmall + 10,
    paddingTop: spacing.large,

    //borderColor: 'red',
  },
  Lines: {
    height: 35,
    borderWidth: 0.5,
    borderColor: colors.inputColor,
    width: 1,
    marginLeft: 18,
    marginTop: 5,
  },
  h50: {
    minHeight: 50,
  },
  numberStyle: {
    minHeight: 70,
    borderRadius: 10,
    width: '100%',
    paddingHorizontal: 12,
    alignItems: 'center',
    alignSelf: 'center',
    fontSize: 13,
    fontWeight: '700',
    color: colors.black,
    //borderStyle: 'solid',
    //borderWidth: 0.7,
  },
  numberSTyle2: {
    borderWidth: 1,
    marginTop: 20,
    paddingTop: 10,
    alignItems: 'flex-start',
  },
  labelText: {
    fontSize: 11,
    fontWeight: '500',
    color: colors.riseDarkGreen,
    textAlign: 'left',
  },
  labelHolder: {
    marginTop: -20,
    marginLeft: 10,
    zIndex: 9999,
    textAlign: 'left',

    backgroundColor: colors.white,
    padding: 2,

    width: WP('35%'),
    height: 22,
  },
  flexBet: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  pb250: {paddingBottom: 450},
  spaceInline: {
    marginVertical: 20,

    //borderColor: 'red',
  },
  passwordHolder: {
    marginTop: spacing.xxsmall,
  },

  buttonHolder: {marginTop: spacing.small},
  passwordChecker: {
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'flex-start',
    marginVertical: 5,
  },

  formContainer: {
    paddingVertical: 18,
    width: WP('100%') - 46,
    marginTop: 20,

    //borderColor: 'red',
  },
  searchInputContainer: {
    marginTop: spacing.xsmall,
    marginBottom: spacing.xsmall,
    marginHorizontal: spacing.xxsmall,
  },
});
