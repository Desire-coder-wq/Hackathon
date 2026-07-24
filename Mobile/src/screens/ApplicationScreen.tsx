import { Text } from 'react-native';
import { Card, ScreenShell, ui } from '../components/ScreenShell';

export function ApplicationScreen({ onDone }: { onDone: () => void }) {
  return <ScreenShell title="Confirm Application" subtitle="Review your profile details and selected credential before submitting." primaryLabel="Submit Application" onPrimary={onDone} secondaryLabel="Cancel">
    <Card><Text style={ui.heading}>Kato Samuel</Text><Text style={ui.body}>Kampala, Uganda · Identity verified</Text></Card>
    <Card><Text style={ui.teal}>CREDENTIAL ATTACHED</Text><Text style={[ui.heading, { marginTop: 9 }]}>Certified Mobile Money Agent</Text><Text style={ui.body}>Validated by SkillProof Certification Board · Verification level 3</Text></Card>
    <Card><Text style={ui.body}>Your verified credentials will be shared with the employer. SkillProof ensures your data is only used for this application.</Text></Card>
  </ScreenShell>;
}
