import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  imageContainer: {
    alignSelf: 'stretch',
    height: 150,
    width: '100%',
  },
  listContainer: {
    paddingHorizontal: 16,
  },
  header: {
    alignSelf: 'stretch',
    backgroundColor: 'rgba(1,1,1,.5)',
    overflow: 'hidden',
    paddingHorizontal: 16,
    paddingVertical: 20,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  listItem: {
    borderRadius: 15,
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 4,
    },
    shadowOpacity: 0.3,
    height: 250,
    backgroundColor: 'white',
  },
  fotter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 16,
    paddingHorizontal: 16,
  },
  button: {
    height: 54,
    alignSelf: 'stretch',
    paddingHorizontal: 40,
    borderRadius: 16,
    backgroundColor: '#474a47',
    justifyContent: 'center',
    alignItems: 'center',
  },
  shimmerTxt: {width: 40, height: 20},
  buyTxt: {color: 'white'},
});
