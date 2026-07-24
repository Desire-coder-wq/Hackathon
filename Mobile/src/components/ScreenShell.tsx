import { ReactNode } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Image, Platform, Pressable, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';
import { useBackNavigation } from '../navigation/BackNavigation';

export function ScreenShell({
  title,
  subtitle,
  children,
  primaryLabel = 'Continue',
  onPrimary,
  secondaryLabel,
  onSecondary,
}: {
  title: string;
  subtitle?: string;
  children: ReactNode;
  primaryLabel?: string;
  onPrimary?: () => void;
  secondaryLabel?: string;
  onSecondary?: () => void;
}) {
  const onBack = useBackNavigation();
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.header}>
        {onBack ? <Pressable onPress={onBack} style={styles.back} hitSlop={10}><Ionicons name="arrow-back" size={22} color="#075d61" /></Pressable> : null}
        <View style={styles.brandRow}><Image source={require('../../assets/skillproof-logo.png')} style={styles.logo} /><Text style={styles.brand}>SkillProof</Text></View>
        <Ionicons name="cellular-outline" size={20} color="#075d61" />
      </View>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>{title}</Text>
        {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
        {children}
        {onPrimary ? <Pressable style={styles.primary} onPress={onPrimary}><Text style={styles.primaryText}>{primaryLabel}  →</Text></Pressable> : null}
        {secondaryLabel ? <Pressable style={styles.secondary} onPress={onSecondary}><Text style={styles.secondaryText}>{secondaryLabel}</Text></Pressable> : null}
      </ScrollView>
    </SafeAreaView>
  );
}

export function Card({ children, accent }: { children: ReactNode; accent?: boolean }) {
  return <View style={[styles.card, accent && styles.cardAccent]}>{children}</View>;
}

export function Label({ children }: { children: ReactNode }) {
  return <Text style={styles.label}>{children}</Text>;
}

export const ui = StyleSheet.create({
  heading: { color: '#17383a', fontSize: 17, fontWeight: '800', marginBottom: 8 },
  body: { color: '#647174', fontSize: 13, lineHeight: 19 },
  teal: { color: '#087f83', fontWeight: '800' },
  input: { borderWidth: 1, borderColor: '#ddd8d0', borderRadius: 7, backgroundColor: '#fff', padding: 13, marginBottom: 13, color: '#263638' },
  choice: { borderWidth: 1, borderColor: '#d9d4cd', borderRadius: 8, backgroundColor: '#fff', padding: 14, marginBottom: 10, flexDirection: 'row', alignItems: 'center' },
  choiceActive: { borderColor: '#087f83', backgroundColor: '#edf8f7' },
  dot: { width: 18, height: 18, borderRadius: 9, borderWidth: 2, borderColor: '#9ca5a5', marginRight: 11 },
  dotActive: { borderColor: '#087f83', backgroundColor: '#087f83' },
  badge: { alignSelf: 'flex-start', backgroundColor: '#e4f3f0', color: '#087f83', paddingHorizontal: 9, paddingVertical: 5, borderRadius: 5, fontSize: 10, fontWeight: '800' },
  warning: { alignSelf: 'flex-start', backgroundColor: '#ffe8e3', color: '#b84d45', paddingHorizontal: 9, paddingVertical: 5, borderRadius: 5, fontSize: 10, fontWeight: '800' },
  bigIcon: { fontSize: 48, textAlign: 'center', marginVertical: 14 },
  center: { textAlign: 'center' },
  row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
});

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#faf8f5', paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 },
  header: { height: 66, paddingHorizontal: 16, backgroundColor: '#fff', borderBottomWidth: 1, borderBottomColor: '#e8e2da', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  back: { width: 34, height: 34, borderRadius: 17, backgroundColor: '#e9f6f4', alignItems: 'center', justifyContent: 'center', marginRight: 8 },
  brand: { color: '#075d61', fontSize: 20, fontWeight: '900' },
  brandRow: { flexDirection: 'row', alignItems: 'center' },
  logo: { width: 32, height: 32, borderRadius: 9, marginRight: 8 },
  content: { padding: 18, paddingBottom: 42 },
  title: { color: '#18383a', fontSize: 24, lineHeight: 29, fontWeight: '900', marginTop: 8 },
  subtitle: { color: '#667476', fontSize: 13, lineHeight: 19, marginTop: 6, marginBottom: 18 },
  card: { backgroundColor: '#fff', borderWidth: 1, borderColor: '#e1dcd5', borderRadius: 10, padding: 14, marginBottom: 13 },
  cardAccent: { backgroundColor: '#edf8f7', borderColor: '#8fc9c6' },
  label: { color: '#425355', fontSize: 10, fontWeight: '800', marginBottom: 6, marginTop: 5, letterSpacing: 0.3 },
  primary: { backgroundColor: '#ffbd27', borderRadius: 7, padding: 15, alignItems: 'center', marginTop: 8 },
  primaryText: { color: '#fff', fontSize: 13, fontWeight: '900' },
  secondary: { borderWidth: 1, borderColor: '#087f83', borderRadius: 7, padding: 14, alignItems: 'center', marginTop: 10 },
  secondaryText: { color: '#087f83', fontSize: 13, fontWeight: '800' },
});
