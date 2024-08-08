import { ClerkProvider } from "@clerk/clerk-expo";
import { CreateProvider } from "./src/Context/Context";
import Gasto from "./src/Page/Gasto";
import * as SecureStore from 'expo-secure-store'
import { SignedIn, SignedOut, useUser } from '@clerk/clerk-expo'
import SignUpScreen from "./src/Page/Login";
import { RootNavigator } from "./src/Stack";


export default function App() {

  const tokenCache = {
    async getToken(key) {
      try {
        const item = await SecureStore.getItemAsync(key)
        if (item) {
          console.log(`${key} was used 🔐 \n`)
        } else {
          console.log('No values stored under key: ' + key)
        }
        return item
      } catch (error) {
        console.error('SecureStore get item error: ', error)
        await SecureStore.deleteItemAsync(key)
        return null
      }
    },
    async saveToken(key, value) {
      try {
        return SecureStore.setItemAsync(key, value)
      } catch (err) {
        return
      }
    },
  }

  return (
    <ClerkProvider tokenCache={tokenCache} publishableKey={process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY}>
      <SignedIn>
        <CreateProvider>
          <RootNavigator />
        </CreateProvider>
      </SignedIn>
      <SignedOut>
        <SignUpScreen />
      </SignedOut>
    </ClerkProvider>
  );
}


