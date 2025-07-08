import { useState } from "react";
import styles from "./SlideWithThumb.module.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ImageItem {
  id: number;
  src: string;
}

type Props = {
  images: ImageItem[];
};

function SlideWithThumb({ images }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClickPrev = () => {
    setCurrentIndex((prev) => prev - 1);
  };

  const handleClickNext = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  const handleClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.mainImageWrapper}>
        <ChevronLeft onClick={handleClickPrev} className={styles.prevBtn} />
        <img
          className={styles.mainImage}
          src={images[currentIndex].src}
          alt=""
        />
        <ChevronRight onClick={handleClickNext} className={styles.nextBtn} />
      </div>

      {/* thumnails row */}
      <div className={styles.thumbnailRow}>
        {images.map((img, index) => (
          <img
            key={img.id}
            src={img.src}
            onClick={() => handleClick(index)}
            className={`${styles.thumbnail} ${
              currentIndex === index ? styles.active : ""
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default SlideWithThumb;
