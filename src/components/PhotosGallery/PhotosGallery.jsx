import { Grid, PhotosGalleryItem } from '..';

export const PhotosGallery = ({ images }) => {
  return (
    <Grid>
      {images.map(({ id, src, alt, avg_color }) => (
        <PhotosGalleryItem key={id} src={src} alt={alt} avg_color={avg_color} />
      ))}
    </Grid>
  );
};
