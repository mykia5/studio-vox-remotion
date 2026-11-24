import { AbsoluteFill, Audio, staticFile, useCurrentFrame, useVideoConfig } from 'remotion';

export const VoxExplainer = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  
  // Animation simple basée sur le temps (en secondes)
  const seconds = frame / fps;

  return (
    <AbsoluteFill style={{ backgroundColor: '#111111', justifyContent: 'center', alignItems: 'center' }}>
      {/* Lecture de votre voix off importée */}
      <Audio src={staticFile('voix_off.mp3')} />
      
      {/* Élément visuel style Vox */}
      <div style={{ color: 'white', fontSize: 50, fontFamily: 'sans-serif', fontWeight: 'bold', textAlign: 'center' }}>
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
        durationInFrames={300} // Durée par défaut de 10 secondes (à adapter selon votre audio)
        fps={30}
        width={1920}
        height={1080}
      />
    </RemotionRoot>
  );
};
