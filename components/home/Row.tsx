import { Item as ItemType } from '@/constants/Types';
import { useRouter } from 'expo-router';
import React from 'react';
import { ScrollView, View } from 'react-native';
import styledNative from 'styled-components/native';
import { ThemedText } from '../basic/ThemedText';
import { ThemedView } from '../basic/ThemedView';
import { useSearch } from '../SearchProvider';
import { Item } from './Item';

type Props = { title: string; items: ItemType[] };

export function Row({ title, items }: Props) {
  const { setQuery } = useSearch();
  const router = useRouter();

  return (
    <Container>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingLeft: 24,
          paddingRight: 24,
        }}
      >
        <ThemedText type="title">{title}</ThemedText>
        <ThemeButton
          onPress={() => {
            setQuery(title);
            router.push('/search');
          }}
        >
          <ThemedText type="decorationLine">Show more</ThemedText>
        </ThemeButton>
      </View>
      <ScrollView
        horizontal
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <Panel>
          {items.map((item, index) => (
            <ThemeButton
              key={index}
              onPress={() => {
                router.push({
                  pathname: '/video',
                  params: item,
                });
              }}
            >
              <Item item={item} />
            </ThemeButton>
          ))}
        </Panel>
      </ScrollView>
    </Container>
  );
}

const Container = styledNative(ThemedView)`
  width: 100%;
  padding: 8px 0 16px;
  border-bottom-color: #2b2d42;
  border-bottom-width: 2px;
`;

const Panel = styledNative.View`
  flex-direction: row;
  gap: 16px;
  padding-left: 24px;
  padding-right: 24px;
`;

const ThemeButton = styledNative.TouchableOpacity``;
