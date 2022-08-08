import { ToastAndroid, Platform } from 'react-native';
import Toast from 'react-native-simple-toast';

export default ToastMessage = text => {
   if (Platform.OS == 'ios') {
      Toast.showWithGravity(`${text}`, Toast.SHORT, Toast.BOTTOM);
   } else {
      ToastAndroid.showWithGravityAndOffset(
         `${text}`,
         ToastAndroid.LONG,
         ToastAndroid.BOTTOM,
         25,
         50,
      );
   }
};
