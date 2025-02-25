import AudioRecorderPlayer, {
  AVEncoderAudioQualityIOSType,
  AVEncodingOption,
  AudioEncoderAndroidType,
  AudioSet,
  AudioSourceAndroidType,
  PlayBackType,
  RecordBackType,
} from "react-native-audio-recorder-player";

const player = new AudioRecorderPlayer();

export const getAudioPlayer = () => {
  return player;
};

export const setAudioPlayerSubscriptionDuration = (duration: number) => {
  player.setSubscriptionDuration(duration);
};

export const onStartRecord = async ({
  path,
  backListener,
  audioConfig,
}: {
  path: string;
  backListener: (e: RecordBackType) => void;
  audioConfig?: AudioSet;
}) => {
  const audioSet = audioConfig || {
    AudioEncoderAndroid: AudioEncoderAndroidType.AAC,
    AudioSourceAndroid: AudioSourceAndroidType.MIC,
    AVEncoderAudioQualityKeyIOS: AVEncoderAudioQualityIOSType.high,
    AVNumberOfChannelsKeyIOS: 2,
    AVFormatIDKeyIOS: AVEncodingOption.aac,
  };
  console.log("audioSet", audioSet);
  const uri = await player.startRecorder(path, audioSet);
  player.addRecordBackListener(backListener);

  console.log(`uri: ${uri}`);
  return uri;
};

export const onStopRecord = async () => {
  const result = await player.stopRecorder();
  player.removeRecordBackListener();
  console.log(result);
};

export const setAudioPlayerVolume = (volume: number) => {
  player.setVolume(volume);
};

export const onStartPlay = async ({
  path,
  backListener,
}: {
  path: string;
  backListener: (e: PlayBackType) => void;
}) => {
  const msg = await player.startPlayer(path);
  player.addPlayBackListener(backListener);
};

export const onStopPlay = async () => {
  await player.stopPlayer();
  player.removePlayBackListener();
};

export const onPausePlay = async () => {
  await player.pausePlayer();
};

export const onResumePlay = async () => {
  await player.resumePlayer();
};
