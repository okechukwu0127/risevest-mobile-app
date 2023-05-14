import React from 'react';
import {useTheme} from '@react-navigation/native';
import {StyleSheet, View, ViewStyle, FlatList} from 'react-native';

import EmptyList from './emptyList';

interface IProps {
  data: any[] | [];
  onRefresh?: any;
  onEndReached: any;
  renderItem: any;
  refreshing: boolean;
  showsVerticalScrollIndicator?: boolean;
  keyExtractor: (_: any, index: number) => any;
  emptyListText?: string;
  listHeader?: any;
  style?: ViewStyle;
  horizontal?: boolean;
}

export default function SJFlatList(props: IProps) {
  const {
    data,
    onRefresh,
    onEndReached,
    refreshing,
    keyExtractor,
    emptyListText,
    renderItem,
    //showsVerticalScrollIndicator,
    listHeader,
    horizontal = false,
    style,
    ...otherProps
  } = props;

  const theme = useTheme();
  const styles = useStyles({theme});

  return (
    <FlatList
      horizontal={horizontal}
      data={data}
      style={[styles.container, {...style}]}
      refreshing={refreshing}
      onRefresh={onRefresh}
      onEndReached={onEndReached}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      //entering={FadeIn.duration(300)}
      // showsVerticalScrollIndicator={showsVerticalScrollIndicator || false}
      ListEmptyComponent={<EmptyList subTitle={emptyListText} />}
      ListHeaderComponent={listHeader || <View style={styles.h10} />}
      {...otherProps}
    />
  );
}

const useStyles = (props: {theme: any}) =>
  StyleSheet.create({
    container: {
      // flex: 1,
      backgroundColor: props.theme.colors.background,
    },
    h10: {
      height: 10,
    },
  });
