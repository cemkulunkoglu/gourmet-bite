import React from "react";

function HomeSlider() {
  return (
    <div>
      <section className="slider_section">
        <div
          id="customCarousel1"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="container">
                <div className="row">
                  <div className="col-sm-12 col-md-12 col-lg-4">
                    <div className="detail-box">
                      <h1>Keyifli Anlar İçin Lezzetli Seçimler</h1>
                      <p>
                        Lezzetli ve taze malzemelerle hazırlanan enfes
                        menülerimizle tanışın. Aileniz ve sevdiklerinizle
                        keyifli vakit geçirebileceğiniz sıcak ve samimi bir
                        ortam sunuyoruz. Hızlı servisimiz ve zengin lezzet
                        seçeneklerimizle açlığınızı en lezzetli şekilde gidermek
                        için buradayız. Bugün bize katılın ve damak zevkinize
                        uygun mükemmel bir yemek deneyimi yaşayın!
                      </p>
                      <div className="btn-box">
                        <a href="#" className="btn btn-warning">
                          Sipariş Ver
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="container">
                <div className="row">
                  <div className="col-sm-12 col-md-12 col-lg-4">
                    <div className="detail-box">
                      <h1>Lezzet ve Kalitenin Buluşma Noktası</h1>
                      <p>
                        Lezzet ve kaliteyi bir araya getiren restoranımızda, her
                        lokmada eşsiz bir deneyim yaşamanız için özenle
                        hazırlanmış menümüzle sizleri karşılıyoruz. En taze
                        malzemelerle hazırlanan, zengin tatları ve benzersiz
                        sunumlarıyla ön plana çıkan yemeklerimiz, damak
                        zevkinize hitap edecek. Gönül rahatlığıyla
                        sevdiklerinizi ağırlayabileceğiniz sıcacık bir ortamda,
                        unutulmaz bir yemek deneyimi sunmak için buradayız.
                      </p>
                      <div className="btn-box">
                        <a href="#" className="btn btn-warning">
                          Sipariş Ver
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="container">
                <div className="row">
                  <div className="col-sm-12 col-md-12 col-lg-4">
                    <div className="detail-box">
                      <h1>Lezzet Dolu Bir Yolculuğa Çıkın</h1>
                      <p>
                        Restoranımızda her yemek, özenle seçilmiş malzemeler ve
                        titiz bir el işçiliğiyle hazırlanır. Sizi lezzet dolu
                        bir yolculuğa çıkaracak zengin menümüz, damak tadınıza
                        uygun seçeneklerle doludur. Samimi atmosferimizde,
                        sevdiklerinizle birlikte unutulmaz anlar yaşamanız için
                        tüm detaylar düşünülmüştür. Burada, her tabakta bir
                        lezzet hikayesi bulacaksınız.
                      </p>
                      <div className="btn-box">
                        <a href="#" className="btn btn-warning">
                          Sipariş Ver
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="d-flex justify-content-center">
              <ol className="carousel-indicators">
                <li
                  data-bs-target="#customCarousel1"
                  data-bs-slide-to="0"
                  className="active"
                ></li>
                <li data-bs-target="#customCarousel1" data-bs-slide-to="1"></li>
                <li data-bs-target="#customCarousel1" data-bs-slide-to="2"></li>
              </ol>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomeSlider;
