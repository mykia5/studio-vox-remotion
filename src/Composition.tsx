export const Root = () => {
  return (
    <>
      <Composition
        id="VoxExplainer"
        component={VoxExplainer}
        durationInFrames={300}
        fps={30}
        width={1920}
        height={1080}
      />
    </>
  );
};

export default Root;
