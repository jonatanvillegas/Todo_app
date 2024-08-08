// App.js
import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import { useOAuth } from '@clerk/clerk-expo';
import { StatusBar } from 'expo-status-bar';
import { AntDesign } from '@expo/vector-icons';

export default function Login() {
  const GoogleSing = useOAuth({ strategy: 'oauth_google' });

  async function Google() {
    try {
      const oAuth = await GoogleSing.startOAuthFlow();
      if (oAuth.authSessionResult?.type === 'success') {
        if (oAuth.setActive) {
          await oAuth.setActive({ session: oAuth.createdSessionId });
        }
      } else {
        console.log('No funcionó');
      }
    } catch (error) {
      console.error(error);
    }
  }

  WebBrowser.maybeCompleteAuthSession();

  useEffect(() => {
    WebBrowser.warmUpAsync();
    return () => {
      WebBrowser.coolDownAsync();
    };
  }, []);

  return (
    <View className="flex-1 bg-white">
      <StatusBar style="light" />
      <Image
        className="absolute h-full w-full"
        source={require('../../assets/background.png')}
      />
      <View className="absolute flex-row justify-around w-full ">
        <Image className="h-[255px] w-[90px]" source={require('../../assets/light.png')} />
        <Image className="h-[180px] w-[60px]" source={require('../../assets/light.png')} />
      </View>
      <View className="flex-1 justify-center items-center absolute top-72 left-20">
        <Text className="font-bold text-2xl text-white tracking-wider mb-10">Login</Text>
        <TouchableOpacity
          className="flex-row justify-around items-center w-3/4 bg-sky-700 p-3 rounded-2xl"
          onPress={Google}
        >
          <AntDesign name="googleplus" size={24} color="white" />
          <Text className="text-xl text-center font-bold text-white ml-2">Login Google</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
