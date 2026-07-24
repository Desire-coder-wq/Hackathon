import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { Card, Label, ScreenShell, ui } from '../components/ScreenShell';

export function AuthScreen({ onDone }: { onDone: (goal: 'learn' | 'hire') => void }) {
  const [goal, setGoal] = useState<'learn' | 'hire'>('learn');
  const [mode, setMode] = useState<'signup' | 'login'>('signup');
  const [showPassword, setShowPassword] = useState(false);
  return (
    <ScreenShell
      title={mode === 'signup' ? 'Start your journey' : 'Welcome back'}
      subtitle={mode === 'signup' ? 'Join the community of skilled professionals in Uganda.' : 'Sign in to continue learning or find verified talent.'}
      primaryLabel={mode === 'signup' ? 'Create Account' : 'Sign In'}
      onPrimary={() => onDone(goal)}
      secondaryLabel={mode === 'signup' ? 'Already have an account? Sign In' : 'New to SkillProof? Create Account'}
      onSecondary={() => setMode(mode === 'signup' ? 'login' : 'signup')}
    >
      <Label>WHAT IS YOUR GOAL?</Label>
      <Pressable style={[ui.choice, goal === 'learn' && ui.choiceActive]} onPress={() => setGoal('learn')}><View style={[ui.dot, goal === 'learn' && ui.dotActive]} /><View><Text style={ui.heading}>I want to learn</Text><Text style={ui.body}>Master new skills and get certified</Text></View></Pressable>
      <Pressable style={[ui.choice, goal === 'hire' && ui.choiceActive]} onPress={() => setGoal('hire')}><View style={[ui.dot, goal === 'hire' && ui.dotActive]} /><View><Text style={ui.heading}>I want to hire</Text><Text style={ui.body}>Find verified talent for your projects</Text></View></Pressable>
      {mode === 'signup' ? <><Label>FULL NAME</Label><TextInput style={ui.input} placeholder="e.g. Kato Samuel" /></> : null}
      <Label>EMAIL ADDRESS</Label>
      <View style={styles.inputRow}><Ionicons name="mail-outline" size={18} color="#087f83" /><TextInput style={styles.field} placeholder="name@example.com" keyboardType="email-address" autoCapitalize="none" /></View>
      <Label>PHONE NUMBER</Label>
      <View style={styles.inputRow}><Ionicons name="call-outline" size={18} color="#087f83" /><TextInput style={styles.field} placeholder="+256 700 000 000" keyboardType="phone-pad" /></View>
      <Label>{mode === 'signup' ? 'CREATE PASSWORD' : 'PASSWORD'}</Label>
      <View style={styles.inputRow}><Ionicons name="lock-closed-outline" size={18} color="#087f83" /><TextInput style={styles.field} placeholder="Minimum 8 characters" secureTextEntry={!showPassword} /><Pressable onPress={() => setShowPassword(!showPassword)} hitSlop={12}><Ionicons name={showPassword ? 'eye-off-outline' : 'eye-outline'} size={21} color="#637173" /></Pressable></View>
      <Card><Text style={ui.body}>Low-data mode is enabled by default. You can change this in Profile.</Text></Card>
    </ScreenShell>
  );
}

const styles = StyleSheet.create({
  inputRow: { minHeight: 49, borderWidth: 1, borderColor: '#ddd8d0', borderRadius: 8, backgroundColor: '#fff', paddingHorizontal: 12, marginBottom: 13, flexDirection: 'row', alignItems: 'center', gap: 9 },
  field: { flex: 1, color: '#263638', paddingVertical: 12 },
});
