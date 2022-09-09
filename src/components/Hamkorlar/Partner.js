import React from "react";
import "./Partner.scss";
import google from "../../images/google.png";
import netflix from "../../images/netflix.png";
import visa from "../../images/visa.png";
import paypal from "../../images/paypal.png";
import ibm from "../../images/ibm.png";

const Partner = () => {
  return (
    <>
      <div className="Partners">
        <div className="container">
          <h6 className="PartnersSmallTitle">Hamkorlar</h6>
          <h1 className="PartnersTitle">Bizning hamkorlarimiz</h1>
        </div>
        <div className="PartnersLogos">
          <img src={google} alt={google} />
          <img src={visa} alt={visa} />
          <img src={paypal} alt={paypal} />
          <img src={ibm} alt={ibm} />
          <img src={netflix} alt={netflix} />
        </div>
      </div>

      <div className="signUp">
        <div className="signUpbg">
          <div className="container">
            <div className="signUpBox">
              <h6>Registratsiya</h6>
              <h1>Bepul registratsiya</h1>
              <p>Hoziroq ro’yhadan o’ting va istalgan kursni tanlang, operatorlarimiz siz bilan bog’lanib batafsil malumotga ega bo’ling va kelajada talabgir bo’lgan kasb egasiga aylaning!</p>
            </div>
            <div className="signUpbox2">
            <div className="signUpForm">
              <h2>Ro’yhatdan o’tish</h2>

              <form action="">
                <input type="text" placeholder="Ism-sharifingiz" />
                <input type="text" placeholder="Telefon raqamingiz" />
                <textarea rows={5} placeholder="Tekst"></textarea>
              </form>
              <button className="btn">Murojatni yuborish</button>
            </div>
            </div>
          </div>
        </div>

        <div className="signUpText">
          <div className="container">
            <div className="text text1">
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M40 60.6666H24C9.51998 60.6666 3.33331 54.4799 3.33331 39.9999V23.9999C3.33331 9.51992 9.51998 3.33325 24 3.33325H40C54.48 3.33325 60.6666 9.51992 60.6666 23.9999V39.9999C60.6666 54.4799 54.48 60.6666 40 60.6666ZM24 7.33325C11.7066 7.33325 7.33331 11.7066 7.33331 23.9999V39.9999C7.33331 52.2933 11.7066 56.6666 24 56.6666H40C52.2933 56.6666 56.6666 52.2933 56.6666 39.9999V23.9999C56.6666 11.7066 52.2933 7.33325 40 7.33325H24Z" fill="#22A4E2" />
                <path d="M28.6933 43.6533C27.5733 43.6533 26.5333 43.3866 25.6 42.8533C23.4667 41.6266 22.24 39.12 22.24 35.9466V28.0533C22.24 24.9066 23.4667 22.3733 25.6 21.1466C27.7333 19.92 30.5067 20.1066 33.2533 21.7066L40.1067 25.6533C42.8267 27.2266 44.4 29.5466 44.4 32C44.4 34.4533 42.8267 36.7733 40.1067 38.3466L33.2533 42.2933C31.7067 43.2 30.1333 43.6533 28.6933 43.6533ZM28.72 24.3466C28.2933 24.3466 27.92 24.4266 27.6267 24.6133C26.7733 25.12 26.2667 26.3733 26.2667 28.0533V35.9466C26.2667 37.6266 26.7467 38.88 27.6267 39.3866C28.48 39.8933 29.8133 39.68 31.28 38.8266L38.1333 34.88C39.6 34.0266 40.4267 32.9866 40.4267 32C40.4267 31.0133 39.6 29.9466 38.1333 29.12L31.28 25.1733C30.32 24.6133 29.44 24.3466 28.72 24.3466Z" fill="#22A4E2" />

              <svg className="smallChanceImg" width="48" height="48" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M40 60.6666H24C9.51998 60.6666 3.33331 54.4799 3.33331 39.9999V23.9999C3.33331 9.51992 9.51998 3.33325 24 3.33325H40C54.48 3.33325 60.6666 9.51992 60.6666 23.9999V39.9999C60.6666 54.4799 54.48 60.6666 40 60.6666ZM24 7.33325C11.7066 7.33325 7.33331 11.7066 7.33331 23.9999V39.9999C7.33331 52.2933 11.7066 56.6666 24 56.6666H40C52.2933 56.6666 56.6666 52.2933 56.6666 39.9999V23.9999C56.6666 11.7066 52.2933 7.33325 40 7.33325H24Z" fill="#22A4E2" />
                <path d="M28.6933 43.6533C27.5733 43.6533 26.5333 43.3866 25.6 42.8533C23.4667 41.6266 22.24 39.12 22.24 35.9466V28.0533C22.24 24.9066 23.4667 22.3733 25.6 21.1466C27.7333 19.92 30.5067 20.1066 33.2533 21.7066L40.1067 25.6533C42.8267 27.2266 44.4 29.5466 44.4 32C44.4 34.4533 42.8267 36.7733 40.1067 38.3466L33.2533 42.2933C31.7067 43.2 30.1333 43.6533 28.6933 43.6533ZM28.72 24.3466C28.2933 24.3466 27.92 24.4266 27.6267 24.6133C26.7733 25.12 26.2667 26.3733 26.2667 28.0533V35.9466C26.2667 37.6266 26.7467 38.88 27.6267 39.3866C28.48 39.8933 29.8133 39.68 31.28 38.8266L38.1333 34.88C39.6 34.0266 40.4267 32.9866 40.4267 32C40.4267 31.0133 39.6 29.9466 38.1333 29.12L31.28 25.1733C30.32 24.6133 29.44 24.3466 28.72 24.3466Z" fill="#22A4E2" />
              </svg>

              <h4>Barcha darslar yozib olinadi va darsga sababli qatnasha olmaganlarga yuklab beriladi. 🎒</h4>

            </div>
            <div className="text text2">
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24.4256 30.9866C24.3456 30.9866 24.2923 30.9866 24.2123 30.9866C24.0789 30.9599 23.8923 30.9599 23.7323 30.9866C15.9989 30.7466 10.1589 24.6666 10.1589 17.1733C10.1589 9.54659 16.3723 3.33325 23.9989 3.33325C31.6256 3.33325 37.8389 9.54659 37.8389 17.1733C37.8123 24.6666 31.9456 30.7466 24.5056 30.9866C24.4789 30.9866 24.4523 30.9866 24.4256 30.9866ZM23.9989 7.33325C18.5856 7.33325 14.1589 11.7599 14.1589 17.1733C14.1589 22.5066 18.3189 26.7999 23.6256 26.9866C23.7856 26.9599 24.1323 26.9599 24.4789 26.9866C29.7056 26.7466 33.8123 22.4533 33.8389 17.1733C33.8389 11.7599 29.4123 7.33325 23.9989 7.33325Z" fill="#22A4E2" />
                <path d="M44.1056 31.3334C44.0256 31.3334 43.9456 31.3334 43.8656 31.3067C42.7723 31.4134 41.6523 30.6401 41.5456 29.5467C41.439 28.4534 42.1056 27.4667 43.199 27.3334C43.519 27.3067 43.8656 27.3067 44.159 27.3067C48.0523 27.0934 51.0923 23.8934 51.0923 19.9734C51.0923 15.9201 47.8123 12.6401 43.759 12.6401C42.6656 12.6667 41.759 11.7601 41.759 10.6667C41.759 9.57341 42.6656 8.66675 43.759 8.66675C49.999 8.66675 55.0923 13.7601 55.0923 20.0001C55.0923 26.1334 50.2923 31.0934 44.1856 31.3334C44.159 31.3334 44.1323 31.3334 44.1056 31.3334Z" fill="#22A4E2" />
                <path d="M24.4523 60.1334C19.2256 60.1334 13.9723 58.8001 9.99896 56.1334C6.29229 53.6801 4.26562 50.3201 4.26562 46.6667C4.26562 43.0134 6.29229 39.6267 9.99896 37.1467C17.999 31.8401 30.959 31.8401 38.9056 37.1467C42.5856 39.6001 44.639 42.9601 44.639 46.6134C44.639 50.2667 42.6123 53.6534 38.9056 56.1334C34.9056 58.8001 29.679 60.1334 24.4523 60.1334ZM12.2123 40.5067C9.65229 42.2134 8.26562 44.4001 8.26562 46.6934C8.26562 48.9601 9.67896 51.1467 12.2123 52.8267C18.8523 57.2801 30.0523 57.2801 36.6923 52.8267C39.2523 51.1201 40.639 48.9334 40.639 46.6401C40.639 44.3734 39.2256 42.1867 36.6923 40.5067C30.0523 36.0801 18.8523 36.0801 12.2123 40.5067Z" fill="#22A4E2" />
                <path d="M48.9056 55.3334C47.9723 55.3334 47.1456 54.6934 46.959 53.7334C46.7456 52.64 47.439 51.6 48.5056 51.3601C50.1856 51.0134 51.7323 50.3467 52.9323 49.4134C54.4523 48.2667 55.279 46.8267 55.279 45.3067C55.279 43.7867 54.4523 42.3467 52.959 41.2267C51.7856 40.3201 50.319 39.68 48.5856 39.28C47.519 39.04 46.8256 37.9734 47.0656 36.88C47.3056 35.8134 48.3723 35.1201 49.4656 35.3601C51.759 35.8667 53.759 36.7734 55.3856 38.0267C57.8656 39.8934 59.279 42.5334 59.279 45.3067C59.279 48.08 57.839 50.72 55.359 52.6134C53.7056 53.8934 51.6256 54.8267 49.3323 55.28C49.1723 55.3334 49.039 55.3334 48.9056 55.3334Z" fill="#22A4E2" />
              </svg>

              <svg className="smallChanceImg" width="48" height="48" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24.4256 30.9866C24.3456 30.9866 24.2923 30.9866 24.2123 30.9866C24.0789 30.9599 23.8923 30.9599 23.7323 30.9866C15.9989 30.7466 10.1589 24.6666 10.1589 17.1733C10.1589 9.54659 16.3723 3.33325 23.9989 3.33325C31.6256 3.33325 37.8389 9.54659 37.8389 17.1733C37.8123 24.6666 31.9456 30.7466 24.5056 30.9866C24.4789 30.9866 24.4523 30.9866 24.4256 30.9866ZM23.9989 7.33325C18.5856 7.33325 14.1589 11.7599 14.1589 17.1733C14.1589 22.5066 18.3189 26.7999 23.6256 26.9866C23.7856 26.9599 24.1323 26.9599 24.4789 26.9866C29.7056 26.7466 33.8123 22.4533 33.8389 17.1733C33.8389 11.7599 29.4123 7.33325 23.9989 7.33325Z" fill="#22A4E2" />
                <path d="M44.1056 31.3334C44.0256 31.3334 43.9456 31.3334 43.8656 31.3067C42.7723 31.4134 41.6523 30.6401 41.5456 29.5467C41.439 28.4534 42.1056 27.4667 43.199 27.3334C43.519 27.3067 43.8656 27.3067 44.159 27.3067C48.0523 27.0934 51.0923 23.8934 51.0923 19.9734C51.0923 15.9201 47.8123 12.6401 43.759 12.6401C42.6656 12.6667 41.759 11.7601 41.759 10.6667C41.759 9.57341 42.6656 8.66675 43.759 8.66675C49.999 8.66675 55.0923 13.7601 55.0923 20.0001C55.0923 26.1334 50.2923 31.0934 44.1856 31.3334C44.159 31.3334 44.1323 31.3334 44.1056 31.3334Z" fill="#22A4E2" />
                <path d="M24.4523 60.1334C19.2256 60.1334 13.9723 58.8001 9.99896 56.1334C6.29229 53.6801 4.26562 50.3201 4.26562 46.6667C4.26562 43.0134 6.29229 39.6267 9.99896 37.1467C17.999 31.8401 30.959 31.8401 38.9056 37.1467C42.5856 39.6001 44.639 42.9601 44.639 46.6134C44.639 50.2667 42.6123 53.6534 38.9056 56.1334C34.9056 58.8001 29.679 60.1334 24.4523 60.1334ZM12.2123 40.5067C9.65229 42.2134 8.26562 44.4001 8.26562 46.6934C8.26562 48.9601 9.67896 51.1467 12.2123 52.8267C18.8523 57.2801 30.0523 57.2801 36.6923 52.8267C39.2523 51.1201 40.639 48.9334 40.639 46.6401C40.639 44.3734 39.2256 42.1867 36.6923 40.5067C30.0523 36.0801 18.8523 36.0801 12.2123 40.5067Z" fill="#22A4E2" />
                <path d="M48.9056 55.3334C47.9723 55.3334 47.1456 54.6934 46.959 53.7334C46.7456 52.64 47.439 51.6 48.5056 51.3601C50.1856 51.0134 51.7323 50.3467 52.9323 49.4134C54.4523 48.2667 55.279 46.8267 55.279 45.3067C55.279 43.7867 54.4523 42.3467 52.959 41.2267C51.7856 40.3201 50.319 39.68 48.5856 39.28C47.519 39.04 46.8256 37.9734 47.0656 36.88C47.3056 35.8134 48.3723 35.1201 49.4656 35.3601C51.759 35.8667 53.759 36.7734 55.3856 38.0267C57.8656 39.8934 59.279 42.5334 59.279 45.3067C59.279 48.08 57.839 50.72 55.359 52.6134C53.7056 53.8934 51.6256 54.8267 49.3323 55.28C49.1723 55.3334 49.039 55.3334 48.9056 55.3334Z" fill="#22A4E2" />
              </svg>
              <h4>Ota-onalar yoki ularning o’rinini bosuvchilar bilan doimiy aloqa va habarlov tizimi yo’lga qo’yilgan. 👀</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Partner;