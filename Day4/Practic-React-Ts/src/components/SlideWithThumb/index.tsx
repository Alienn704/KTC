import { useState } from 'react';
import styles from './SlideWithThumb.module.css';
import { ChevronLeft, ChevronRight } from 'lucide-react';



interface ImageItem {
  id: number;
  src: string;
}

type Props = {
  images: ImageItem[];
};

export default function SlideWithThumb({ images }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleSelect = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.mainImageWrapper}>
        <img
          src={images[currentIndex].src}
          className={styles.mainImage}
        />
        <ChevronLeft onClick={handlePrev} className={styles.prevBtn}></ChevronLeft>
        <ChevronRight onClick={handleNext} className={styles.nextBtn}></ChevronRight>
      </div>

      <div className={styles.thumbnailRow}>
        {images.map((img, index) => (
          <img
            key={img.id}
            src={img.src}
            onClick={() => handleSelect(index)}
            className={`${styles.thumbnail} ${currentIndex === index ? styles.active : ''}`}
          />
        ))}
      </div>
    </div>
  );
}
