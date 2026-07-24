import { Text, TextInput, View } from 'react-native';
import { Card, Label, ScreenShell, ui } from '../components/ScreenShell';

export function CompleteGigScreen({ onDone }: { onDone: () => void }) {
  return <ScreenShell title="Mark this gig as complete" subtitle="Let GreenGrid Solutions know you’ve finished the work." primaryLabel="Mark as Complete" onPrimary={onDone} secondaryLabel="Message Employer">
    <Card><Text style={ui.heading}>Solar Panel Installation</Text><Text style={ui.body}>GreenGrid Solutions · Kampala, Uganda</Text></Card>
    <Label>ADD A NOTE FOR THE EMPLOYER</Label><TextInput multiline style={[ui.input, { height: 100 }]} placeholder="e.g. Completed 12 panels, tested connectivity…" />
    <Label>PROOF OF WORK</Label><View style={{ height: 150, borderWidth: 1, borderStyle: 'dashed', borderColor: '#b8c2c1', borderRadius: 9, alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}><Text style={ui.bigIcon}>☁</Text><Text style={ui.teal}>Tap to upload photos of your work</Text><Text style={ui.body}>Max size 10MB per file</Text></View>
  </ScreenShell>;
}
