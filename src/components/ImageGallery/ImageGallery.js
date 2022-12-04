import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export function ImageGallery({ images }) {
  return (
    <ul className="gallery">
      {images.map(item => {
        return <ImageGalleryItem key={item.id} item={item} />;
      })}
    </ul>
  );
}
