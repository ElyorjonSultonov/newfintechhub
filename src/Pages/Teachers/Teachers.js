import React from "react";
import "./Teachers.scss";
import Nafisa from "../../assets/images/nafisa2.png";
import Akobir from "../../assets/images/Akobir2.png";
import Hasan from "../../assets/images/Hasan2.png";
import Murod from "../../assets/images/Murod2.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Teachers = () => {
  return (
    <>
      <div className="Teachers">
        <div className="container">
          <h6 className="TeachersSmallTitle">O’qituvchilar</h6>
          <h1 className="TeachersTitle">Bizning ustozlarimiz</h1>
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
                slidesPerView: 2,
              },
              744: {
                width: 744,
                slidesPerView: 2,
              },
            }}
            modules={[Pagination, Autoplay]}
            className="TeachersCards"
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
          >
            <SwiperSlide>
              <div className="CardTeacher">
                <div className="TeachersImg">
                  <img src={Nafisa} alt="" />
                </div>
                <div className="TeachersBody">
                  <div className="textCenter">
                    <h2>Nafisa Xamrayeva</h2>
                    <h6>Frontend</h6>
                  </div>
                  <p>
                    Nafisa Xamrayeva 4 yildan ortiq tajriba ega mutahhasis
                    hisoblanadi. 30dan ortiq proyektlarda ishtrok etgan.
                    2011-2015- yillardan INHA universitetida ta’lim olgan.
                  </p>
                  <span>
                    <h5>Tajriba: +4 yil</h5>
                    <div className="TeachersNerworks">
                      <div className="instagram">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g id="Instagram">
                            <g id="Instagram_2">
                              <path
                                id="Vector"
                                d="M9.77831 12C9.77831 10.7727 10.773 9.77758 12.0003 9.77758C13.2276 9.77758 14.2228 10.7727 14.2228 12C14.2228 13.2272 13.2276 14.2224 12.0003 14.2224C10.773 14.2224 9.77831 13.2272 9.77831 12ZM8.57688 12C8.57688 13.8906 10.1095 15.4232 12.0003 15.4232C13.891 15.4232 15.4237 13.8906 15.4237 12C15.4237 10.1093 13.891 8.57673 12.0003 8.57673C10.1095 8.57673 8.57688 10.1093 8.57688 12ZM14.7591 8.44099C14.7591 8.59922 14.8059 8.75391 14.8938 8.8855C14.9817 9.0171 15.1066 9.11969 15.2527 9.18029C15.3989 9.2409 15.5597 9.25681 15.7149 9.226C15.8701 9.1952 16.0127 9.11906 16.1247 9.00722C16.2366 8.89539 16.3128 8.75287 16.3438 8.5977C16.3747 8.44253 16.3589 8.28167 16.2984 8.13546C16.2379 7.98926 16.1355 7.86427 16.0039 7.77631C15.8724 7.68836 15.7177 7.64138 15.5595 7.64131H15.5592C15.3471 7.64141 15.1437 7.72569 14.9937 7.87562C14.8437 8.02556 14.7593 8.22891 14.7591 8.44099ZM9.30682 17.4265C8.65682 17.3969 8.30353 17.2886 8.06875 17.1972C7.75748 17.076 7.53539 16.9317 7.30189 16.6985C7.06839 16.4653 6.92385 16.2434 6.8032 15.9322C6.71168 15.6975 6.60341 15.3441 6.57386 14.6942C6.54154 13.9914 6.53509 13.7804 6.53509 12C6.53509 10.2197 6.54207 10.0092 6.57386 9.3059C6.60346 8.65593 6.71253 8.30323 6.8032 8.06787C6.92438 7.75662 7.06871 7.53454 7.30189 7.30105C7.53507 7.06755 7.75695 6.92302 8.06875 6.80238C8.30342 6.71086 8.65682 6.60259 9.30682 6.57305C10.0096 6.54073 10.2207 6.53427 12.0003 6.53427C13.7799 6.53427 13.9912 6.54126 14.6945 6.57305C15.3445 6.60265 15.6972 6.71171 15.9326 6.80238C16.2438 6.92302 16.4659 7.06787 16.6994 7.30105C16.9329 7.53422 17.0769 7.75662 17.1981 8.06787C17.2896 8.30254 17.3979 8.65593 17.4275 9.3059C17.4598 10.0092 17.4662 10.2197 17.4662 12C17.4662 13.7804 17.4598 13.9909 17.4275 14.6942C17.3979 15.3441 17.2891 15.6974 17.1981 15.9322C17.0769 16.2434 16.9326 16.4655 16.6994 16.6985C16.4663 16.9314 16.2438 17.076 15.9326 17.1972C15.6979 17.2887 15.3445 17.3969 14.6945 17.4265C13.9918 17.4588 13.7807 17.4653 12.0003 17.4653C10.2199 17.4653 10.0094 17.4588 9.30682 17.4265ZM9.25162 5.37369C8.54189 5.40601 8.05691 5.51854 7.63337 5.68334C7.19474 5.85353 6.82342 6.08185 6.45236 6.4523C6.08131 6.82275 5.85357 7.19465 5.68337 7.63326C5.51857 8.05705 5.40603 8.54174 5.37371 9.25145C5.34085 9.96227 5.33333 10.1895 5.33333 12C5.33333 13.8104 5.34085 14.0377 5.37371 14.7485C5.40603 15.4583 5.51857 15.9429 5.68337 16.3667C5.85357 16.805 6.08136 17.1774 6.45236 17.5477C6.82336 17.918 7.19474 18.146 7.63337 18.3166C8.05771 18.4814 8.54189 18.594 9.25162 18.6263C9.96285 18.6586 10.1897 18.6666 12.0003 18.6666C13.8108 18.6666 14.0381 18.6591 14.7489 18.6263C15.4587 18.594 15.9434 18.4814 16.3672 18.3166C16.8055 18.146 17.1771 17.9181 17.5482 17.5477C17.9192 17.1772 18.1465 16.805 18.3172 16.3667C18.482 15.9429 18.595 15.4582 18.6268 14.7485C18.6591 14.0372 18.6667 13.8104 18.6667 12C18.6667 10.1895 18.6591 9.96227 18.6268 9.25145C18.5945 8.54169 18.482 8.05678 18.3172 7.63326C18.1465 7.19491 17.9186 6.82334 17.5482 6.4523C17.1777 6.08126 16.8055 5.85353 16.3677 5.68334C15.9434 5.51854 15.4586 5.40547 14.7494 5.37369C14.0386 5.34137 13.8113 5.33331 12.0008 5.33331C10.1903 5.33331 9.96285 5.34083 9.25162 5.37369Z"
                                fill="#757782"
                              />
                            </g>
                          </g>
                        </svg>
                      </div>

                      <div className="telegram">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6.2041 11.9253C9.60427 10.42 11.8716 9.4276 13.006 8.94812C16.2452 7.57913 16.9182 7.34133 17.3569 7.33339C17.4534 7.33175 17.6691 7.35604 17.8089 7.47127C17.9269 7.56856 17.9593 7.69998 17.9749 7.79223C17.9904 7.88447 18.0097 8.0946 17.9944 8.25879C17.8188 10.1328 17.0593 14.6806 16.6729 16.7796C16.5094 17.6678 16.1875 17.9656 15.8758 17.9947C15.1985 18.058 14.6842 17.5398 14.0282 17.1029C13.0016 16.4191 12.4217 15.9935 11.4252 15.3262C10.2737 14.5551 11.0202 14.1313 11.6765 13.4387C11.8482 13.2574 14.8325 10.4991 14.8903 10.2489C14.8975 10.2176 14.9042 10.101 14.836 10.0394C14.7678 9.9778 14.6672 9.99886 14.5945 10.0156C14.4916 10.0394 12.8516 11.1408 9.67475 13.3199C9.20926 13.6447 8.78764 13.8029 8.40987 13.7946C7.99342 13.7855 7.19234 13.5554 6.59682 13.3586C5.86638 13.1174 5.28585 12.9898 5.3364 12.5801C5.36273 12.3667 5.65196 12.1484 6.2041 11.9253Z"
                            fill="#757782"
                          />
                        </svg>
                      </div>

                      <div className="facebook">
                        <svg
                          width="24"
                          height="14"
                          viewBox="0 0 8 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M4.75992 13.6666V7.58461H6.92201L7.24571 5.21436H4.75992V3.70103C4.75992 3.0148 4.96176 2.5471 6.00404 2.5471L7.33333 2.54652V0.426608C7.10333 0.397828 6.31431 0.333313 5.39633 0.333313C3.47979 0.333313 2.16769 1.43786 2.16769 3.46641V5.21442H0V7.58467H2.16762V13.6666L4.75992 13.6666Z"
                            fill="#757782"
                          />
                        </svg>
                      </div>
                    </div>
                  </span>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="CardTeacher">
                <div className="TeachersImg">
                  <img src={Hasan} alt="" />
                </div>
                <div className="TeachersBody">
                  <div className="textCenter">
                    <div className="textCenter">
                      <h2>Hasan Ramazonov</h2>
                      <h6>Backend</h6>
                    </div>
                  </div>
                  <p>
                    Hasan Ramazonov 6 yildan ortiq tajriba ega mutahhasis
                    hisoblanadi. 50dan ortiq proyektlarda ishtrok etgan.
                    2014-2018- yillardan TATU da ta’lim olgan.
                  </p>
                  <span>
                    <h5>Tajriba: +6 yil</h5>
                    <div className="TeachersNerworks">
                      <div className="instagram">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g id="Instagram">
                            <g id="Instagram_2">
                              <path
                                id="Vector"
                                d="M9.77831 12C9.77831 10.7727 10.773 9.77758 12.0003 9.77758C13.2276 9.77758 14.2228 10.7727 14.2228 12C14.2228 13.2272 13.2276 14.2224 12.0003 14.2224C10.773 14.2224 9.77831 13.2272 9.77831 12ZM8.57688 12C8.57688 13.8906 10.1095 15.4232 12.0003 15.4232C13.891 15.4232 15.4237 13.8906 15.4237 12C15.4237 10.1093 13.891 8.57673 12.0003 8.57673C10.1095 8.57673 8.57688 10.1093 8.57688 12ZM14.7591 8.44099C14.7591 8.59922 14.8059 8.75391 14.8938 8.8855C14.9817 9.0171 15.1066 9.11969 15.2527 9.18029C15.3989 9.2409 15.5597 9.25681 15.7149 9.226C15.8701 9.1952 16.0127 9.11906 16.1247 9.00722C16.2366 8.89539 16.3128 8.75287 16.3438 8.5977C16.3747 8.44253 16.3589 8.28167 16.2984 8.13546C16.2379 7.98926 16.1355 7.86427 16.0039 7.77631C15.8724 7.68836 15.7177 7.64138 15.5595 7.64131H15.5592C15.3471 7.64141 15.1437 7.72569 14.9937 7.87562C14.8437 8.02556 14.7593 8.22891 14.7591 8.44099ZM9.30682 17.4265C8.65682 17.3969 8.30353 17.2886 8.06875 17.1972C7.75748 17.076 7.53539 16.9317 7.30189 16.6985C7.06839 16.4653 6.92385 16.2434 6.8032 15.9322C6.71168 15.6975 6.60341 15.3441 6.57386 14.6942C6.54154 13.9914 6.53509 13.7804 6.53509 12C6.53509 10.2197 6.54207 10.0092 6.57386 9.3059C6.60346 8.65593 6.71253 8.30323 6.8032 8.06787C6.92438 7.75662 7.06871 7.53454 7.30189 7.30105C7.53507 7.06755 7.75695 6.92302 8.06875 6.80238C8.30342 6.71086 8.65682 6.60259 9.30682 6.57305C10.0096 6.54073 10.2207 6.53427 12.0003 6.53427C13.7799 6.53427 13.9912 6.54126 14.6945 6.57305C15.3445 6.60265 15.6972 6.71171 15.9326 6.80238C16.2438 6.92302 16.4659 7.06787 16.6994 7.30105C16.9329 7.53422 17.0769 7.75662 17.1981 8.06787C17.2896 8.30254 17.3979 8.65593 17.4275 9.3059C17.4598 10.0092 17.4662 10.2197 17.4662 12C17.4662 13.7804 17.4598 13.9909 17.4275 14.6942C17.3979 15.3441 17.2891 15.6974 17.1981 15.9322C17.0769 16.2434 16.9326 16.4655 16.6994 16.6985C16.4663 16.9314 16.2438 17.076 15.9326 17.1972C15.6979 17.2887 15.3445 17.3969 14.6945 17.4265C13.9918 17.4588 13.7807 17.4653 12.0003 17.4653C10.2199 17.4653 10.0094 17.4588 9.30682 17.4265ZM9.25162 5.37369C8.54189 5.40601 8.05691 5.51854 7.63337 5.68334C7.19474 5.85353 6.82342 6.08185 6.45236 6.4523C6.08131 6.82275 5.85357 7.19465 5.68337 7.63326C5.51857 8.05705 5.40603 8.54174 5.37371 9.25145C5.34085 9.96227 5.33333 10.1895 5.33333 12C5.33333 13.8104 5.34085 14.0377 5.37371 14.7485C5.40603 15.4583 5.51857 15.9429 5.68337 16.3667C5.85357 16.805 6.08136 17.1774 6.45236 17.5477C6.82336 17.918 7.19474 18.146 7.63337 18.3166C8.05771 18.4814 8.54189 18.594 9.25162 18.6263C9.96285 18.6586 10.1897 18.6666 12.0003 18.6666C13.8108 18.6666 14.0381 18.6591 14.7489 18.6263C15.4587 18.594 15.9434 18.4814 16.3672 18.3166C16.8055 18.146 17.1771 17.9181 17.5482 17.5477C17.9192 17.1772 18.1465 16.805 18.3172 16.3667C18.482 15.9429 18.595 15.4582 18.6268 14.7485C18.6591 14.0372 18.6667 13.8104 18.6667 12C18.6667 10.1895 18.6591 9.96227 18.6268 9.25145C18.5945 8.54169 18.482 8.05678 18.3172 7.63326C18.1465 7.19491 17.9186 6.82334 17.5482 6.4523C17.1777 6.08126 16.8055 5.85353 16.3677 5.68334C15.9434 5.51854 15.4586 5.40547 14.7494 5.37369C14.0386 5.34137 13.8113 5.33331 12.0008 5.33331C10.1903 5.33331 9.96285 5.34083 9.25162 5.37369Z"
                                fill="#757782"
                              />
                            </g>
                          </g>
                        </svg>
                      </div>
                      <div className="telegram">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6.2041 11.9253C9.60427 10.42 11.8716 9.4276 13.006 8.94812C16.2452 7.57913 16.9182 7.34133 17.3569 7.33339C17.4534 7.33175 17.6691 7.35604 17.8089 7.47127C17.9269 7.56856 17.9593 7.69998 17.9749 7.79223C17.9904 7.88447 18.0097 8.0946 17.9944 8.25879C17.8188 10.1328 17.0593 14.6806 16.6729 16.7796C16.5094 17.6678 16.1875 17.9656 15.8758 17.9947C15.1985 18.058 14.6842 17.5398 14.0282 17.1029C13.0016 16.4191 12.4217 15.9935 11.4252 15.3262C10.2737 14.5551 11.0202 14.1313 11.6765 13.4387C11.8482 13.2574 14.8325 10.4991 14.8903 10.2489C14.8975 10.2176 14.9042 10.101 14.836 10.0394C14.7678 9.9778 14.6672 9.99886 14.5945 10.0156C14.4916 10.0394 12.8516 11.1408 9.67475 13.3199C9.20926 13.6447 8.78764 13.8029 8.40987 13.7946C7.99342 13.7855 7.19234 13.5554 6.59682 13.3586C5.86638 13.1174 5.28585 12.9898 5.3364 12.5801C5.36273 12.3667 5.65196 12.1484 6.2041 11.9253Z"
                            fill="#757782"
                          />
                        </svg>
                      </div>
                      <div className="facebook">
                        <svg
                          width="24"
                          height="14"
                          viewBox="0 0 8 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M4.75992 13.6666V7.58461H6.92201L7.24571 5.21436H4.75992V3.70103C4.75992 3.0148 4.96176 2.5471 6.00404 2.5471L7.33333 2.54652V0.426608C7.10333 0.397828 6.31431 0.333313 5.39633 0.333313C3.47979 0.333313 2.16769 1.43786 2.16769 3.46641V5.21442H0V7.58467H2.16762V13.6666L4.75992 13.6666Z"
                            fill="#757782"
                          />
                        </svg>
                      </div>
                    </div>
                  </span>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="CardTeacher">
                <div className="TeachersImg">
                  <img src={Murod} alt="" />
                </div>
                <div className="TeachersBody">
                  <div className="textCenter">
                    <h2>Murod Safarov</h2>
                    <h6>Python</h6>
                  </div>
                  <p>
                    Murod Safarov 3 yildan ortiq tajriba ega mutahhasis
                    hisoblanadi. 20dan ortiq proyektlarda ishtrok etgan. Skilbox
                    va EDX platformalaridan sertefikatlarga ega.
                  </p>
                  <span>
                    <h5>Tajriba: +3 yil</h5>
                    <div className="TeachersNerworks">
                      <div className="instagram">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g id="Instagram">
                            <g id="Instagram_2">
                              <path
                                id="Vector"
                                d="M9.77831 12C9.77831 10.7727 10.773 9.77758 12.0003 9.77758C13.2276 9.77758 14.2228 10.7727 14.2228 12C14.2228 13.2272 13.2276 14.2224 12.0003 14.2224C10.773 14.2224 9.77831 13.2272 9.77831 12ZM8.57688 12C8.57688 13.8906 10.1095 15.4232 12.0003 15.4232C13.891 15.4232 15.4237 13.8906 15.4237 12C15.4237 10.1093 13.891 8.57673 12.0003 8.57673C10.1095 8.57673 8.57688 10.1093 8.57688 12ZM14.7591 8.44099C14.7591 8.59922 14.8059 8.75391 14.8938 8.8855C14.9817 9.0171 15.1066 9.11969 15.2527 9.18029C15.3989 9.2409 15.5597 9.25681 15.7149 9.226C15.8701 9.1952 16.0127 9.11906 16.1247 9.00722C16.2366 8.89539 16.3128 8.75287 16.3438 8.5977C16.3747 8.44253 16.3589 8.28167 16.2984 8.13546C16.2379 7.98926 16.1355 7.86427 16.0039 7.77631C15.8724 7.68836 15.7177 7.64138 15.5595 7.64131H15.5592C15.3471 7.64141 15.1437 7.72569 14.9937 7.87562C14.8437 8.02556 14.7593 8.22891 14.7591 8.44099ZM9.30682 17.4265C8.65682 17.3969 8.30353 17.2886 8.06875 17.1972C7.75748 17.076 7.53539 16.9317 7.30189 16.6985C7.06839 16.4653 6.92385 16.2434 6.8032 15.9322C6.71168 15.6975 6.60341 15.3441 6.57386 14.6942C6.54154 13.9914 6.53509 13.7804 6.53509 12C6.53509 10.2197 6.54207 10.0092 6.57386 9.3059C6.60346 8.65593 6.71253 8.30323 6.8032 8.06787C6.92438 7.75662 7.06871 7.53454 7.30189 7.30105C7.53507 7.06755 7.75695 6.92302 8.06875 6.80238C8.30342 6.71086 8.65682 6.60259 9.30682 6.57305C10.0096 6.54073 10.2207 6.53427 12.0003 6.53427C13.7799 6.53427 13.9912 6.54126 14.6945 6.57305C15.3445 6.60265 15.6972 6.71171 15.9326 6.80238C16.2438 6.92302 16.4659 7.06787 16.6994 7.30105C16.9329 7.53422 17.0769 7.75662 17.1981 8.06787C17.2896 8.30254 17.3979 8.65593 17.4275 9.3059C17.4598 10.0092 17.4662 10.2197 17.4662 12C17.4662 13.7804 17.4598 13.9909 17.4275 14.6942C17.3979 15.3441 17.2891 15.6974 17.1981 15.9322C17.0769 16.2434 16.9326 16.4655 16.6994 16.6985C16.4663 16.9314 16.2438 17.076 15.9326 17.1972C15.6979 17.2887 15.3445 17.3969 14.6945 17.4265C13.9918 17.4588 13.7807 17.4653 12.0003 17.4653C10.2199 17.4653 10.0094 17.4588 9.30682 17.4265ZM9.25162 5.37369C8.54189 5.40601 8.05691 5.51854 7.63337 5.68334C7.19474 5.85353 6.82342 6.08185 6.45236 6.4523C6.08131 6.82275 5.85357 7.19465 5.68337 7.63326C5.51857 8.05705 5.40603 8.54174 5.37371 9.25145C5.34085 9.96227 5.33333 10.1895 5.33333 12C5.33333 13.8104 5.34085 14.0377 5.37371 14.7485C5.40603 15.4583 5.51857 15.9429 5.68337 16.3667C5.85357 16.805 6.08136 17.1774 6.45236 17.5477C6.82336 17.918 7.19474 18.146 7.63337 18.3166C8.05771 18.4814 8.54189 18.594 9.25162 18.6263C9.96285 18.6586 10.1897 18.6666 12.0003 18.6666C13.8108 18.6666 14.0381 18.6591 14.7489 18.6263C15.4587 18.594 15.9434 18.4814 16.3672 18.3166C16.8055 18.146 17.1771 17.9181 17.5482 17.5477C17.9192 17.1772 18.1465 16.805 18.3172 16.3667C18.482 15.9429 18.595 15.4582 18.6268 14.7485C18.6591 14.0372 18.6667 13.8104 18.6667 12C18.6667 10.1895 18.6591 9.96227 18.6268 9.25145C18.5945 8.54169 18.482 8.05678 18.3172 7.63326C18.1465 7.19491 17.9186 6.82334 17.5482 6.4523C17.1777 6.08126 16.8055 5.85353 16.3677 5.68334C15.9434 5.51854 15.4586 5.40547 14.7494 5.37369C14.0386 5.34137 13.8113 5.33331 12.0008 5.33331C10.1903 5.33331 9.96285 5.34083 9.25162 5.37369Z"
                                fill="#757782"
                              />
                            </g>
                          </g>
                        </svg>
                      </div>

                      <div className="telegram">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6.2041 11.9253C9.60427 10.42 11.8716 9.4276 13.006 8.94812C16.2452 7.57913 16.9182 7.34133 17.3569 7.33339C17.4534 7.33175 17.6691 7.35604 17.8089 7.47127C17.9269 7.56856 17.9593 7.69998 17.9749 7.79223C17.9904 7.88447 18.0097 8.0946 17.9944 8.25879C17.8188 10.1328 17.0593 14.6806 16.6729 16.7796C16.5094 17.6678 16.1875 17.9656 15.8758 17.9947C15.1985 18.058 14.6842 17.5398 14.0282 17.1029C13.0016 16.4191 12.4217 15.9935 11.4252 15.3262C10.2737 14.5551 11.0202 14.1313 11.6765 13.4387C11.8482 13.2574 14.8325 10.4991 14.8903 10.2489C14.8975 10.2176 14.9042 10.101 14.836 10.0394C14.7678 9.9778 14.6672 9.99886 14.5945 10.0156C14.4916 10.0394 12.8516 11.1408 9.67475 13.3199C9.20926 13.6447 8.78764 13.8029 8.40987 13.7946C7.99342 13.7855 7.19234 13.5554 6.59682 13.3586C5.86638 13.1174 5.28585 12.9898 5.3364 12.5801C5.36273 12.3667 5.65196 12.1484 6.2041 11.9253Z"
                            fill="#757782"
                          />
                        </svg>
                      </div>

                      <div className="facebook">
                        <svg
                          width="24"
                          height="14"
                          viewBox="0 0 8 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M4.75992 13.6666V7.58461H6.92201L7.24571 5.21436H4.75992V3.70103C4.75992 3.0148 4.96176 2.5471 6.00404 2.5471L7.33333 2.54652V0.426608C7.10333 0.397828 6.31431 0.333313 5.39633 0.333313C3.47979 0.333313 2.16769 1.43786 2.16769 3.46641V5.21442H0V7.58467H2.16762V13.6666L4.75992 13.6666Z"
                            fill="#757782"
                          />
                        </svg>
                      </div>
                    </div>
                  </span>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="CardTeacher">
                <div className="TeachersImg">
                  <img src={Akobir} alt="" />
                </div>
                <div className="TeachersBody">
                  <div className="textCenter">
                    <h2>Akobir Nozimov</h2>
                    <h6>.Net</h6>
                  </div>
                  <p>
                    Akobir Nozimov 4 yillik tajribaga ega mutahhasis. 3 yillik
                    EPAM xalqaro autsors kompaniyasida tajribasi bor.{" "}
                  </p>
                  <span>
                    <h5>Tajriba: +4 yil</h5>
                    <div className="TeachersNerworks">
                      <div className="instagram">
                        <svg
                          width="28"
                          height="38"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g id="Instagram">
                            <g id="Instagram_2">
                              <path
                                id="Vector"
                                d="M9.77831 12C9.77831 10.7727 10.773 9.77758 12.0003 9.77758C13.2276 9.77758 14.2228 10.7727 14.2228 12C14.2228 13.2272 13.2276 14.2224 12.0003 14.2224C10.773 14.2224 9.77831 13.2272 9.77831 12ZM8.57688 12C8.57688 13.8906 10.1095 15.4232 12.0003 15.4232C13.891 15.4232 15.4237 13.8906 15.4237 12C15.4237 10.1093 13.891 8.57673 12.0003 8.57673C10.1095 8.57673 8.57688 10.1093 8.57688 12ZM14.7591 8.44099C14.7591 8.59922 14.8059 8.75391 14.8938 8.8855C14.9817 9.0171 15.1066 9.11969 15.2527 9.18029C15.3989 9.2409 15.5597 9.25681 15.7149 9.226C15.8701 9.1952 16.0127 9.11906 16.1247 9.00722C16.2366 8.89539 16.3128 8.75287 16.3438 8.5977C16.3747 8.44253 16.3589 8.28167 16.2984 8.13546C16.2379 7.98926 16.1355 7.86427 16.0039 7.77631C15.8724 7.68836 15.7177 7.64138 15.5595 7.64131H15.5592C15.3471 7.64141 15.1437 7.72569 14.9937 7.87562C14.8437 8.02556 14.7593 8.22891 14.7591 8.44099ZM9.30682 17.4265C8.65682 17.3969 8.30353 17.2886 8.06875 17.1972C7.75748 17.076 7.53539 16.9317 7.30189 16.6985C7.06839 16.4653 6.92385 16.2434 6.8032 15.9322C6.71168 15.6975 6.60341 15.3441 6.57386 14.6942C6.54154 13.9914 6.53509 13.7804 6.53509 12C6.53509 10.2197 6.54207 10.0092 6.57386 9.3059C6.60346 8.65593 6.71253 8.30323 6.8032 8.06787C6.92438 7.75662 7.06871 7.53454 7.30189 7.30105C7.53507 7.06755 7.75695 6.92302 8.06875 6.80238C8.30342 6.71086 8.65682 6.60259 9.30682 6.57305C10.0096 6.54073 10.2207 6.53427 12.0003 6.53427C13.7799 6.53427 13.9912 6.54126 14.6945 6.57305C15.3445 6.60265 15.6972 6.71171 15.9326 6.80238C16.2438 6.92302 16.4659 7.06787 16.6994 7.30105C16.9329 7.53422 17.0769 7.75662 17.1981 8.06787C17.2896 8.30254 17.3979 8.65593 17.4275 9.3059C17.4598 10.0092 17.4662 10.2197 17.4662 12C17.4662 13.7804 17.4598 13.9909 17.4275 14.6942C17.3979 15.3441 17.2891 15.6974 17.1981 15.9322C17.0769 16.2434 16.9326 16.4655 16.6994 16.6985C16.4663 16.9314 16.2438 17.076 15.9326 17.1972C15.6979 17.2887 15.3445 17.3969 14.6945 17.4265C13.9918 17.4588 13.7807 17.4653 12.0003 17.4653C10.2199 17.4653 10.0094 17.4588 9.30682 17.4265ZM9.25162 5.37369C8.54189 5.40601 8.05691 5.51854 7.63337 5.68334C7.19474 5.85353 6.82342 6.08185 6.45236 6.4523C6.08131 6.82275 5.85357 7.19465 5.68337 7.63326C5.51857 8.05705 5.40603 8.54174 5.37371 9.25145C5.34085 9.96227 5.33333 10.1895 5.33333 12C5.33333 13.8104 5.34085 14.0377 5.37371 14.7485C5.40603 15.4583 5.51857 15.9429 5.68337 16.3667C5.85357 16.805 6.08136 17.1774 6.45236 17.5477C6.82336 17.918 7.19474 18.146 7.63337 18.3166C8.05771 18.4814 8.54189 18.594 9.25162 18.6263C9.96285 18.6586 10.1897 18.6666 12.0003 18.6666C13.8108 18.6666 14.0381 18.6591 14.7489 18.6263C15.4587 18.594 15.9434 18.4814 16.3672 18.3166C16.8055 18.146 17.1771 17.9181 17.5482 17.5477C17.9192 17.1772 18.1465 16.805 18.3172 16.3667C18.482 15.9429 18.595 15.4582 18.6268 14.7485C18.6591 14.0372 18.6667 13.8104 18.6667 12C18.6667 10.1895 18.6591 9.96227 18.6268 9.25145C18.5945 8.54169 18.482 8.05678 18.3172 7.63326C18.1465 7.19491 17.9186 6.82334 17.5482 6.4523C17.1777 6.08126 16.8055 5.85353 16.3677 5.68334C15.9434 5.51854 15.4586 5.40547 14.7494 5.37369C14.0386 5.34137 13.8113 5.33331 12.0008 5.33331C10.1903 5.33331 9.96285 5.34083 9.25162 5.37369Z"
                                fill="#757782"
                              />
                            </g>
                          </g>
                        </svg>
                      </div>

                      <div className="telegram">
                        <svg
                          width="28"
                          height="38"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6.2041 11.9253C9.60427 10.42 11.8716 9.4276 13.006 8.94812C16.2452 7.57913 16.9182 7.34133 17.3569 7.33339C17.4534 7.33175 17.6691 7.35604 17.8089 7.47127C17.9269 7.56856 17.9593 7.69998 17.9749 7.79223C17.9904 7.88447 18.0097 8.0946 17.9944 8.25879C17.8188 10.1328 17.0593 14.6806 16.6729 16.7796C16.5094 17.6678 16.1875 17.9656 15.8758 17.9947C15.1985 18.058 14.6842 17.5398 14.0282 17.1029C13.0016 16.4191 12.4217 15.9935 11.4252 15.3262C10.2737 14.5551 11.0202 14.1313 11.6765 13.4387C11.8482 13.2574 14.8325 10.4991 14.8903 10.2489C14.8975 10.2176 14.9042 10.101 14.836 10.0394C14.7678 9.9778 14.6672 9.99886 14.5945 10.0156C14.4916 10.0394 12.8516 11.1408 9.67475 13.3199C9.20926 13.6447 8.78764 13.8029 8.40987 13.7946C7.99342 13.7855 7.19234 13.5554 6.59682 13.3586C5.86638 13.1174 5.28585 12.9898 5.3364 12.5801C5.36273 12.3667 5.65196 12.1484 6.2041 11.9253Z"
                            fill="#757782"
                          />
                        </svg>
                      </div>
                      <div className="facebook">
                        <svg
                          className="nimadur"
                          width="28"
                          height="18"
                          viewBox="0 0 8 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M4.75992 13.6666V7.58461H6.92201L7.24571 5.21436H4.75992V3.70103C4.75992 3.0148 4.96176 2.5471 6.00404 2.5471L7.33333 2.54652V0.426608C7.10333 0.397828 6.31431 0.333313 5.39633 0.333313C3.47979 0.333313 2.16769 1.43786 2.16769 3.46641V5.21442H0V7.58467H2.16762V13.6666L4.75992 13.6666Z"
                            fill="#757782"
                          />
                        </svg>
                      </div>
                    </div>
                  </span>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>


    </>
  );
};

export default Teachers;
