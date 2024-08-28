import React from "react";
import aboutImg from "../assets/images/about-img.png";

function AboutUs() {
  return (
    <div>
      {" "}
      <section className="about_section layout_padding">
        <div className="container  ">
          <div className="row">
            <div className="col-md-6 ">
              <div className="img-box">
                <img src={aboutImg} alt="" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="detail-box">
                <div className="heading_container">
                  <h2>Biz Gourmet Bite'ız</h2>
                </div>
                <p>
                  2010 yılında İstanbul’un kalbinde kurulan Gourmet Bite,
                  kurulduğu günden bu yana, müşterilerine unutulmaz bir lezzet
                  deneyimi sunmayı ilke edinmiştir. İlk günden itibaren
                  amacımız, en taze ve kaliteli malzemeleri kullanarak
                  hazırladığımız lezzetli yemeklerle, konuklarımızın damak
                  zevkine hitap etmektir. Geleneksel fast food anlayışını bir
                  adım öteye taşıyan restoranımız, zengin menüsü, samimi ortamı
                  ve müşteri memnuniyeti odaklı hizmeti ile kısa sürede
                  müdavimlerini kazanmıştır.
                </p>
                <p>
                  Gourmet Bite, sadece yemek değil, aynı zamanda anılarınızı
                  paylaşabileceğiniz, sevdiklerinizle keyifli vakit
                  geçirebileceğiniz sıcak bir ortam sunar. Yılların verdiği
                  deneyimle, her yemeğimizi özenle hazırlıyor ve
                  misafirlerimizin memnuniyeti için mükemmelliği hedefliyoruz.
                  Bizim için her müşteri, ailenin bir parçasıdır ve bu yüzden
                  her ziyaretinizde aynı sıcak karşılamayı bulacağınızdan emin
                  olabilirsiniz.
                </p>
                <p>
                  Siz de Gourmet Bite ailesinin bir parçası olun, lezzet dolu
                  bir yolculuğa çıkın ve gerçek fast food deneyimini bizimle
                  yaşayın!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
