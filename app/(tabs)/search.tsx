import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { ScrollView, StyleSheet, View } from 'react-native';

export type Items = {
  des: string;
  date: string;
  channel: string;
}[];

const items: Items = [
  {
    des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elitqwe. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    date: '2023-10-01',
    channel: 'React Native',
  },
  {
    des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elitqwe. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    date: '2023-10-01',
    channel: 'React Native',
  },
  {
    des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elitqwe. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    date: '2023-10-01',
    channel: 'React Native',
  },
];

export default function SearchScreen() {
  return (
    <View style={styles.view}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <Row items={items} />
      </ScrollView>
    </View>
  );
}

function Row({ items }: { items?: Items }) {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title"></ThemedText>
      <View style={styles.panel}>
        {items?.map((item, index) => (
          <View key={index}>
            <View style={styles.videoImage} />
            <ThemedText type="defaultBold" style={styles.date}>
              {item.channel}
            </ThemedText>
            <ThemedText type="default" numberOfLines={2} ellipsizeMode="tail">
              {item.des}
            </ThemedText>
            <ThemedText type="date">{item.date}</ThemedText>
          </View>
        ))}
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  date: {
    marginBottom: 12,
    marginTop: 12,
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
  },
  panel: {
    paddingLeft: 24,
    paddingRight: 24,
  },
  videoImage: {
    backgroundColor: 'darkgray',
    minHeight: 200,
    borderRadius: 14,
    marginTop: 16,
    marginBottom: 8,
  },
});
