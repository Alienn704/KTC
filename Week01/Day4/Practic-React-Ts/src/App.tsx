import "./App.css";
import Product from "./components/Product";
import PhoneItem from "./components/PhoneItemList";
import Rating from "./components/Rating";

import Attributes from "./components/Attributes";
import LikeButton from "./components/LikeButton";
import SlideWithThumb from "./components/SlideWithThumb";
import ButtonTabs from "./components/ButtonTabs";

const attributes = [
  { id: 1, label: "Đen" },
  { id: 2, label: "Hồng" },
  { id: 3, label: "Xanh" },
];

const images = [
  { id: 1, src: "./images/slideThumb/1.jpg" },
  { id: 2, src: "./images/slideThumb/2.jpg" },
  { id: 3, src: "./images/slideThumb/3.jpg" },
  { id: 4, src: "./images/slideThumb/4.jpg" },
  { id: 5, src: "./images/slideThumb/5.jpg" },
];

const buttons = [
  { id: 1, name: "History", label: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores." },
  { id: 2, name: "AppRoach", label: "Contenido de tabNeque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?" },
  { id: 3, name: "Cuture", label: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est." },
  { id: 4, name: "Method", label:"Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae." },
];

function App() {
  return (
    <>
      <section className="section">
        <div className="topRow">
          <span style={{ fontSize: "25px" }}>TIN TỨC</span>
          <span style={{ fontSize: "14px" }}>Xem thêm</span>
        </div>

        <div className="listProduct">
          <Product
            img="./images/product1.jpg"
            title="Ấn tượng đầu tiên Samsung Galaxy A32 4G: Với hơn 6 triệu đã có màn hình Super AMOLED 90Hz"
            views={140}
          ></Product>

          <Product
            img="./images/product2.webp"
            title="Google Pixel 5a dự kiến sẽ được ra mắt cùng thời điểm với Android 12"
            views={127}
          ></Product>

          <Product
            img="./images/product3.jpg"
            title="Galaxy A52 4G lộ diện trên Google Play Console Xác nhận dùng chip Snapdragon 720"
            views={55}
          ></Product>

          <Product
            img="./images/product4.jpg"
            title="Galaxy A82 5G chuẩn bị ra mắt với chip flagship và màn hình trượt độc đáo, Samfans gom lúa đi là vừa"
            views={55}
          ></Product>
        </div>
      </section>

      <section className="section">
        <span className="topRow" style={{ fontSize: "25px" }}>
          Phụ kiện tương thích
        </span>
        <div className="listProduct">
          <PhoneItem
            img=".\images\render-list-4\1.jpg"
            title="Cáp chuyển đổi USB-C sang SD"
            sellingPrice="1.290.000"
            discount="-25"
            initPrice="790.000"
          />

          <PhoneItem
            img=".\images\render-list-4\2.png"
            title="Adapter sạc Apple Type C 20W"
            sellingPrice="250.000"
          />

          <PhoneItem
            img=".\images\render-list-4\3.jpg"
            title="Cáp sạc Lightning 2m"
            sellingPrice="840.000"
          />

          <PhoneItem
            img=".\images\render-list-4\4.png"
            title="Airpods 3"
            sellingPrice="890.000"
            discount="-20"
            initPrice="1.450.000"
          />
        </div>
      </section>

      <section className="section">
        <Attributes data={attributes} />
      </section>

      <section className="section">
        <div>
          <span>Chọn đánh giá của bạn</span>
          <Rating></Rating>
        </div>
      </section>

      <h1 style={{ textAlign: "center" }}>Homework</h1>
      <section className="section">
        <h2>1. Like Button</h2>
        <LikeButton></LikeButton>
      </section>
      <section className="section">
        <h2>2. Slide With Thumb</h2>

        <SlideWithThumb images={images}></SlideWithThumb>
      </section>

      <section className="section">
        <h2>3. Button Tabs</h2>
        <ButtonTabs buttons={buttons}></ButtonTabs>
    
      </section>
    </>
  );
}

export default App;
