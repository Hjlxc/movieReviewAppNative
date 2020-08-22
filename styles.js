import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  horizontalCentered: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  virticalCentered: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  centered: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  horizontalContainer: {
    marginRight: 5,
  },
  virticalContainer: {
    marginBottom: 5,
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  divider: {
    borderWidth: 1,
    borderColor: 'grey',
    marginVertical: 10,
    width: '100%',
  },
  bold: {fontWeight: 'bold'},
});

export default styles;
