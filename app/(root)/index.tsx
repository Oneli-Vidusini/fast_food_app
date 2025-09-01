// import { Image } from 'expo-image';
// import { Platform, StyleSheet } from 'react-native';
//
// import { HelloWave } from '@/components/HelloWave';
// import ParallaxScrollView from '@/components/ParallaxScrollView';
// import { ThemedText } from '@/components/ThemedText';
// import { ThemedView } from '@/components/ThemedView';
//
// export default function HomeScreen() {
//   return (
//     <ParallaxScrollView
//       headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
//       headerImage={
//         <Image
//           source={require('@/assets/images/partial-react-logo.png')}
//           style={styles.reactLogo}
//         />
//       }>
//       <ThemedView style={styles.titleContainer}>
//         <ThemedText type="title">Welcome to my app!</ThemedText>
//         <HelloWave />
//       </ThemedView>
//       <ThemedView style={styles.stepContainer}>
//         <ThemedText type="subtitle">Step 1: Try it</ThemedText>
//         <ThemedText>
//           Edit <ThemedText type="defaultSemiBold">app/(root)/index.tsx</ThemedText> to see changes.
//           Press{' '}
//           <ThemedText type="defaultSemiBold">
//             {Platform.select({
//               ios: 'cmd + d',
//               android: 'cmd + m',
//               web: 'F12',
//             })}
//           </ThemedText>{' '}
//           to open developer tools.
//         </ThemedText>
//       </ThemedView>
//       <ThemedView style={styles.stepContainer}>
//         <ThemedText type="subtitle">Step 2: Explore</ThemedText>
//         <ThemedText>
//           {`Tap the Explore tab to learn more about what's included in this starter app.`}
//         </ThemedText>
//       </ThemedView>
//       <ThemedView style={styles.stepContainer}>
//         <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
//         <ThemedText>
//           {`When you're ready, run `}
//           <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh{' '}
//           <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current{' '}
//           <ThemedText type="defaultSemiBold">app</ThemedText> to{' '}
//           <ThemedText type="defaultSemiBold">app-example</ThemedText>.
//         </ThemedText>
//       </ThemedView>
//     </ParallaxScrollView>
//   );
// }
//
// const styles = StyleSheet.create({
//   titleContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 8,
//   },
//   stepContainer: {
//     gap: 8,
//     marginBottom: 8,
//   },
//   reactLogo: {
//     height: 178,
//     width: 290,
//     bottom: 0,
//     left: 0,
//     position: 'absolute',
//   },
// });


import CartButton from "@/components/CartButton";
import { images, offers } from "@/constants";
import cn from 'clsx';
import { Image } from "expo-image";
import { Fragment } from "react";
import { Animated, FlatList, Pressable, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import ScrollView = Animated.ScrollView;

export default function Index(){
    return (
        <SafeAreaView className="flex-1 bg-white">

            <FlatList
                data={offers}
                renderItem={({ item,index}) => {
                    const isEven: boolean = index % 2 == 0;
                    return(
                        <View>
                            <Pressable
                                className={cn("offer-card", isEven ? 'flex-row-reverse' : 'flex-row')}
                                style={{backgroundColor: item.color}}
                                android_ripple={{color:"#fffff22"}}
                            >
                                {({pressed}) => (
                                    <Fragment>
                                        <View className={"h-full w-1/2"}>
                                            <Image source={item.image} className={"size-full"} resizeMode={"contain"}/>
                                        </View>

                                        <View className={cn("offer-card__info", isEven ? 'pl10' : 'pr-10')}>
                                            <Text className="h1-bold text-white loading-tight">
                                                {item.title}
                                            </Text>
                                            <Image
                                                source={images.arrowRight}
                                                className="size-10"
                                                resizeMode="contain"
                                                tintColor="#ffffff"
                                            />
                                        </View>
                                    </Fragment>
                                )}
                            </Pressable>
                        </View>
                    )
                }}
                contentContainerClassName="pb-28 px-5"
                ListHeaderComponent={() => (
                    <View className="flex-between flex-row w-full my-5">
                        <View className="flex-start">
                            <Text className="small-bold text-primary">DELIVER TO </Text>
                            <TouchableOpacity className="flex-center flex-row gap-x-1 mt-0.5">
                                <Text className="paragraph-bold text-dark-100">Croatia</Text>
                                <Image source={images.arrowDown} className="size-3" resizeMode="contain" />
                            </TouchableOpacity>
                        </View>

                        <CartButton/>
                    </View>
                )}
            />

        </SafeAreaView>
    );
}



