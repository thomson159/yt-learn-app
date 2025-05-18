import { SortOption } from '@/constants/Types';
import React from 'react';
import { Portal } from 'react-native-portalize';
import styledNative from 'styled-components/native';

type Props = {
  visible: boolean;
  tempSortBy: SortOption;
  setTempSortBy: (option: SortOption) => void;
  onConfirm: () => void;
};

export const SortPopup = ({
  visible,
  tempSortBy,
  setTempSortBy,
  onConfirm,
}: Props) => {
  if (!visible) return null;

  return (
    <Portal>
      <PopupOverlay>
        <PopupContainer>
          <PopupTitle>Sort records by:</PopupTitle>
          {['Upload date: latest', 'Upload date: oldest', 'Most popular'].map(
            (option) => (
              <RadioOption
                key={option}
                onPress={() => setTempSortBy(option as SortOption)}
              >
                <RadioCircle selected={tempSortBy === option} />
                <RadioLabel>{option}</RadioLabel>
              </RadioOption>
            ),
          )}
          <ConfirmButton onPress={onConfirm}>
            <ConfirmButtonText>Confirm</ConfirmButtonText>
          </ConfirmButton>
        </PopupContainer>
      </PopupOverlay>
    </Portal>
  );
};

const PopupContainer = styledNative.View`
  width: 300px;
  background-color: #8D99AE;
  border-radius: 24px;
  padding: 32px;
  height: 400px;
`;

const PopupTitle = styledNative.Text`
  font-weight: 600;
  font-size: 18px;
  margin-bottom: 32px;
  color: #FFFFFF;
`;

const RadioOption = styledNative.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  margin-bottom: 24px;
`;

const RadioCircle = styledNative.View<{ selected: boolean }>`
  width: 24px;
  height: 24px;
  border-radius: 20px;
  border-width: 2px;
  border-color: #FFFFFF;
  margin-right: 12px;
  background-color: ${({ selected }: { selected: boolean }) => (selected ? '#2B2D42' : 'transparent')};
`;

const RadioLabel = styledNative.Text`
  font-size: 14px;
  font-weight: 400;
  color: #FFFFFF;
`;

const ConfirmButton = styledNative.TouchableOpacity`
  background-color: #2B2D42;
  padding: 12px;
  border-radius: 6px;
  margin-top: auto;
  align-items: center;
`;

const ConfirmButtonText = styledNative.Text`
  color: #FFFFFF;
  font-size: 14px;
  font-weight: 600;
`;

const PopupOverlay = styledNative.View`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  justify-content: center;
  align-items: center;
  z-index: 9999;
  elevation: 20;
`;
