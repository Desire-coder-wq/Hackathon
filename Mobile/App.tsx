import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Image,
  Platform,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

declare const process: {
  env: { EXPO_PUBLIC_API_URL?: string };
};

type Gig = {
  id: string;
  title: string;
  description: string;
  location?: string;
  pay?: string;
  skillTrack?: { title: string };
  postedBy?: { employerProfile?: { businessName: string } };
};

const languages = ['English', 'Luganda', 'Kiswahili', 'Runyankole', 'Acholi'] as const;
type Language = (typeof languages)[number];

const copy: Record<Language, { opportunities: string; title: string; subtitle: string; details: string }> = {
  English: {
    opportunities: 'VERIFIED OPPORTUNITIES',
    title: 'Recommended Gigs',
    subtitle: 'Work matched to skills you have already proved.',
    details: 'View Details',
  },
  Luganda: {
    opportunities: 'EMIRIMU EGYAKAKASIBWA',
    title: 'Emirimu Egikugwanira',
    subtitle: 'Emirimu egikwatagana n’obukugu bwo obwakakasibwa.',
    details: 'Laba Ebisingawo',
  },
  Kiswahili: {
    opportunities: 'FURSA ZILIZOTHIBITISHWA',
    title: 'Kazi Zinazopendekezwa',
    subtitle: 'Kazi zinazolingana na ujuzi uliothibitisha.',
    details: 'Tazama Maelezo',
  },
  Runyankole: {
    opportunities: 'EMIRIMO EHAMIRWE',
    title: 'Emirimo Erikukuhikire',
    subtitle: 'Emirimo erikuhika aha bukugu bwawe obuhamirwe.',
    details: 'Reeba Ebindi',
  },
  Acholi: {
    opportunities: 'TIC MA KI MOKO',
    title: 'Tic Ma Omyero Piri',
    subtitle: 'Tic ma rwate ki ngec ma ityeko nyuto.',
    details: 'Nen Lok Mukene',
  },
};

const demoGigs: Gig[] = [
  {
    id: '1',
    title: 'Agent Support Specialist',
    description: 'Help customers complete mobile money transactions safely.',
    location: 'Kampala Central',
    pay: 'UGX 15,000/day',
    skillTrack: { title: 'Mobile Money' },
    postedBy: { employerProfile: { businessName: 'Safipay Solutions' } },
  },
  {
    id: '2',
    title: 'Warehouse Inventory Assistant',
    description: 'Organise incoming shipments and maintain stock records.',
    location: 'Entebbe Road',
    pay: 'UGX 12,000/day',
    skillTrack: { title: 'Digital Inventory' },
    postedBy: { employerProfile: { businessName: 'RapidRoute Logistics' } },
  },
  {
    id: '3',
    title: 'Digital Skills Tutor',
    description: 'Teach smartphone basics to a small youth group.',
    location: 'Makerere, Kampala',
    pay: 'UGX 20,000/session',
    skillTrack: { title: 'Digital Literacy' },
    postedBy: { employerProfile: { businessName: 'EduSpark Hub' } },
  },
];

const apiBase =
  process.env.EXPO_PUBLIC_API_URL ??
  (Platform.OS === 'android' ? 'http://10.0.2.2:3000/api' : 'http://localhost:3000/api');

