import styles from './Product.module.css'

type TProductProps = {
  img: string;
  title: string;
  views: number;

}

const Product =({
  img,
  title,
  views,

}: TProductProps) =>{
  return (
    <div className={styles.news}>
      
      <div className={styles.product}>
      <img className={styles.img} src={img} alt="image product" />
      <span className={styles.title}>{title}</span>
      <div className={styles.views}>{views} lượt xem</div>
      </div>

    </div>
    
  )
}

export default Product