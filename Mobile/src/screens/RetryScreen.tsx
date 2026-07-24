import { Text } from 'react-native';
import { Card, ScreenShell, ui } from '../components/ScreenShell';

export function RetryScreen({ onDone }: { onDone: () => void }) {
  return <ScreenShell title="Needs a quick fix!" subtitle="You’re almost there. A small adjustment is needed to verify your progress." primaryLabel="Retry Task" onPrimary={onDone} secondaryLabel="View Instructions">
    <Text style={ui.bigIcon}>🔧</Text>
    <Card><Text style={ui.teal}>Mentor’s feedback</Text><Text style={[ui.body, { marginTop: 8, fontStyle: 'italic' }]}>“The photo was a bit blurry. Please ensure the dates are clearly visible.”</Text></Card>
    <Card accent><Text style={ui.warning}>ACTION REQUIRED</Text><Text style={[ui.heading, { marginTop: 10 }]}>Welding Safety Certification</Text><Text style={ui.body}>Module 4 · Step 3 of 4 · 85% complete</Text></Card>
    <Card><Text style={ui.teal}>Quick tips for success</Text><Text style={[ui.body, { marginTop: 8 }]}>✓ Clean your camera lens{'\n'}✓ Use natural daylight or a bright indoor light</Text></Card>
  </ScreenShell>;
}
