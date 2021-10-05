import React, { FC } from 'react';
import { View, Text, StyleSheet } from 'react-native';

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
    backgroundColor: 'white',
    margin: 8,
    borderRadius: 5,
    shadowColor: 'black',
    shadowOpacity: 0.3,
    shadowRadius: 5,
    shadowOffset: { height: 3, width: 0.3 },
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
