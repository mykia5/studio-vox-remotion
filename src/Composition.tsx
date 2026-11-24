import { AbsoluteFill, Audio, Composition, RemotionRoot, staticFile, useCurrentFrame, useVideoConfig } from 'remotion';

export const VoxExplainer = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const seconds = frame / fps;

  return (
    <AbsoluteFill style={{ backgroundColor: '#111111', justifyContent: 'center', alignItems: 'center' }}>
      <Audio src={staticFile('voix-off-construction-pont-vox.wav')} />
      <div style={{ color: 'white', fontSize: 50, fontFamily: 'sans-serif', fontWeight: 'bold' }}>
        {seconds > 1 ? "Pipeline Cloud Actif !" : "Chargement..."}
      </div>
    </AbsoluteFill>
  );
};

export const Root = () => {
  return (
    <RemotionRoot>
      <Composition
        id="VoxExplainer"
        component={VoxExplainer}
        durationInFrames={300}
        fps={30}
        width={1920}
        height={1080}
      />
    </RemotionRoot>
  );
};
