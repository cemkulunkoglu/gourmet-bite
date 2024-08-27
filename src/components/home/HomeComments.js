import React from "react";

function HomeComments() {
  return (
    <div>
      <section className="client_section layout_padding-bottom">
        <div className="container">
          <div className="heading_container heading_center psudo_white_primary mb_45">
            <h2>Müşterilerimiz Ne Diyor</h2>
          </div>
          <div className="carousel-wrap row">
            <div className="owl-carousel client_owl-carousel">
              <div className="row">
                <div className="item col-6">
                  <div className="box">
                    <div className="detail-box">
                      <p>
                        "Gourmet Bite'da geçirdiğimiz zaman harikaydı!
                        Burgerleri inanılmaz lezzetliydi ve servis hızlıydı.
                        Ailemle birlikte burada yemek yemekten büyük keyif
                        aldık."
                      </p>
                      <h6>Ayşe Yılmaz</h6>
                      <p>İstanbul, Türkiye</p>
                    </div>
                  </div>
                </div>
                <div className="item col-6">
                  <div className="box">
                    <div className="detail-box">
                      <p>
                        "Mükemmel bir restoran! Her lokmada kaliteyi
                        hissedebiliyorsunuz. Fiyatlar uygun, ortam çok sıcak ve
                        samimi. Kesinlikle tekrar geleceğiz."
                      </p>
                      <h6>Mehmet Demir</h6>
                      <p>Ankara, Türkiye</p>
                    </div>
                  </div>
                </div>
                <div className="item col-6">
                  <div className="box">
                    <div className="detail-box">
                      <p>
                        "Gourmet Bite, sunduğu kaliteli hizmet ve lezzetli
                        yemeklerle beklentilerimin ötesine geçti. Özellikle
                        pizzalarına bayıldım!"
                      </p>
                      <h6>Elif Kaya</h6>
                      <p>İzmir, Türkiye</p>
                    </div>
                  </div>
                </div>
                <div className="item col-6">
                  <div className="box">
                    <div className="detail-box">
                      <p>
                        "Burgerler harika, servis mükemmel. Gourmet Bite, hızlı
                        servis ve kaliteli yemekleriyle bir adım önde.
                        Kesinlikle tavsiye ederim."
                      </p>
                      <h6>Canan Aydın</h6>
                      <p>Bursa, Türkiye</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomeComments;
