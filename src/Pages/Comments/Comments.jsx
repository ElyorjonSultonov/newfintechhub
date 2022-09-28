import React from "react";
import "./Comments.scss";
import Doston from "../../assets/images/Doston.png";
import Dilnoza from "../../assets/images/Dilnoza.png";
import Abdulboriy from "../../assets/images/Abdulboriy.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Comments() {
  return (
    <div>
      <div className="Comments">
        <div className="container">
          <h6 className="CommentsTitle">Sharhlar</h6>
          <div className="CommentContext">
            <div className="CommentsMe">
              <h1>Biz haqimizda o’quvchilarimiz qanday fikrda?</h1>
              <p>
                O’quvchilarimiz bizning kurslarimizni tugatgach ko’pchiliklari
                ish bilan ta’minlandi. Quyida ularning fikrlari bilan tanishing:
              </p>
            </div>

            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}

              breakpoints={{
                244: {
                  width: 276,
                  slidesPerView: 1
                },
                376: {
                  width: 376,
                  slidesPerView: 1
                },
                576: {
                  width: 576,
                  slidesPerView: 1,
                },
                744: {
                  width: 744,
                  slidesPerView: 2,
                },
              }}
              modules={[Pagination, Autoplay]}
              //   className="TeachersCards"
              loop={true}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
            >
              <SwiperSlide>
                <div className="CommentBox">
                  <h5>Ajoyib kurs!</h5>
                  <p>
                    Kurs juda ajoyib va tushunarli bo’ldi, barcha vazifalarni
                    bajardik. Ustozimizga rahmat. Hozirda EPAM’da junior .Net
                    developerman.
                  </p>
                  <div className="PersonsAbout">
                    <div className="personImg">
                      <img src={Doston} alt="" />
                    </div>
                    <div className="personAbout">
                      <h1>Doston Jo’rayev</h1>
                      <h6>.Net developer</h6>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="CommentBox">
                  <h5>Boshida qiyin bo’ldi...</h5>
                  <p>
                    Boshida hechnarsaga tushunmadim, qiynaldim lekin harakat
                    qilib o’rganishda davom etdim va kursni muvaffaqiyatli
                    tugatdim va ishlamoqdaman.
                  </p>
                  <div className="PersonsAbout">
                    <div className="personImg">
                      <img src={Dilnoza} alt="" />
                    </div>
                    <div className="personAbout">
                      <h1>Dilnoza Sobirova</h1>
                      <h6>Frontend developer</h6>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="CommentBox">
                  <h5>Hammagamas ekan...</h5>
                  <p>
                    Aslida bu sohaga pulga qiziqqanimdan kirgandim, mashaqqatlar
                    borligi hayolimda ham yo’q edi. Hullas hammaga ham emas...
                    Hozir junor backendchiman.{" "}
                  </p>
                  <div className="PersonsAbout">
                    <div className="personImg">
                      <img src={Abdulboriy} alt="" />
                    </div>
                    <div className="personAbout">
                      <h1>Abdulboriy Salomov</h1>
                      <h6>Backend developer</h6>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>

      <div className="career">
        <div className="container">
          <h1>
            Karyerangizni aynan hoziroq <br /> biz bilan boshlang!
          </h1>
          <button className="btn2">Bepul Registratsiya</button>
        </div>
      </div>
    </div>
  );
}

export default Comments;
