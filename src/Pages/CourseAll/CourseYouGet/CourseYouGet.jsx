import React from 'react'
import "./CourseYouGet.scss"

function CourseYouGet() {
  return (
    <div>
      {' '}
      <div className="Youget">
        <h6 className="blue_title">Kursdan nimalar olamiz</h6>
        <h3 className="lt-title">
          Bu kurs davomida siz quyidagi bilm va <br /> ko’nikmalarni olasiz:
        </h3>
        <div className="wrap_ul">
          <ul>
            <li>
              HTML, CSS, haqida malumotlar va HTML5, CSS3 yangi imkoniyatlari
            </li>
            <li>
              Bootstrap frameworki bilan tanishish, Bootstrap Component va
              Gridlari bilan ishlash
            </li>
            <li>SASS Preprotsessori orqali kodlarni optimallashtirish</li>
            <li>Website lar yaratish va ularni internetga joylash</li>
          </ul>
          <ul>
            <li>
              Javascript dasturi va uning asosiy operatorlari bilan tanishish
            </li>
            <li>Javascript yordamida dinamik web sahifalar yarata olish</li>
            <li>Javascriptda xatoliklarni ushlash va asinxronlik haqida</li>
            <li>Javascriptda qo'shimcha turli kutubxonalar bilan ishlash</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default CourseYouGet
