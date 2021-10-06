import React, { FC } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { globalStyles } from '../global.styles';

interface ConfirmDateProps {
  date: Date;
  setDate: (date: Date) => void;
  setOpen: (open: boolean) => void;
  onConfirmDate: () => void;
}

const ConfirmDate: FC<ConfirmDateProps> = ({
  date,
  setDate,
  setOpen,
  onConfirmDate,
}) => {
  return (
    <View>
      <View>
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode="date"
          display="spinner"
          minimumDate={new Date()}
          onChange={(e, selectedDate) => setDate(selectedDate!)}
        />
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button title="Confirm" onPress={onConfirmDate} color="black" />
        </View>
        <View style={styles.button}>
          <Button title="Cancel" onPress={() => setOpen(false)} color="black" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 6,
    margin: 10,
    ...globalStyles.shadowButton,
  },
  buttonContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default ConfirmDate;