export default function App() {
  const [gigs, setGigs] = useState<Gig[]>(demoGigs);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState('Matches Only');
  const [language, setLanguage] = useState<Language>('English');
  const words = copy[language];

  useEffect(() => {
    fetch(`${apiBase}/gigs`)
      .then((response) => (response.ok ? response.json() : Promise.reject()))
      .then((data) => data.length && setGigs(data))
      .catch(() => undefined)
      .finally(() => setLoading(false));
  }, []);

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar style="dark" />
      <View style={styles.header}>
        <Text style={styles.brand}>SkillProof</Text>
        <Pressable
          style={styles.language}
          onPress={() => {
            const next = (languages.indexOf(language) + 1) % languages.length;
            setLanguage(languages[next]);
          }}
        >
          <Text style={styles.languageText}>🌍 {language}</Text>
        </Pressable>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.hero}>
          <View style={styles.heroCopy}>
            <Text style={styles.eyebrow}>{words.opportunities}</Text>
            <Text style={styles.title}>{words.title}</Text>
            <Text style={styles.subtitle}>{words.subtitle}</Text>
          </View>
          <Image source={require('./assets/skillproof-work.jpg')} style={styles.heroImage} />
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.filters}>
          {['Matches Only', 'Retail', 'Logistics', 'Digital'].map((filter) => (
            <Pressable
              key={filter}
              onPress={() => setSelected(filter)}
              style={[styles.filter, selected === filter && styles.filterActive]}
            >
              <Text style={[styles.filterText, selected === filter && styles.filterTextActive]}>
                {filter}
              </Text>
            </Pressable>
          ))}
        </ScrollView>

        {loading && <ActivityIndicator color="#087f83" style={styles.loader} />}

        {gigs.map((gig, index) => (
          <View style={styles.card} key={gig.id}>
            <View style={styles.cardTop}>
              <View style={styles.companyMark}><Text style={styles.companyMarkText}>{index + 1}</Text></View>
              <View style={styles.companyCopy}>
                <Text style={styles.company}>
                  {gig.postedBy?.employerProfile?.businessName ?? 'Verified Employer'}
                </Text>
                <Text style={styles.location}>⌖ {gig.location ?? 'Uganda'}</Text>
              </View>
              <View style={styles.verified}><Text style={styles.verifiedText}>✓ Verified</Text></View>
            </View>
            <Text style={styles.jobTitle}>{gig.title}</Text>
            <Text style={styles.pay}>{gig.pay ?? 'Competitive pay'}</Text>
            <Text style={styles.description}>{gig.description}</Text>
            <View style={styles.skillRow}>
              <View style={styles.skill}><Text style={styles.skillText}>{gig.skillTrack?.title ?? 'Verified skill'}</Text></View>
              <Text style={styles.distance}>{index + 1}.{index + 2} km away</Text>
            </View>
            <Pressable style={styles.button}><Text style={styles.buttonText}>{words.details}  ›</Text></Pressable>
          </View>
        ))}
      </ScrollView>

      <View style={styles.nav}>
        {[
          ['⌂', 'Home'],
          ['▣', 'Tracks'],
          ['◆', 'Credentials'],
          ['●', 'Profile'],
        ].map(([icon, label]) => (
          <View style={label === 'Tracks' ? styles.navActive : styles.navItem} key={label}>
            <Text style={label === 'Tracks' ? styles.navIconActive : styles.navIcon}>{icon}</Text>
            <Text style={label === 'Tracks' ? styles.navTextActive : styles.navText}>{label}</Text>
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#f8f6f2' },
  header: { height: 66, paddingHorizontal: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#fff', borderBottomWidth: 1, borderBottomColor: '#e9e4dc' },
  brand: { color: '#075d61', fontSize: 23, fontWeight: '800' },
  language: { backgroundColor: '#e4f3f0', paddingHorizontal: 10, paddingVertical: 7, borderRadius: 14 },
  languageText: { color: '#075d61', fontSize: 10, fontWeight: '800' },
  content: { padding: 16, paddingBottom: 110 },
  hero: { backgroundColor: '#e4f3f0', borderRadius: 18, overflow: 'hidden', minHeight: 172, flexDirection: 'row' },
  heroCopy: { width: '58%', padding: 18, justifyContent: 'center' },
  heroImage: { width: '42%', height: 172 },
  eyebrow: { color: '#bd6a2d', fontSize: 10, fontWeight: '800', letterSpacing: 1.1, marginBottom: 7 },
  title: { color: '#083f42', fontSize: 25, lineHeight: 29, fontWeight: '800' },
  subtitle: { color: '#446568', fontSize: 12, lineHeight: 17, marginTop: 8 },
  filters: { marginVertical: 16 },
  filter: { paddingHorizontal: 15, paddingVertical: 9, marginRight: 8, borderRadius: 18, backgroundColor: '#fff', borderWidth: 1, borderColor: '#ddd8d0' },
  filterActive: { backgroundColor: '#087f83', borderColor: '#087f83' },
  filterText: { color: '#596365', fontSize: 12, fontWeight: '600' },
  filterTextActive: { color: '#fff' },
  loader: { marginBottom: 10 },
  card: { backgroundColor: '#fff', borderRadius: 14, borderWidth: 1, borderColor: '#e4ded5', padding: 15, marginBottom: 13 },
  cardTop: { flexDirection: 'row', alignItems: 'center' },
  companyMark: { width: 40, height: 40, borderRadius: 9, backgroundColor: '#fff1dc', alignItems: 'center', justifyContent: 'center' },
  companyMarkText: { color: '#a15d21', fontWeight: '900' },
  companyCopy: { flex: 1, marginLeft: 10 },
  company: { color: '#263436', fontSize: 12, fontWeight: '700' },
  location: { color: '#758082', fontSize: 10, marginTop: 3 },
  verified: { backgroundColor: '#e2f3e8', paddingHorizontal: 8, paddingVertical: 5, borderRadius: 5 },
  verifiedText: { color: '#347357', fontSize: 9, fontWeight: '700' },
  jobTitle: { color: '#152f31', fontSize: 18, fontWeight: '800', marginTop: 15 },
  pay: { color: '#087f83', fontSize: 12, fontWeight: '800', marginTop: 4 },
  description: { color: '#677174', fontSize: 12, lineHeight: 18, marginTop: 10 },
  skillRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 13 },
  skill: { backgroundColor: '#edf6f5', paddingHorizontal: 8, paddingVertical: 5, borderRadius: 5 },
  skillText: { color: '#326d6f', fontSize: 9, fontWeight: '700' },
  distance: { color: '#8b9293', fontSize: 9 },
  button: { backgroundColor: '#087f83', borderRadius: 6, paddingVertical: 12, alignItems: 'center', marginTop: 14 },
  buttonText: { color: '#fff', fontSize: 12, fontWeight: '800' },
  nav: { position: 'absolute', bottom: 0, left: 0, right: 0, height: 76, backgroundColor: '#fff', borderTopWidth: 1, borderTopColor: '#ded9d1', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' },
  navItem: { alignItems: 'center', minWidth: 65 },
  navActive: { alignItems: 'center', minWidth: 65, backgroundColor: '#e4f3f0', paddingVertical: 7, borderRadius: 12 },
  navIcon: { color: '#667173', fontSize: 16 },
  navIconActive: { color: '#087f83', fontSize: 16 },
  navText: { color: '#667173', fontSize: 9, marginTop: 3 },
  navTextActive: { color: '#087f83', fontSize: 9, fontWeight: '800', marginTop: 3 },
});
