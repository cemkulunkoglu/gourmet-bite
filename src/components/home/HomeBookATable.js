import React from "react";

function HomeBookATable() {
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
      </section>
    </div>
  );
}

export default HomeBookATable;
