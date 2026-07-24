import { Image, Pressable, Text, View } from 'react-native';
import { ScreenShell, ui } from '../components/ScreenShell';

export function AssessmentScreen({ onDone }: { onDone: () => void }) {
  return (
    <ScreenShell title="Safety skills check" subtitle="Question 1 of 3 · 33% complete" primaryLabel="Next" onPrimary={onDone}>
      <Text style={ui.heading}>Before operating a heavy power drill, which safety action is most essential?</Text>
      <Image source={require('../../assets/skillproof-work.jpg')} style={{ width: '100%', height: 190, borderRadius: 9, marginVertical: 12 }} />
      {['Wear loose clothing to allow movement.', 'Check for workspace hazards and put on eye protection.', 'Ensure the battery is 100% before starting.'].map((answer, index) => <Pressable key={answer} style={[ui.choice, index === 1 && ui.choiceActive]}><View style={[ui.dot, index === 1 && ui.dotActive]} /><Text style={[ui.body, { flex: 1 }]}>{answer}</Text></Pressable>)}
      <Text style={[ui.body, ui.center]}>Your progress is saved automatically.</Text>
    </ScreenShell>
  );
}
