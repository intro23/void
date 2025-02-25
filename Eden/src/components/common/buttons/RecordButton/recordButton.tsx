import { AudioModule, RecordingPresets, useAudioRecorder } from "expo-audio";
import React, { useEffect } from "react";
import { Alert, Button } from "react-native";

const RecordButton: React.FC = () => {
  const audioRecorder = useAudioRecorder(RecordingPresets.HIGH_QUALITY);

  const record = async () => {
    await audioRecorder.prepareToRecordAsync();
    audioRecorder.record();
    return "";
  };

  const stopRecording = async () => {
    await audioRecorder.stop();
    return "";
  };

  useEffect(() => {
    (async () => {
      const status = await AudioModule.requestRecordingPermissionsAsync();
      if (!status.granted) {
        Alert.alert("Permission to access microphone was denied");
      }
    })();
  }, []);

  return (
    <Button
      title={audioRecorder.isRecording ? "Stop Recording" : "Start Recording"}
      onPress={audioRecorder.isRecording ? stopRecording : record}
    />
  );
};

export default RecordButton;
