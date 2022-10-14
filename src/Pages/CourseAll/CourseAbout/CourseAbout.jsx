import React from 'react'
import './CourseAbout.scss'
import CourseImg from '../../../assets/images/courseImg.png'

function CourseAbout() {
  return (
    <div>
      <div className="About">
        <div className="Abuoutme">
          <div className="AboutCourseStart">
            <h6>Kompaniya haqida</h6>
            <h1>Bu kurslarimiz kimlarga to’g’ri keladi?</h1>
            <p>
              Umuman olganda istalgan dasturlashga qiziqishi bo’lgan va biroz
              sabrli bo’lgan odam bu kurslarimizda ishtirok etishlari mumkun.
              Aniqroq qilib aytsak:
            </p>
            <div className="aboutGet">
              <div className="box">
                Kodlash sohaida hech qanday tajribaga ega bo’lmaganlar ham
                kurslarga qatnashishlari mumkun 👶🏻
              </div>
              <div className="box">
                Ayni shu yo’nalishda boshlang’ich bilmga ega bo’lganlar,
                mustaqil o’rganishni boshlaganlarga o’z bilmlarini rivojlanish
                va o’z darajalarini oshirish istagidagilar 👨‍💻
              </div>
              <div className="box">
                Agar boshlang’ich kompyuter savodhonligingiz bo’lsa 🖥
              </div>
            </div>
          </div>
        </div>
        <div className="AboutImg">
          <a href="#!">
            <img src={CourseImg} alt="" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default CourseAbout
