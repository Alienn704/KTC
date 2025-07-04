import styles from "./PhoneItem.module.css";

type TPhoneItemProps = {
  img: string;
  title: string;
  sellingPrice: string;
  discount?: string;
  initPrice?: string;
};

const PhoneItem = ({
  img,
  title,
  sellingPrice,
  discount,
  initPrice,
}: TPhoneItemProps) => {
  return (
    <div className={styles.oneItem}>
      {discount && <div className={styles.discount}>{discount}%</div>}
      <img className={styles.img} src={img} alt="" />
      <span className={styles.title}>{title}</span>
      <div className={styles.priceRow}>
        <div className={styles.sellingPrice}>{sellingPrice}đ</div>
        {initPrice && <div className={styles.initPrice}>{initPrice}đ</div>}
      </div>
    </div>
  );
};

export default PhoneItem;
