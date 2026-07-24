import { Text, TextInput } from 'react-native';
import { Card, Label, ScreenShell, ui } from '../components/ScreenShell';

export function RatingScreen({ onDone }: { onDone: () => void }) {
  return <ScreenShell title="Rate the Talent" subtitle="Your feedback helps build the learner’s Trust Score and ensures high-quality skill validation." primaryLabel="Submit Rating" onPrimary={onDone}>
    <Card><Text style={ui.heading}>Kato Moses</Text><Text style={ui.body}>Junior Web Developer · Work completed today</Text></Card>
    <Label>OVERALL PERFORMANCE</Label><Text style={[ui.bigIcon, { color: '#e8a62c' }]}>☆ ☆ ☆ ☆ ☆</Text>
    <Label>BRIEF REVIEW</Label><TextInput multiline style={[ui.input, { height: 130 }]} placeholder="Tell us about the learner’s work quality, punctuality and communication…" />
    <Card accent><Text style={ui.body}>Your rating contributes to the learner’s Trust Score, helping them unlock more advanced skilling tracks.</Text></Card>
  </ScreenShell>;
}
