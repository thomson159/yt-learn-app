import { details, notes } from '@/constants/Consts';
import { TabType } from '@/constants/Types';
import styledNative from 'styled-components/native';

export default function TabsRow({
  activeTab,
  setActiveTab,
}: {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
}) {
  return (
    <Row>
      <TabButton
        active={activeTab === details}
        onPress={() => setActiveTab(details)}
      >
        <TabText>Details</TabText>
      </TabButton>
      <TabButton
        active={activeTab === notes}
        onPress={() => setActiveTab(notes)}
      >
        <TabText>Notes</TabText>
      </TabButton>
    </Row>
  );
}

const Row = styledNative.View`
  flex-direction: row;
  margin-top: 16px;
  margin-bottom: 8px;
`;

const TabButton = styledNative.TouchableOpacity<{ active: boolean }>`
  flex: 1;
  border-bottom-width: 2px;
  border-bottom-color: ${({ active }: { active: boolean }) => (active ? '#2B2D42' : 'lightgray')};
`;

const TabText = styledNative.Text`
  color: #2B2D42;
  text-align: center;
  font-weight: bold;
  margin-bottom: 4px;
`;
