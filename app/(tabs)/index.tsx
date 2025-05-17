import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { ScrollView, StyleSheet, View } from 'react-native';

export type Items = {
  des: string;
  date: string;
}[];

const items: Items = [
  {
    des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elitqwe. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    date: '2023-10-01',
  },
  {
    des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elitqwe. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    date: '2023-10-01',
  },
  {
    des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elitqwe. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    date: '2023-10-01',
  },
];

export default function HomeScreen() {
  return (
    <View style={styles.view}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <Row title="React Native" items={items} />
        <Row title="React" items={items} />
        <Row title="Typescript" items={items} isLast={true} />
      </ScrollView>
    </View>
  );
}

function Row({
  title,
  items,
  isLast,
}: {
  title: string;
  items?: Items;
  isLast?: boolean;
}) {
  return (
    <ThemedView style={[styles.container, isLast && { borderBottomWidth: 0 }]}>
      <ThemedText type="title" style={styles.title}>
        {title}
      </ThemedText>
      <ScrollView
        horizontal
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <View style={styles.panel}>
          {items?.map((item, index) => (
            <View key={index} style={styles.col}>
              <View style={styles.videoImage} />
              <ThemedText type="default" numberOfLines={2} ellipsizeMode="tail">
                {item.des}
              </ThemedText>
              <ThemedText type="date">{item.date}</ThemedText>
            </View>
          ))}
        </View>
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  title: {
    paddingLeft: 24,
  },
  view: {
    paddingTop: 128,
    paddingBottom: 80,
    backgroundColor: '#fff',
  },
  container: {
    width: '100%',
    paddingTop: 8,
    paddingBottom: 16,
    borderBottomWidth: 2,
    borderBottomColor: '#2B2D42',
  },
  panel: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    paddingLeft: 24,
    paddingRight: 24,
  },
  col: {
    maxWidth: 180,
  },
  videoImage: {
    backgroundColor: 'darkgray',
    minHeight: 112,
    borderRadius: 14,
    marginTop: 16,
    marginBottom: 8,
  },
});
