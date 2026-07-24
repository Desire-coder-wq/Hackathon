import { Text } from 'react-native';
import { Card, ScreenShell, ui } from '../components/ScreenShell';

export function JobsScreen({ onDone }: { onDone: () => void }) {
  return <ScreenShell title="Recommended Gigs" subtitle="Available work matched by your verified skills and location." primaryLabel="Apply for Selected Gig" onPrimary={onDone}>
    {[
      ['Safipay Solutions', 'Agent Support Specialist', 'UGX 15,000/day', 'Kampala Central'],
      ['RapidRoute Logistics', 'Warehouse Inventory Assistant', 'UGX 12,000/day', 'Entebbe Road'],
      ['EduSpark Hub', 'Digital Skills Tutor', 'UGX 20,000/session', 'Makerere'],
    ].map(([company, title, pay, location], index) => <Card key={title} accent={index === 0}><Text style={ui.badge}>✓ VERIFIED MATCH</Text><Text style={[ui.heading, { marginTop: 10 }]}>{title}</Text><Text style={ui.teal}>{pay}</Text><Text style={[ui.body, { marginTop: 7 }]}>{company} · {location}</Text></Card>)}
  </ScreenShell>;
}
