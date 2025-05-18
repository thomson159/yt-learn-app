import { SearchItem } from '@/components/search/SearchItem';
import { ScrollView } from 'react-native';
import styledNative from 'styled-components/native';

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
];

export default function SearchScreen() {
  return (
    <ViewWrapper>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        {items.map((item, index) => (
          <SearchItem key={index} {...item} />
        ))}
      </ScrollView>
    </ViewWrapper>
  );
}

const ViewWrapper = styledNative.View`
  padding-top: 128px;
  padding-bottom: 80px;
  background-color: #fff;
`;
