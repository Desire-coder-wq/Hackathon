import { Text } from 'react-native';
import { Card, ScreenShell, ui } from '../components/ScreenShell';

export function MarkedCompleteScreen({ onDone }: { onDone: () => void }) {
  return <ScreenShell title="Marked as complete!" subtitle="Waiting for GreenGrid Solutions’s review." primaryLabel="Back to Home" onPrimary={onDone} secondaryLabel="View Submission Details">
    <Text style={[ui.bigIcon, { color: '#ffbd27' }]}>✓</Text>
    <Card accent><Text style={ui.body}>Your Trust Score will be updated once the employer provides their rating.</Text></Card>
  </ScreenShell>;
}
