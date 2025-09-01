import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import {SplashScreen, Stack} from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import './global.css';

// import { useColorScheme } from '@/hooks/useColorScheme';
import {useEffect} from 'react';

export default function RootLayout() {
    const [fontLoaded,error] =useFonts({
        "Quicksand-Bold": require('../assets/fonts/Quicksand-Bold.ttf'),
        "Quicksand-Light": require('../assets/fonts/Quicksand-Light.ttf'),
        "Quicksand-Medium": require('../assets/fonts/Quicksand-Medium.ttf'),
        "Quicksand-Regular": require('../assets/fonts/Quicksand-Regular.ttf'),
        "Quicksand-SemiBold": require('../assets/fonts/Quicksand-SemiBold.ttf'),
    });

    useEffect(() => {
        if(error) throw error;
        if (fontLoaded) SplashScreen.hideAsync()
    }, [fontLoaded,error]);

    return <Stack screenOptions={{headerShown: false}}/>;

  // const colorScheme = useColorScheme();
  // const [loaded] = useFonts({
  //   SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  // });
  //
  // if (!loaded) {
  //   // Async font loading only occurs in development.
  //   return null;
  // }
  //
  // return (
  //   <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
  //     <Stack>
  //       <Stack.Screen name="(root)" options={{ headerShown: false }} />
  //       <Stack.Screen name="+not-found" />
  //     </Stack>
  //     <StatusBar style="auto" />
  //   </ThemeProvider>
  // );


}
