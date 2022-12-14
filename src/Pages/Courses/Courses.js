import React, { useState } from "react";
import "./Courses.scss";
import Rating from "@mui/material/Rating";
import CountUp from "react-countup";
import cardImg1 from "../../assets/images/cardImg1.png";
import cardImg2 from "../../assets/images/cardImg2.png";
import cardImg3 from "../../assets/images/cardImg3.png";
import cardImg4 from "../../assets/images/cardImg4.png";
import cardImg5 from "../../assets/images/cardImg5.png";
import cardImg6 from "../../assets/images/cardImg6.png";
import Akobir from "../../assets/images/Akobir.png";
import Hasan from "../../assets/images/Hasan.png";
import Murod from "../../assets/images/Murod.png";
import Nafisa from "../../assets/images/Nafisa.png";
import playBtn from "../../assets/images/playBtn.png";
import V7171 from "../../assets/video/FinTech.mp4";
import ScrollTrigger from "react-scroll-trigger";
import { useNavigate } from "react-router-dom";

const Courses = () => {
  const [counterOn, setCounterOn] = useState(false);
  const navigate = useNavigate();

  const coursesBtn = () => {
    navigate(`/`);
  };

  return (
    <>
      {/* <div className="Courses">
                <div className="container">
                    <h6 className='CourseActive'>Kurslar</h6>
                    <h1 className='CourseTitle'>Kurslarimiz bilan tanishing</h1>
                    <div className="CoursesBoxs">
                        <div className="CourseCard">
                            <div className="cardImg">
                                <img src={cardImg1} alt="" />
                            </div>
                            <div className="CoursesBoxDesk">
                                <div className="cardBody">
                                    <img src={Nafisa} alt="" />
                                    <h6>Nafisa Xamrayeva</h6>
                                    <h2>Frontend Development</h2>
                                    <Rating name="half-rating" defaultValue={5} precision={0.5} />
                                    <h5>1.200.000 so’m</h5>
                                </div>
                                <div className="CardFooter">
                                    <ul>
                                        <li>72 ta dars</li>
                                        <span className='line'></span>
                                        <li>Boshlang’ich</li>
                                        <span className="line"></span>
                                        <li>2,5 soat/dars</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="CourseCard">
                            <div className="cardImg">
                                <img src={cardImg2} alt="" />
                            </div>
                            <div className="CoursesBoxDesk">
                                <div className="cardBody">
                                    <img src={Hasan} alt="" />
                                    <h6>Hasan Ramazonov</h6>
                                    <h2>Backend Development</h2>
                                    <Rating name="half-rating" defaultValue={5} precision={0.5} />
                                    <h5>1.200.000 so’m</h5>
                                </div>
                                <div className="CardFooter">
                                    <ul>
                                        <li>72 ta dars</li>
                                        <span className="line"></span>
                                        <li>Boshlang’ich</li>
                                        <span className="line"></span>
                                        <li>2,5 soat/dars</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="CourseCard">
                            <div className="cardImg">
                                <img src={cardImg3} alt="" />
                            </div>
                            <div className="CoursesBoxDesk">
                                <div className="cardBody">
                                    <img src={Murod} alt="" />
                                    <h6>Murod Safarov</h6>
                                    <h2>Python</h2>
                                    <Rating name="half-rating" defaultValue={5} precision={0.5} />
                                    <h5>1.350.000 so’m</h5>
                                </div>
                                <div className="CardFooter">
                                    <ul>
                                        <li>72 ta dars</li>
                                        <span className="line"></span>
                                        <li>Boshlang’ich</li>
                                        <span className="line"></span>
                                        <li>2,5 soat/dars</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="CourseCard">
                            <div className="cardImg">
                                <img src={cardImg4} alt="" />
                            </div>
                            <div className="CoursesBoxDesk">
                                <div className="cardBody">
                                    <img src={Akobir} alt="" />
                                    <h6>Akobir Nozimov</h6>
                                    <h2>.Net</h2>
                                    <Rating name="half-rating" defaultValue={5} precision={0.5} />
                                    <h5>1.500.000 so’m</h5>
                                </div>
                                <div className="CardFooter">
                                    <ul>
                                        <li>72 ta dars</li>
                                        <span className="line"></span>
                                        <li>Boshlang’ich</li>
                                        <span className="line"></span>
                                        <li>2,5 soat/dars</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="CourseCard">
                            <div className="cardImg">
                                <img src={cardImg5} alt="" />
                            </div>
                            <div className="CoursesBoxDesk">
                                <div className="cardBody">
                                    <img src={Murod} alt="" />
                                    <h6>Murod Safarov</h6>
                                    <h2>DevOps</h2>
                                    <Rating name="half-rating" defaultValue={5} precision={0.5} />
                                    <h5>1.200.000 so’m</h5>
                                </div>
                                <div className="CardFooter">
                                    <ul>
                                        <li>72 ta dars</li>
                                        <span className="line"></span>
                                        <li>Boshlang’ich</li>
                                        <span className="line"></span>
                                        <li>2,5 soat/dars</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="CourseCard">
                            <div className="cardImg">
                                <img src={cardImg6} alt="" />
                            </div>
                            <div className="CoursesBoxDesk">
                                <div className="cardBody">
                                    <img src={Nafisa} alt="" />
                                    <h6>Nafisa Xamrayeva</h6>
                                    <h2>React Development</h2>
                                    <Rating name="half-rating" defaultValue={5} precision={0.5} />
                                    <h5>1.200.000 so’m</h5>
                                </div>
                                <div className="CardFooter">
                                    <ul>
                                        <li>72 ta dars</li>
                                        <span className="line"></span>
                                        <li>Boshlang’ich</li>
                                        <span className="line"></span>
                                        <li>2,5 soat/dars</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
      {/* ``````````````` */}
      <div className="container">
        <div className="row">
          <div onClick={coursesBtn} className="CoursesBoxs">
            <div className="column">
              <div className="card">
                <div className="content">
                  <div className="front">
                    <img
                      className="profile"
                      width="100%"
                      src={cardImg1}
                      alt={Hasan}
                    />
                    <h3>Frontend Development</h3>
                  </div>
                  <d iv className="back from-bottom">
                    <img className="tem-img" src={Nafisa} alt="Nafisa" /> &nbsp;
                    <h2>Nafisa Xamrayeva</h2>
                    <h3>Frontend Development</h3>
                    <Rating
                      name="half-rating"
                      defaultValue={5}
                      precision={0.5}
                    />
                    <h3>1.200.000 so’m</h3>
                    {/* <!-- <img className="tem-img" src="Hasan.png" alt=""> <br> --> */}
                    <p className="des">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Amet, itaque.
                    </p>
                    <ul className="social-icon">
                      <li>72 ta dars</li>
                      <span className="line"></span>
                      <li>Boshlang’ich</li>
                      <span className="line"></span>
                      <li>2,5 soat/dars</li>
                    </ul>
                  </d>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="card">
                <div className="content">
                  <div className="front">
                    <img
                      className="profile"
                      width="100%"
                      src={cardImg2}
                      alt={Hasan}
                    />
                    <h3>Backend Development</h3>
                  </div>
                  <d iv className="back from-bottom">
                    <img className="tem-img" src={Hasan} alt="hasan" /> &nbsp;
                    <h2>Hasan Ramazonov</h2>
                    <h3>Backend Development</h3>
                    <Rating
                      name="half-rating"
                      defaultValue={5}
                      precision={0.5}
                    />
                    <h3>1.200.000 so’m</h3>
                    {/* <!-- <img className="tem-img" src="Hasan.png" alt=""> <br> --> */}
                    <p className="des">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Amet, itaque.
                    </p>
                    <ul className="social-icon">
                      <li>72 ta dars</li>
                      <span className="line"></span>
                      <li>Boshlang’ich</li>
                      <span className="line"></span>
                      <li>2,5 soat/dars</li>
                    </ul>
                  </d>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="card">
                <div className="content">
                  <div className="front">
                    <img
                      className="profile"
                      width="100%"
                      src={cardImg3}
                      alt={Hasan}
                    />
                    <h3>Python</h3>
                  </div>
                  <d iv className="back from-bottom">
                    <img className="tem-img" src={Murod} alt="Murod" /> &nbsp;
                    <h2>Murod Safarov</h2>
                    <h3>Python</h3>
                    <Rating
                      name="half-rating"
                      defaultValue={5}
                      precision={0.5}
                    />
                    <h3>1.350.000 so’m</h3>
                    {/* <!-- <img className="tem-img" src="Hasan.png" alt=""> <br> --> */}
                    <p className="des">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Amet, itaque.
                    </p>
                    <ul className="social-icon">
                      <li>72 ta dars</li>
                      <span className="line"></span>
                      <li>Boshlang’ich</li>
                      <span className="line"></span>
                      <li>2,5 soat/dars</li>
                    </ul>
                  </d>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="card">
                <div className="content">
                  <div className="front">
                    <img
                      className="profile"
                      width="100%"
                      src={cardImg4}
                      alt={Hasan}
                    />
                    <h3>.Net</h3>
                  </div>
                  <d iv className="back from-bottom">
                    <img className="tem-img" src={Akobir} alt="Akobir" /> &nbsp;
                    <h2>Akobir Nozimov</h2>
                    <h3>.Net</h3>
                    <Rating
                      name="half-rating"
                      defaultValue={5}
                      precision={0.5}
                    />
                    <h3>1.500.000 so’m</h3>
                    {/* <!-- <img className="tem-img" src="Hasan.png" alt=""> <br> --> */}
                    <p className="des">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Amet, itaque.
                    </p>
                    <ul className="social-icon">
                      <li>72 ta dars</li>
                      <span className="line"></span>
                      <li>Boshlang’ich</li>
                      <span className="line"></span>
                      <li>2,5 soat/dars</li>
                    </ul>
                  </d>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="card">
                <div className="content">
                  <div className="front">
                    <img
                      className="profile"
                      width="100%"
                      src={cardImg5}
                      alt={Hasan}
                    />
                    <h3>DevOps</h3>
                  </div>
                  <d iv className="back from-bottom">
                    <img className="tem-img" src={Murod} alt="Murod" /> &nbsp;
                    <h2>Murod Safarov</h2>
                    <h3>DevOps</h3>
                    <Rating
                      name="half-rating"
                      defaultValue={5}
                      precision={0.5}
                    />
                    <h3>1.300.000 so’m</h3>
                    {/* <!-- <img className="tem-img" src="Hasan.png" alt=""> <br> --> */}
                    <p className="des">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Amet, itaque.
                    </p>
                    <ul className="social-icon">
                      <li>72 ta dars</li>
                      <span className="line"></span>
                      <li>Boshlang’ich</li>
                      <span className="line"></span>
                      <li>2,5 soat/dars</li>
                    </ul>
                  </d>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="card">
                <div className="content">
                  <div className="front">
                    <img
                      className="profile"
                      width="100%"
                      src={cardImg6}
                      alt={Hasan}
                    />
                    <h3>React Development</h3>
                  </div>
                  <d iv className="back from-bottom">
                    <img className="tem-img" src={Nafisa} alt="Nafisa" /> &nbsp;
                    <h2>Nafisa Xamrayeva</h2>
                    <h3>React Development</h3>
                    <Rating
                      name="half-rating"
                      defaultValue={5}
                      precision={0.5}
                    />
                    <h3>1.200.000 so’m</h3>
                    {/* <!-- <img className="tem-img" src="Hasan.png" alt=""> <br> --> */}
                    <p className="des">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Amet, itaque.
                    </p>
                    <ul className="social-icon">
                      <li>72 ta dars</li>
                      <span className="line"></span>
                      <li>Boshlang’ich</li>
                      <span className="line"></span>
                      <li>2,5 soat/dars</li>
                    </ul>
                  </d>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ``````````````` */}
      <ScrollTrigger
        onEnter={() => setCounterOn(true)}
        onExit={() => setCounterOn(false)}
      >
        <div className="CousePurpose">
          <div className="container">
            <div className="PurposeVideo">
              {/* <img src={playBtn} alt="" /> */}
              <video width={"100%"} controls src={V7171}></video>
            </div>
          </div>
          <div className="PurposeBg">
            <div className="container">
              <div className="PurposeBox">
                <h6>Faktlar</h6>
                <h1>
                  Kompaniyamizning maqsadi <br /> kuchli mutahhasislarni
                  tayyorlash
                </h1>
                <p>
                  Hozirda o’quvchilarimiz ko’rsatayotgan natijalar bizning
                  maqsadimzga barqaror yaqinlashayotganimizning yaqqol
                  isbotidir!
                </p>
              </div>
              <div className="PurposeBox2">
                <div className="PurposeResult">
                  <svg
                    width="64"
                    height="64"
                    viewBox="0 0 64 64"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M47.9995 21.0935C47.9195 21.0935 47.8662 21.0935 47.7862 21.0935H47.6529C42.6129 20.9335 38.8529 17.0401 38.8529 12.2401C38.8529 7.33345 42.8529 3.36011 47.7329 3.36011C52.6129 3.36011 56.6129 7.36011 56.6129 12.2401C56.5862 17.0668 52.8262 20.9601 48.0262 21.1201C48.0262 21.0935 48.0262 21.0935 47.9995 21.0935ZM47.7329 7.33346C45.0395 7.33346 42.8529 9.52013 42.8529 12.2135C42.8529 14.8535 44.9062 16.9868 47.5462 17.0935C47.5729 17.0668 47.7862 17.0668 48.0262 17.0935C50.6129 16.9601 52.6129 14.8268 52.6395 12.2135C52.6395 9.52013 50.4529 7.33346 47.7329 7.33346Z"
                      fill="#22A4E2"
                    />
                    <path
                      d="M48.0267 40.7467C46.9867 40.7467 45.9467 40.6666 44.9067 40.48C43.8133 40.2933 43.0933 39.2533 43.28 38.16C43.4667 37.0667 44.5067 36.3467 45.6 36.5333C48.88 37.0933 52.3467 36.48 54.6667 34.9333C55.92 34.1067 56.5867 33.0666 56.5867 32.0266C56.5867 30.9866 55.8933 29.9733 54.6667 29.1466C52.3467 27.6 48.8267 26.9866 45.52 27.5733C44.4267 27.7867 43.3867 27.04 43.2 25.9466C43.0133 24.8533 43.7333 23.8133 44.8267 23.6267C49.1733 22.8533 53.68 23.68 56.88 25.8133C59.2267 27.3866 60.5867 29.6266 60.5867 32.0266C60.5867 34.4 59.2533 36.6667 56.88 38.2667C54.4533 39.8667 51.3067 40.7467 48.0267 40.7467Z"
                      fill="#22A4E2"
                    />
                    <path
                      d="M15.92 21.0933C15.8933 21.0933 15.8666 21.0933 15.8666 21.0933C11.0666 20.9333 7.30661 17.0399 7.27995 12.2399C7.27995 7.33324 11.28 3.33325 16.16 3.33325C21.04 3.33325 25.0399 7.33326 25.0399 12.2133C25.0399 17.0399 21.2799 20.9333 16.4799 21.0933L15.92 19.0933L16.1066 21.0933C16.0533 21.0933 15.9733 21.0933 15.92 21.0933ZM16.1866 17.0933C16.3466 17.0933 16.48 17.0932 16.64 17.1199C19.0133 17.0132 21.0933 14.8799 21.0933 12.2399C21.0933 9.54658 18.9066 7.3599 16.2133 7.3599C13.52 7.3599 11.3333 9.54658 11.3333 12.2399C11.3333 14.8532 13.3599 16.9599 15.9466 17.1199C15.9733 17.0932 16.0799 17.0933 16.1866 17.0933Z"
                      fill="#22A4E2"
                    />
                    <path
                      d="M15.8933 40.7467C12.6133 40.7467 9.46667 39.8667 7.04 38.2667C4.69333 36.6933 3.33334 34.4266 3.33334 32.0266C3.33334 29.6533 4.69333 27.3866 7.04 25.8133C10.24 23.68 14.7467 22.8533 19.0933 23.6267C20.1867 23.8133 20.9067 24.8533 20.72 25.9466C20.5333 27.04 19.4933 27.7867 18.4 27.5733C15.0933 26.9866 11.6 27.6 9.25334 29.1466C8.00001 29.9733 7.33334 30.9866 7.33334 32.0266C7.33334 33.0666 8.02667 34.1067 9.25334 34.9333C11.5733 36.48 15.04 37.0933 18.32 36.5333C19.4133 36.3467 20.4533 37.0933 20.64 38.16C20.8267 39.2533 20.1067 40.2933 19.0133 40.48C17.9733 40.6666 16.9333 40.7467 15.8933 40.7467Z"
                      fill="#22A4E2"
                    />
                    <path
                      d="M31.9995 41.0134C31.9195 41.0134 31.8662 41.0134 31.7862 41.0134H31.6529C26.6129 40.8534 22.8529 36.96 22.8529 32.16C22.8529 27.2534 26.8529 23.28 31.7329 23.28C36.6129 23.28 40.6129 27.28 40.6129 32.16C40.5862 36.9867 36.8262 40.88 32.0262 41.04C32.0262 41.0134 32.0262 41.0134 31.9995 41.0134ZM31.7329 27.2534C29.0395 27.2534 26.8529 29.44 26.8529 32.1334C26.8529 34.7734 28.9062 36.9067 31.5462 37.0134C31.5729 36.9867 31.7862 36.9867 32.0262 37.0134C34.6129 36.8801 36.6129 34.7467 36.6395 32.1334C36.6395 29.4667 34.4529 27.2534 31.7329 27.2534Z"
                      fill="#22A4E2"
                    />
                    <path
                      d="M31.9994 60.6932C28.7994 60.6932 25.5994 59.8665 23.1194 58.1865C20.7728 56.6132 19.4128 54.3732 19.4128 51.9732C19.4128 49.5999 20.7461 47.3065 23.1194 45.7332C28.1061 42.4265 35.9194 42.4265 40.8794 45.7332C43.2261 47.3065 44.5861 49.5465 44.5861 51.9465C44.5861 54.3198 43.2528 56.6132 40.8794 58.1865C38.3994 59.8399 35.1994 60.6932 31.9994 60.6932ZM25.3328 49.0932C24.0794 49.9199 23.4128 50.9599 23.4128 51.9999C23.4128 53.0399 24.1061 54.0532 25.3328 54.8799C28.9328 57.3065 35.0394 57.3065 38.6394 54.8799C39.8928 54.0532 40.5594 53.0132 40.5594 51.9732C40.5594 50.9332 39.8661 49.9199 38.6394 49.0932C35.0661 46.6665 28.9594 46.6932 25.3328 49.0932Z"
                      fill="#22A4E2"
                    />
                  </svg>

                  <h1>
                    +
                    {counterOn && (
                      <CountUp start={0} isCounting end={245} duration={10} />
                    )}
                  </h1>
                  <h5>Bitiruvchi</h5>
                </div>
                <div className="PurposeResult">
                  <svg
                    width="64"
                    height="64"
                    viewBox="0 0 64 64"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21.8136 44.7199C21.7602 44.7199 21.6802 44.7199 21.6269 44.7199C19.0402 44.4799 16.6136 43.2799 14.8003 41.3599C10.5336 36.8799 10.5336 29.6 14.8003 25.12L20.6403 18.9866C22.7203 16.7999 25.5202 15.5732 28.5069 15.5732C31.4936 15.5732 34.2936 16.7732 36.3736 18.9866C40.6402 23.4666 40.6402 30.7466 36.3736 35.2266L33.4669 38.2932C32.6936 39.0932 31.4403 39.12 30.6403 38.3733C29.8403 37.6 29.8136 36.3465 30.5603 35.5465L33.4669 32.4799C36.2936 29.5199 36.2936 24.6933 33.4669 21.7599C30.8269 18.9866 26.1869 18.9866 23.5203 21.7599L17.6803 27.8932C14.8536 30.8532 14.8536 35.6799 17.6803 38.6133C18.8269 39.8399 20.3736 40.5866 22.0002 40.7466C23.0936 40.8532 23.8936 41.8399 23.7869 42.9333C23.7069 43.9466 22.8269 44.7199 21.8136 44.7199Z"
                      fill="#22A4E2"
                    />
                    <path
                      d="M35.4938 48.4266C32.5071 48.4266 29.7071 47.2267 27.6271 45.0133C23.3604 40.5333 23.3604 33.2533 27.6271 28.7733L30.5338 25.7067C31.3071 24.9067 32.5604 24.8799 33.3604 25.6266C34.1604 26.3999 34.1871 27.6533 33.4404 28.4533L30.5338 31.52C27.7071 34.48 27.7071 39.3066 30.5338 42.24C33.1738 45.0133 37.8137 45.04 40.4804 42.24L46.3204 36.1067C49.1471 33.1467 49.1471 28.3199 46.3204 25.3866C45.1737 24.1599 43.6271 23.4133 42.0004 23.2533C40.9071 23.1466 40.1071 22.16 40.2138 21.0666C40.3204 19.9733 41.2804 19.1467 42.4004 19.28C44.9871 19.5467 47.4138 20.7199 49.2271 22.6399C53.4938 27.1199 53.4938 34.3999 49.2271 38.8799L43.3871 45.0133C41.2804 47.2267 38.4804 48.4266 35.4938 48.4266Z"
                      fill="#22A4E2"
                    />
                    <path
                      d="M40 60.6666H24C9.52001 60.6666 3.33334 54.4799 3.33334 39.9999V23.9999C3.33334 9.51992 9.52001 3.33325 24 3.33325H40C54.48 3.33325 60.6667 9.51992 60.6667 23.9999V39.9999C60.6667 54.4799 54.48 60.6666 40 60.6666ZM24 7.33325C11.7067 7.33325 7.33334 11.7066 7.33334 23.9999V39.9999C7.33334 52.2933 11.7067 56.6666 24 56.6666H40C52.2933 56.6666 56.6667 52.2933 56.6667 39.9999V23.9999C56.6667 11.7066 52.2933 7.33325 40 7.33325H24Z"
                      fill="#22A4E2"
                    />
                  </svg>
                  <h1>
                    {counterOn && (
                      <CountUp start={0} isCounting end={79} duration={10} />
                    )}
                    %
                  </h1>
                  <h5>Ishga joylashish</h5>
                </div>

                <div className="PurposeResult">
                  <svg
                    width="64"
                    height="64"
                    viewBox="0 0 64 64"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M47.9995 21.0935C47.9195 21.0935 47.8662 21.0935 47.7862 21.0935H47.6529C42.6129 20.9335 38.8529 17.0401 38.8529 12.2401C38.8529 7.33345 42.8529 3.36011 47.7329 3.36011C52.6129 3.36011 56.6129 7.36011 56.6129 12.2401C56.5862 17.0668 52.8262 20.9601 48.0262 21.1201C48.0262 21.0935 48.0262 21.0935 47.9995 21.0935ZM47.7329 7.33346C45.0395 7.33346 42.8529 9.52013 42.8529 12.2135C42.8529 14.8535 44.9062 16.9868 47.5462 17.0935C47.5729 17.0668 47.7862 17.0668 48.0262 17.0935C50.6129 16.9601 52.6129 14.8268 52.6395 12.2135C52.6395 9.52013 50.4529 7.33346 47.7329 7.33346Z"
                      fill="#22A4E2"
                    />
                    <path
                      d="M48.0267 40.7467C46.9867 40.7467 45.9467 40.6666 44.9067 40.48C43.8133 40.2933 43.0933 39.2533 43.28 38.16C43.4667 37.0667 44.5067 36.3467 45.6 36.5333C48.88 37.0933 52.3467 36.48 54.6667 34.9333C55.92 34.1067 56.5867 33.0666 56.5867 32.0266C56.5867 30.9866 55.8933 29.9733 54.6667 29.1466C52.3467 27.6 48.8267 26.9866 45.52 27.5733C44.4267 27.7867 43.3867 27.04 43.2 25.9466C43.0133 24.8533 43.7333 23.8133 44.8267 23.6267C49.1733 22.8533 53.68 23.68 56.88 25.8133C59.2267 27.3866 60.5867 29.6266 60.5867 32.0266C60.5867 34.4 59.2533 36.6667 56.88 38.2667C54.4533 39.8667 51.3067 40.7467 48.0267 40.7467Z"
                      fill="#22A4E2"
                    />
                    <path
                      d="M15.92 21.0933C15.8933 21.0933 15.8666 21.0933 15.8666 21.0933C11.0666 20.9333 7.30661 17.0399 7.27995 12.2399C7.27995 7.33324 11.28 3.33325 16.16 3.33325C21.04 3.33325 25.0399 7.33326 25.0399 12.2133C25.0399 17.0399 21.2799 20.9333 16.4799 21.0933L15.92 19.0933L16.1066 21.0933C16.0533 21.0933 15.9733 21.0933 15.92 21.0933ZM16.1866 17.0933C16.3466 17.0933 16.48 17.0932 16.64 17.1199C19.0133 17.0132 21.0933 14.8799 21.0933 12.2399C21.0933 9.54658 18.9066 7.3599 16.2133 7.3599C13.52 7.3599 11.3333 9.54658 11.3333 12.2399C11.3333 14.8532 13.3599 16.9599 15.9466 17.1199C15.9733 17.0932 16.0799 17.0933 16.1866 17.0933Z"
                      fill="#22A4E2"
                    />
                    <path
                      d="M15.8933 40.7467C12.6133 40.7467 9.46667 39.8667 7.04 38.2667C4.69333 36.6933 3.33334 34.4266 3.33334 32.0266C3.33334 29.6533 4.69333 27.3866 7.04 25.8133C10.24 23.68 14.7467 22.8533 19.0933 23.6267C20.1867 23.8133 20.9067 24.8533 20.72 25.9466C20.5333 27.04 19.4933 27.7867 18.4 27.5733C15.0933 26.9866 11.6 27.6 9.25334 29.1466C8.00001 29.9733 7.33334 30.9866 7.33334 32.0266C7.33334 33.0666 8.02667 34.1067 9.25334 34.9333C11.5733 36.48 15.04 37.0933 18.32 36.5333C19.4133 36.3467 20.4533 37.0933 20.64 38.16C20.8267 39.2533 20.1067 40.2933 19.0133 40.48C17.9733 40.6666 16.9333 40.7467 15.8933 40.7467Z"
                      fill="#22A4E2"
                    />
                    <path
                      d="M31.9995 41.0134C31.9195 41.0134 31.8662 41.0134 31.7862 41.0134H31.6529C26.6129 40.8534 22.8529 36.96 22.8529 32.16C22.8529 27.2534 26.8529 23.28 31.7329 23.28C36.6129 23.28 40.6129 27.28 40.6129 32.16C40.5862 36.9867 36.8262 40.88 32.0262 41.04C32.0262 41.0134 32.0262 41.0134 31.9995 41.0134ZM31.7329 27.2534C29.0395 27.2534 26.8529 29.44 26.8529 32.1334C26.8529 34.7734 28.9062 36.9067 31.5462 37.0134C31.5729 36.9867 31.7862 36.9867 32.0262 37.0134C34.6129 36.8801 36.6129 34.7467 36.6395 32.1334C36.6395 29.4667 34.4529 27.2534 31.7329 27.2534Z"
                      fill="#22A4E2"
                    />
                    <path
                      d="M31.9994 60.6932C28.7994 60.6932 25.5994 59.8665 23.1194 58.1865C20.7728 56.6132 19.4128 54.3732 19.4128 51.9732C19.4128 49.5999 20.7461 47.3065 23.1194 45.7332C28.1061 42.4265 35.9194 42.4265 40.8794 45.7332C43.2261 47.3065 44.5861 49.5465 44.5861 51.9465C44.5861 54.3198 43.2528 56.6132 40.8794 58.1865C38.3994 59.8399 35.1994 60.6932 31.9994 60.6932ZM25.3328 49.0932C24.0794 49.9199 23.4128 50.9599 23.4128 51.9999C23.4128 53.0399 24.1061 54.0532 25.3328 54.8799C28.9328 57.3065 35.0394 57.3065 38.6394 54.8799C39.8928 54.0532 40.5594 53.0132 40.5594 51.9732C40.5594 50.9332 39.8661 49.9199 38.6394 49.0932C35.0661 46.6665 28.9594 46.6932 25.3328 49.0932Z"
                      fill="#22A4E2"
                    />
                  </svg>
                  <h1>
                    {counterOn && (
                      <CountUp start={0} isCounting end={400} duration={20} />
                    )}
                    $
                  </h1>
                  <h5>O’rtacha maosh</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollTrigger>
    </>
  );
};

export default Courses;
