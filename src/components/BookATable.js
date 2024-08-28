import React from "react";

function BookATable() {
  return (
    <div>
      <section className="book_section layout_padding">
        <div className="container">
          <div className="heading_container">
            <h2>Bir Masa Ayırtın</h2>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="form_container">
                <form action="">
                  <div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Adınız"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Telefon Numarası"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="E-Mail"
                    />
                  </div>
                  <div>
                    <select className="form-control nice-select wide">
                      <option value="" disabled selected>
                        Kaç kişilik masa arıyorsunuz?
                      </option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                  </div>
                  <div>
                    <input type="date" className="form-control" />
                  </div>
                  <div className="btn_box">
                    <button type="submit">Rezervasyon yap</button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-md-6">
              <div className="map_container">
                <iframe
                  width="600"
                  height="345"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowfullscreen=""
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.9592826694497!2d-73.96828528459375!3d40.7850911793246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2589eb404e009%3A0xb0d4db317b1a7ed8!2sCentral%20Park!5e0!3m2!1sen!2sus!4v1618462807241!5m2!1sen!2sus"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
        <div className="container mt-5">
          <div className="row">
            <div className="col-12 text-center mb-4">
              <h1>Daha Fazlası İçin Bize Ulaşın</h1>
            </div>
            <div className="col-6">
              <div className="card">
                <div className="card-body p-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="currentColor"
                    className="bi bi-geo-alt-fill mb-3"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
                  </svg>
                  <h5 className="card-title">Konum</h5>
                  <hr />
                  <p className="card-text">
                    1234 Lezzetli Sokak, Fastfood Mahallesi, Gourmet Şehri,
                    12345, Türkiye
                  </p>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="card">
                <div className="card-body p-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="currentColor"
                    className="bi bi-telephone-fill mb-3"
                    viewBox="0 0 16 16"
                  >
                    <path d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                  </svg>
                  <h5 className="card-title">Telefon</h5>
                  <hr />
                  <p className="card-text">+01 1234567890</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BookATable;
