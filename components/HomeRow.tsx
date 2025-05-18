import { HomeRom } from '@/constants/Types';
import React from 'react';
import { Image, ScrollView } from 'react-native';
import styledNative from 'styled-components/native';
import { ThemedText } from './ThemedText';
import { ThemedView } from './ThemedView';

export function HomeRow({ title, items }: HomeRom) {
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
            <Col key={index}>
              <Thumbnail source={{ uri: item.thumbnail }} />
              <ThemedText type="default" numberOfLines={2} ellipsizeMode="tail">
                {item.title}
              </ThemedText>
              <ThemedText type="date">
                {new Date(item.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric',
                })}
              </ThemedText>
            </Col>
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

const Col = styledNative.View`
    max-width: 180px;
  `;

const Thumbnail = styledNative(Image)`
    border-radius: 14px;
    margin-top: 16px;
    margin-bottom: 8px;
    width: 180px;
    height: 112px;
  `;
