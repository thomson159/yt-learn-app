import styledNative from 'styled-components/native';

export default function NotesEditor({
  note,
  setNote,
  saveNote,
}: {
  note: string;
  setNote: (text: string) => void;
  saveNote: () => Promise<void>;
}) {
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
