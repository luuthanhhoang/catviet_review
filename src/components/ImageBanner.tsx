type Props = {
  src: string;
};

const ImageBanner = ({ src }: Props) => {
  return <img alt="banner" src={src} width={"100%"} />;
};

export default ImageBanner;
