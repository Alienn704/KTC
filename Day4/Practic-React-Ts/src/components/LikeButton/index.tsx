import { useState } from 'react';
import { ThumbsUp } from 'lucide-react';
import styles from './LikeButton.module.css';

export default function LikeButton() {
  const [liked, setLiked] = useState(false);

  const handleClick = () => {
    setLiked(prev => !prev)
  };

  return (
    <div className={styles.likeWrapper} onClick={handleClick}>
      <ThumbsUp className={`${styles.icon} ${liked ? styles.likedIcon : ''}`} />
      <span className={styles.text}>
        {liked ? 'Thank you !' : 'Click like if this post is useful to you !'}
      </span>
    </div>
  );
}
