import { ThemedText } from '@/components/basic/ThemedText';
import { Item } from '@/components/search/Item';
import { useSearch } from '@/components/SearchProvider';
import { SortPopup } from '@/components/SortPopup';
import { getSortedItems } from '@/constants/SortItems';
import { SortOption } from '@/constants/Types';
import { useSearchVideos } from '@/hooks/useSearchVideos ';
import React, { useMemo, useState } from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';
import styledNative from 'styled-components/native';

export default function SearchScreen() {
  const items = useSearchVideos();
  const { query } = useSearch();
  const [tempSortBy, setTempSortBy] = useState<SortOption>('Most popular');
  const [sortBy, setSortBy] = useState<SortOption>('Most popular');
  const [showSortPopup, setShowSortPopup] = useState(false);
  const sortedItems = useMemo(
    () => getSortedItems(items, sortBy),
    [items, sortBy],
  );

  return (
    <ViewWrapper>
      <HeaderWrapper>
        <ThemedText type="date">
          {sortedItems.length} result found for: &quot;{query}&quot;
        </ThemedText>
        <TouchableOpacity onPress={() => setShowSortPopup(true)}>
          <ThemedText type="light">
            Sort by: <SortByBold>{sortBy}</SortByBold>
          </ThemedText>
        </TouchableOpacity>
      </HeaderWrapper>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        {sortedItems.map((item: any, index: number) => (
          <Item key={index} item={item} />
        ))}
      </ScrollView>
      {showSortPopup && (
        <SortPopup
          visible={showSortPopup}
          tempSortBy={tempSortBy}
          setTempSortBy={setTempSortBy}
          onConfirm={() => {
            setSortBy(tempSortBy);
            setShowSortPopup(false);
          }}
        />
      )}
    </ViewWrapper>
  );
}

const ViewWrapper = styledNative.View`
  padding-top: 114px;
  padding-bottom: 94px;
  background-color: #fff;
  min-height: 100%;
`;

const HeaderWrapper = styledNative.View`
  flex-direction: row;
  justify-content: space-between;
  padding-left: 24px;
  padding-right: 24px;
  margin-bottom: 8px;
`;

const SortByBold = styledNative.Text`
  font-weight: bold;
`;
