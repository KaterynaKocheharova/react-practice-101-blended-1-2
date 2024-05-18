import { GridItem } from "..";
import style from "./PhotosGalleryItem.module.css";
export const PhotosGalleryItem = ({src, alt, avg_color}) => {

  return (<GridItem>
    <div className={style.thumb} style={{ backgroundColor: avg_color, borderColor: avg_color }}>
      <img src={src.large} alt={alt} />
    </div>
  </GridItem>);
};
