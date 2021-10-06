import React, { FC } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { globalStyles } from '../global.styles';

interface ListItemProps {
  date: Date;
  taskName: string;
}

const ListItem: FC<ListItemProps> = ({ date, taskName }) => {
  const today = new Date().getDay();
  return (
    <View style={styles.listItem}>
      <Text style={styles.text}>{taskName}</Text>
      <Text style={styles.date}>
        {date.getDay() === today ? 'Today' : date.toDateString()}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    flex: 1,
    flexDirection: 'row',
    padding: 15,
    margin: 8,
    ...globalStyles.shadowButton,
  },
  text: {
    flex: 1,
    textAlign: 'left',
  },
  date: {
    flex: 1,
    textAlign: 'right',
  },
});

export default ListItem;
