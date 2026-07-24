import { Image, Text } from 'react-native';
import { Card, ScreenShell, ui } from '../components/ScreenShell';

export function ProfileScreen({ onDone }: { onDone: () => void }) {
  return <ScreenShell title="Sarah N." subtitle="Professional Tailor & Textile Artisan · Kampala" primaryLabel="Offer Gig" onPrimary={onDone} secondaryLabel="Contact Sarah">
    <Image source={require('../../assets/skillproof-work.jpg')} style={{ width: 110, height: 110, alignSelf: 'center', borderRadius: 55, marginBottom: 16 }} />
    <Text style={[ui.badge, { alignSelf: 'center' }]}>✓ ID VERIFIED · TRUST SCORE 98</Text>
    <Text style={[ui.heading, { marginTop: 20 }]}>Top Skills</Text>
    {['Industrial Tailoring', 'Material Sourcing', 'Advanced Pattern Making'].map((skill) => <Card key={skill}><Text style={ui.heading}>{skill}</Text><Text style={ui.body}>Validated through practical SkillProof evidence</Text></Card>)}
    <Card accent><Text style={ui.teal}>Mentor Review</Text><Text style={[ui.body, { marginTop: 8, fontStyle: 'italic' }]}>“Sarah consistently follows quality controls and demonstrates deep understanding of material integrity.”</Text></Card>
  </ScreenShell>;
}
