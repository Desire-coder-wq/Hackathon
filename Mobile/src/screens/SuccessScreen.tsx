import { Image, Text } from 'react-native';
import { Card, ScreenShell, ui } from '../components/ScreenShell';

export function SuccessScreen({ onDone }: { onDone: () => void }) {
  return <ScreenShell title="You’re all set!" subtitle="Your contribution helps build a stronger Uganda. Get ready to showcase your skills!" primaryLabel="Start Work" onPrimary={onDone} secondaryLabel="Message Employer">
    <Text style={ui.bigIcon}>✅</Text>
    <Card><Text style={ui.teal}>START DATE & TIME</Text><Text style={[ui.heading, { marginTop: 8 }]}>Monday, Oct 24 · 08:00 AM–05:00 PM</Text></Card>
    <Card><Text style={ui.teal}>LOCATION</Text><Text style={[ui.heading, { marginTop: 8 }]}>Industrial Area, Kampala</Text></Card>
    <Image source={require('../../assets/skillproof-work.jpg')} style={{ width: '100%', height: 150, borderRadius: 9 }} />
  </ScreenShell>;
}
