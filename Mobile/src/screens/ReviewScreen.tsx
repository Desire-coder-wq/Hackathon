import { Image, Text, TextInput } from 'react-native';
import { Card, Label, ScreenShell, ui } from '../components/ScreenShell';

export function ReviewScreen({ onDone }: { onDone: () => void }) {
  return <ScreenShell title="Review Submission" subtitle="Verification queue · ID pending" primaryLabel="Pass Task" onPrimary={onDone} secondaryLabel="Needs Retry">
    <Card><Text style={ui.heading}>Sanyu Moses</Text><Text style={ui.body}>Submitted today · 14:20</Text></Card>
    <Label>SUBMITTED PROOF</Label><Image source={require('../../assets/skillproof-work.jpg')} style={{ width: '100%', height: 260, borderRadius: 9, marginBottom: 12 }} />
    <Card><Text style={ui.teal}>Requirements</Text><Text style={[ui.body, { marginTop: 8 }]}>□ Clear facial visibility{'\n'}□ ID details legible{'\n'}□ Current date / live check</Text></Card>
    <Label>MENTOR FEEDBACK NOTE</Label><TextInput multiline style={[ui.input, { height: 100 }]} placeholder="Provide constructive feedback for the learner…" />
  </ScreenShell>;
}
