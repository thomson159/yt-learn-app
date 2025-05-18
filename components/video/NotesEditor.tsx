import { Item } from '@/constants/Types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import styledNative from 'styled-components/native';

export default function NotesEditor({ params }: { params: Item }) {
  const [note, setNote] = useState('');
  const STORAGE_KEY = `note_${params.id}`;

  useEffect(() => {
    (async () => {
      try {
        const savedNote = await AsyncStorage.getItem(STORAGE_KEY);
        if (savedNote !== null) setNote(savedNote);
      } catch {}
    })();
  }, [STORAGE_KEY]);

  const saveNote = async () => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, note);
    } catch {}
  };

  return (
    <>
      <NoteInput
        multiline
        value={note}
        onChangeText={setNote}
        placeholder="Write your notes here..."
        textAlignVertical="top"
      />
      <SaveButton onPress={saveNote}>
        <SaveButtonText>Save</SaveButtonText>
      </SaveButton>
    </>
  );
}

const NoteInput = styledNative.TextInput`
  height: 150px;
  border-width: 1px;
  border-color: lightgray;
  padding: 12px;
  border-radius: 12px;
  font-size: 16px;
  margin-top: 12px;
`;

const SaveButton = styledNative.TouchableOpacity`
  background-color: #2b2d42;
  padding: 12px;
  border-radius: 8px;
  margin-top: 18px;
  align-items: center;
`;

const SaveButtonText = styledNative.Text`
  color: white;
  font-weight: bold;
  font-size: 16px;
`;
