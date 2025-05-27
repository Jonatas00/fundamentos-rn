import { Slot } from 'expo-router';
import { StatusBar } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function layout() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <StatusBar barStyle={'default'} />
        <Slot />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}