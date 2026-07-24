import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { Image, Platform, Pressable, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';

export function LandingScreen({ onStart, onLogin }: { onStart: () => void; onLogin: () => void }) {
  return <LinearGradient colors={['#d9f2ee', '#fbf8f5', '#fff2d3']} locations={[0, .48, 1]} style={styles.gradient}>
    <SafeAreaView style={styles.safe}>
      <View style={styles.orbOne} /><View style={styles.orbTwo} />
      <View style={styles.header}><Image source={require('../../assets/skillproof-logo.png')} style={styles.logo} /><Text style={styles.brand}>SkillProof</Text></View>
      <View style={styles.content}>
        <View style={styles.pill}><Ionicons name="shield-checkmark" size={15} color="#087f83" /><Text style={styles.pillText}>UGANDA'S VERIFIED SKILLS NETWORK</Text></View>
        <Text style={styles.title}>Prove your skills.{'\n'}<Text style={styles.teal}>Unlock opportunity.</Text></Text>
        <Text style={styles.subtitle}>Learn practical skills, prove what you can do, and connect directly with trusted employers.</Text>
        {[
          ['school-outline', 'Learn', 'Bite-sized, low-data trade lessons', '#ffbd27'],
          ['shield-checkmark-outline', 'Prove', 'Practical assessments that build trust', '#9a5538'],
          ['briefcase-outline', 'Get Hired', 'Matched gigs and real local income', '#087f83'],
        ].map(([icon, title, body, color]) => <View style={styles.feature} key={title}><View style={[styles.icon, { backgroundColor: color }]}><Ionicons name={icon as never} size={22} color="#fff" /></View><View style={{ flex: 1 }}><Text style={styles.featureTitle}>{title}</Text><Text style={styles.featureBody}>{body}</Text></View><Ionicons name="chevron-forward" size={19} color="#879291" /></View>)}
        <Pressable style={styles.button} onPress={onStart}><Text style={styles.buttonText}>Get Started</Text><Ionicons name="arrow-forward" size={18} color="#fff" /></Pressable>
        <Pressable onPress={onLogin}><Text style={styles.login}>Already have an account? <Text style={styles.teal}>Log in</Text></Text></Pressable>
        <View style={styles.trust}><Ionicons name="shield-checkmark-outline" size={17} color="#087f83" /><Text style={styles.trustText}>Tamper-evident credentials</Text><Ionicons name="cellular-outline" size={17} color="#087f83" /><Text style={styles.trustText}>Low-data ready</Text></View>
      </View>
    </SafeAreaView>
  </LinearGradient>;
}

const styles = StyleSheet.create({
  gradient: { flex: 1 },
  safe: { flex: 1, paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 },
  orbOne: { position: 'absolute', width: 210, height: 210, borderRadius: 105, backgroundColor: 'rgba(8,127,131,.09)', top: 75, right: -90 },
  orbTwo: { position: 'absolute', width: 170, height: 170, borderRadius: 85, backgroundColor: 'rgba(255,189,39,.13)', bottom: 20, left: -75 },
  header: { height: 72, paddingHorizontal: 22, flexDirection: 'row', alignItems: 'center' },
  logo: { width: 42, height: 42, borderRadius: 12, marginRight: 10 },
  brand: { color: '#075d61', fontWeight: '900', fontSize: 22 },
  content: { flex: 1, paddingHorizontal: 22, justifyContent: 'center' },
  pill: { alignSelf: 'flex-start', flexDirection: 'row', gap: 7, alignItems: 'center', borderRadius: 18, backgroundColor: 'rgba(255,255,255,.72)', paddingHorizontal: 11, paddingVertical: 7, marginBottom: 18 },
  pillText: { color: '#087f83', fontSize: 9, letterSpacing: .7, fontWeight: '900' },
  title: { color: '#171d1e', fontSize: 37, lineHeight: 43, fontWeight: '900' },
  teal: { color: '#087f83', fontWeight: '900' },
  subtitle: { color: '#586466', fontSize: 15, lineHeight: 22, marginTop: 12, marginBottom: 23 },
  feature: { flexDirection: 'row', alignItems: 'center', padding: 13, backgroundColor: 'rgba(255,255,255,.8)', borderRadius: 13, marginBottom: 10, shadowColor: '#164b4d', shadowOpacity: .06, shadowRadius: 10 },
  icon: { width: 43, height: 43, borderRadius: 12, justifyContent: 'center', alignItems: 'center', marginRight: 13 },
  featureTitle: { color: '#1d292a', fontSize: 15, fontWeight: '900' },
  featureBody: { color: '#6d7778', fontSize: 11, marginTop: 3 },
  button: { backgroundColor: '#ffbd27', borderRadius: 11, padding: 16, alignItems: 'center', justifyContent: 'center', flexDirection: 'row', gap: 9, marginTop: 12, shadowColor: '#b47a00', shadowOpacity: .22, shadowRadius: 9, shadowOffset: { width: 0, height: 5 } },
  buttonText: { color: '#fff', fontWeight: '900', fontSize: 15 },
  login: { textAlign: 'center', color: '#616b6d', marginTop: 20 },
  trust: { justifyContent: 'center', flexDirection: 'row', alignItems: 'center', gap: 6, marginTop: 22 },
  trustText: { color: '#728081', fontSize: 9, marginRight: 8 },
});
