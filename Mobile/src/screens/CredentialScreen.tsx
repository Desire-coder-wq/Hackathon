import { Text } from 'react-native';
import { Card, ScreenShell, ui } from '../components/ScreenShell';

export function CredentialScreen({ onDone }: { onDone: () => void }) {
  return <ScreenShell title="Skill Verified!" subtitle="Your expertise has been validated by the industry." primaryLabel="Explore Matched Gigs" onPrimary={onDone} secondaryLabel="Share Verification">
    <Text style={ui.bigIcon}>🛡️</Text>
    <Card accent><Text style={[ui.teal, ui.center]}>OFFICIAL SKILL CREDENTIAL</Text><Text style={[ui.heading, ui.center, { fontSize: 22, marginTop: 13 }]}>Certified Mobile Money Agent</Text><Text style={[ui.body, ui.center]}>Kato Emmanuel{'\n'}Issued 24 July 2026</Text></Card>
    <Card><Text style={ui.teal}>Technical Verification</Text><Text style={[ui.body, { marginTop: 8 }]}>Credential ID: SP-UG-2026-MMA-00892{'\n'}Evidence hash secured and tamper-evident.</Text></Card>
    <Card><Text style={ui.heading}>SkillProof Guarantee</Text><Text style={ui.body}>This learner completed practical training and passed a proctored assessment.</Text></Card>
  </ScreenShell>;
}
