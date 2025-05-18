import { HomeRowType } from '@/constants/Types';
import React from 'react';
import { ScrollView } from 'react-native';
import styledNative from 'styled-components/native';
import { ThemedText } from '../basic/ThemedText';
import { ThemedView } from '../basic/ThemedView';
import { HomeItem } from './HomeItem';

export function HomeRow({ title, items }: HomeRowType) {
  return (
    <Container>
      <ThemedText type="title" style={{ paddingLeft: 24 }}>
        {title}
      </ThemedText>
      <ScrollView
        horizontal
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <Panel>
          {items.map((item, index) => (
            <HomeItem key={index} item={item} />
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
