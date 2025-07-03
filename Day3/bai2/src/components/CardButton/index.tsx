import style from "./CardButton.module.css";
import { EyeOff } from "lucide-react";

const CardButton = () => {
  return (
    <button className={style.button}>

        <img height={50} width={50} src="images/avt1.png" alt="" />

      <div className={style.column}>
        <div className={style.name}>Wade Warren</div>
        <div className={style.row}>
          <div>
            <span className={style.visa}>VISA</span> 4293 3242 ...
          </div>

          <div>
            <EyeOff />
          </div>
        </div>
      </div>
    </button>
  );
};

export default CardButton;
