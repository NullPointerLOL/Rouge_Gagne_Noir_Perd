import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.rougegagnenoirperd.app',
  appName: 'Rouge Gagne Noir Perd',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  },
  android: {
    buildOptions: {
      keystorePath: 'release-key.keystore',
      keystoreAlias: 'key0',
      keystorePassword: 'your-keystore-password',
      storePassword: 'your-store-password'
    }
  }
};

export default config;