import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { ApplicationScreen } from './src/screens/ApplicationScreen';
import { AssessmentScreen } from './src/screens/AssessmentScreen';
import { AuthScreen } from './src/screens/AuthScreen';
import { CompleteGigScreen } from './src/screens/CompleteGigScreen';
import { CredentialScreen } from './src/screens/CredentialScreen';
import { JobsScreen } from './src/screens/JobsScreen';
import { LandingScreen } from './src/screens/LandingScreen';
import { MarkedCompleteScreen } from './src/screens/MarkedCompleteScreen';
import { ProfileScreen } from './src/screens/ProfileScreen';
import { ProfileSetupScreen } from './src/screens/ProfileSetupScreen';
import { RatingScreen } from './src/screens/RatingScreen';
import { RetryScreen } from './src/screens/RetryScreen';
import { ReviewScreen } from './src/screens/ReviewScreen';
import { SuccessScreen } from './src/screens/SuccessScreen';
import { BackNavigationProvider } from './src/navigation/BackNavigation';

const screens = [
  ProfileSetupScreen,
  AssessmentScreen,
  RetryScreen,
  ReviewScreen,
  CredentialScreen,
  JobsScreen,
  ApplicationScreen,
  SuccessScreen,
  CompleteGigScreen,
  MarkedCompleteScreen,
  ProfileScreen,
  RatingScreen,
];

const labels = ['Profile Setup', 'Assessment', 'Retry', 'Mentor', 'Credential', 'Gigs', 'Apply', 'Success', 'Complete Gig', 'Completed', 'Profile', 'Rate'];

export default function App() {
  const [started, setStarted] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);
  const [index, setIndex] = useState(0);
  const next = () => setIndex((current) => (current + 1) % screens.length);

  if (!started) {
    return <LandingScreen onStart={() => setStarted(true)} onLogin={() => setStarted(true)} />;
  }

  if (!authenticated) {
    return (
      <View style={styles.app}>
        <StatusBar style="dark" />
        <AuthScreen
          onDone={(goal) => {
            setIndex(goal === 'learn' ? 0 : 5);
            setAuthenticated(true);
          }}
        />
      </View>
    );
  }

  const CurrentScreen = screens[index];

  return (
    <View style={styles.app}>
      <StatusBar style="dark" />
      <BackNavigationProvider onBack={() => setIndex((index + screens.length - 1) % screens.length)}>
        <CurrentScreen onDone={next} />
      </BackNavigationProvider>
      <View style={styles.demoNav}>
        <Pressable onPress={() => setIndex((index + screens.length - 1) % screens.length)} style={styles.navButton}>
          <Text style={styles.navButtonText}>{'<'}</Text>
        </Pressable>
        <Pressable onPress={() => { setAuthenticated(false); setStarted(false); }}>
          <Text style={styles.demoText}>Demo {index + 1}/{screens.length} - {labels[index]} - Log out</Text>
        </Pressable>
        <Pressable onPress={next} style={styles.navButton}>
          <Text style={styles.navButtonText}>{'>'}</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  app: { flex: 1 },
  demoNav: {
    position: 'absolute',
    right: 10,
    bottom: 10,
    backgroundColor: '#17383a',
    borderRadius: 22,
    padding: 5,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 8,
  },
  navButton: { width: 34, height: 34, borderRadius: 17, backgroundColor: '#087f83', alignItems: 'center', justifyContent: 'center' },
  navButtonText: { color: '#fff', fontSize: 20, fontWeight: '900' },
  demoText: { color: '#fff', fontSize: 10, fontWeight: '700', marginHorizontal: 9 },
});
