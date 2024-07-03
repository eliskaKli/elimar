import React, { useState } from 'react';
import { StyledImage, SingleImageContainer, ImageContainer } from './styled';

export interface SingleImage {
  src: string;
  alt: string;
}

export interface ImageProps {
  images: SingleImage | SingleImage[];
}

const Image: React.FC<ImageProps> = ({ images }) => {
  const isArray = Array.isArray(images);
  const imageArray = isArray ? (images as SingleImage[]) : [images as SingleImage];
  const [loadedStates, setLoadedStates] = useState<boolean[]>(new Array(imageArray.length).fill(false));

  const handleImageLoad = (index: number) => {
    const newLoadedStates = [...loadedStates];
    newLoadedStates[index] = true;
    setLoadedStates(newLoadedStates);
  };

  const handleImageError = (index: number) => {
    const newLoadedStates = [...loadedStates];
    newLoadedStates[index] = false;
    setLoadedStates(newLoadedStates);
  };

  const renderImage = (image: SingleImage, index: number) => (
    <SingleImageContainer key={index}>
      <StyledImage
        src={image.src}
        alt={image.alt || ''}
        //isLoaded={loadedStates[index]}
        onLoad={() => handleImageLoad(index)}
        onError={() => handleImageError(index)}
      />
    </SingleImageContainer>
  );

  return (
    <ImageContainer isgrid={(isArray && imageArray.length === 4).toString()}>
      {imageArray.map((image, index) => renderImage(image, index))}
    </ImageContainer>
  );
};

/* const Image: React.FC<ImageProps> = ({ images }) => {
  const [loaded, setLoaded] = useState<boolean>(false);
  const isArray = Array.isArray(images);

  const renderImage = (image: SingleImage, index: number) => {

    const handleImageLoad = () => {
      setLoaded(true);
    };

    const handleImageError = () => {
      setLoaded(false);
    };

    return (
      <SingleImageContainer key={index}>
        <StyledImage
          src={image.src}
          alt={image.alt}
          loaded={loaded}
          onLoad={handleImageLoad}
          onError={handleImageError}
        />
      </SingleImageContainer>
    );
  };

  return (
    <ImageContainer isgrid={isArray && (images as SingleImage[]).length === 4}>
      {isArray
        ? (images as SingleImage[]).map((image, index) => renderImage(image, index))
        : renderImage(images as SingleImage, 0)}
    </ImageContainer>
  );
};  */

export default Image;
