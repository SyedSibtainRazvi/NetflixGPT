const HeroVideo = ({ keyId }: { keyId: string }) => {
  return (
    <iframe
      className="absolute w-full aspect-video pointer-events-none"
      src={`https://www.youtube.com/embed/${keyId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${keyId}`}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    ></iframe>
  );
};

export default HeroVideo;
