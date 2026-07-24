import { Pressable, Text, View } from 'react-native';
import { Card, Label, ScreenShell, ui } from '../components/ScreenShell';

export function ProfileSetupScreen({ onDone }: { onDone: () => void }) {
  return <ScreenShell title="Career Interests" subtitle="Step 2 of 3 · Select your interests and preferred learning setup." primaryLabel="Save & Continue" onPrimary={onDone}>
    <Label>SELECT YOUR INTERESTS</Label>
    <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 7, marginBottom: 15 }}>
      {['Solar Installation', 'Tailoring', 'Digital Marketing', 'Carpentry', 'Plumbing', 'Catering', 'Automotive'].map((item, i) => <Text key={item} style={[ui.badge, i === 1 && { backgroundColor: '#ffbd27', color: '#fff' }]}>{item}</Text>)}
    </View>
    <Label>PREFERRED LANGUAGE</Label><Card><Text style={ui.body}>English  ▾</Text></Card>
    <Label>DIGITAL LITERACY</Label>
    {['Basic — calls, SMS and browsing', 'Intermediate — apps, Google Docs, spreadsheets', 'Advanced — coding, design and computer software'].map((level, index) => <Pressable style={[ui.choice, index === 1 && ui.choiceActive]} key={level}><View style={[ui.dot, index === 1 && ui.dotActive]} /><Text style={[ui.body, { flex: 1 }]}>{level}</Text></Pressable>)}
    <Card accent><Text style={ui.teal}>✦ Matching Your Future</Text><Text style={[ui.body, { marginTop: 6 }]}>Based on these interests, we’ll suggest workshops in your area and local job opportunities.</Text></Card>
  </ScreenShell>;
}
