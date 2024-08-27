import React from "react";
import aboutImg from "../../assets/images/about-img.png";

function HomeAboutUs() {
  return (
    <div>
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
                  Gourmet Bite olarak, lezzetli ve kaliteli yemeklerle
                  misafirlerimize eşsiz bir deneyim sunmayı amaçlıyoruz. Her
                  yemeğimiz özenle seçilmiş malzemelerden hazırlanır ve
                  geleneksel tariflerle harmanlanır. Müşterilerimizin
                  memnuniyeti bizim için en büyük önceliktir ve bu yüzden her
                  detayda mükemmelliği ararız. Restoranımıza geldiğinizde, sıcak
                  bir atmosferde, taze ve lezzetli yemeklerimizi keyifle
                  deneyimleyebilirsiniz.
                </p>
                <a href="" className="btn btn-warning">Daha Fazla</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomeAboutUs;
