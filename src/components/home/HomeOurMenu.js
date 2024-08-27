import React, { useState } from "react";
import f1 from "../../assets/images/f1.png";
import f2 from "../../assets/images/f2.png";
import f3 from "../../assets/images/f3.png";
import f4 from "../../assets/images/f4.png";
import f5 from "../../assets/images/f5.png";
import f6 from "../../assets/images/f6.png";
import f7 from "../../assets/images/f7.png";
import f8 from "../../assets/images/f8.png";
import f9 from "../../assets/images/f9.png";

function HomeOurMenu() {
  const [activeFilter, setActiveFilter] = useState("all");

  const menuItems = [
    {
      id: 1,
      category: "burger",
      title: "Lezzetli Burger",
      price: "₺405",
      imgSrc: f2,
      ingredients: [
        "Dana eti",
        "Marul",
        "Domates",
        "Cheddar peyniri",
        "Barbekü sos",
      ],
      description:
        "Taze malzemelerle hazırlanan klasik bir burger. Etin sulu ve lezzetli olması için özenle pişirilmiştir.",
    },
    {
      id: 2,
      category: "pizza",
      title: "Lezzetli Pizza",
      price: "₺540",
      imgSrc: f1,
      ingredients: [
        "Mozzarella peyniri",
        "Domates sosu",
        "Fesleğen",
        "Zeytin",
        "Zeytinyağı",
      ],
      description:
        "Geleneksel İtalyan pizzası. İnce ve çıtır hamuru, zengin malzemelerle kaplanmıştır.",
    },
    {
      id: 3,
      category: "pizza",
      title: "Lezzetli Peynirli Pizza",
      price: "₺540",
      imgSrc: f3,
      ingredients: [
        "Mozzarella peyniri",
        "Parmesan",
        "Domates sosu",
        "Fesleğen",
      ],
      description:
        "Birden fazla peynir türüyle zenginleştirilmiş bu pizza, peynir sevenler için mükemmel bir seçim.",
    },
    {
      id: 4,
      category: "pasta",
      title: "Lezzetli Makarna",
      price: "₺486",
      imgSrc: f4,
      ingredients: [
        "Spagetti",
        "Domates sosu",
        "Sarımsak",
        "Fesleğen",
        "Zeytinyağı",
      ],
      description:
        "Klasik İtalyan makarnası, taze domates sosu ve fesleğen ile servis edilir.",
    },
    {
      id: 5,
      category: "fries",
      title: "Patates Kızartması",
      price: "₺270",
      imgSrc: f5,
      ingredients: ["Patates", "Tuz", "Zeytinyağı"],
      description:
        "Dışı çıtır, içi yumuşak patates kızartmaları, her yemeğe mükemmel bir eşlik.",
    },
    {
      id: 6,
      category: "pizza",
      title: "Peynirli Pizza",
      price: "₺594",
      imgSrc: f6,
      ingredients: [
        "Mozzarella peyniri",
        "Domates sosu",
        "Mantar",
        "Yeşil biber",
        "Soğan",
      ],
      description:
        "Bol peynirli, sebzelerle zenginleştirilmiş doyurucu bir pizza.",
    },
    {
      id: 7,
      category: "burger",
      title: "Lezzetli Burger",
      price: "₺324",
      imgSrc: f7,
      ingredients: ["Dana eti", "Turşu", "Domates", "Marul", "Ketçap"],
      description:
        "Taze sebzelerle birlikte sunulan klasik bir burger. Hem hafif hem de doyurucu.",
    },
    {
      id: 8,
      category: "burger",
      title: "Sulu Burger",
      price: "₺378",
      imgSrc: f8,
      ingredients: [
        "Dana eti",
        "Karışık yeşillikler",
        "Cheddar peyniri",
        "Mayonez",
        "Hardal",
      ],
      description:
        "Etin sulu kalması için özel olarak pişirilmiş, zengin tatlarla dolu bir burger.",
    },
    {
      id: 9,
      category: "pasta",
      title: "Spagetti Makarna",
      price: "₺432",
      imgSrc: f9,
      ingredients: [
        "Spagetti",
        "Bolognese sos",
        "Parmesan peyniri",
        "Sarımsak",
      ],
      description:
        "Bolonez sos ile servis edilen, Parmesan ile zenginleştirilmiş geleneksel spagetti.",
    },
  ];

  const filteredItems =
    activeFilter === "all"
      ? menuItems
      : menuItems.filter((item) => item.category === activeFilter);

  return (
    <div>
      <section className="food_section layout_padding-bottom">
        <div className="container">
          <div className="heading_container heading_center">
            <h2>Menümüz</h2>
          </div>

          <ul className="filters_menu">
            <li
              className={activeFilter === "all" ? "active" : ""}
              onClick={() => setActiveFilter("all")}
            >
              Hepsi
            </li>
            <li
              className={activeFilter === "burger" ? "active" : ""}
              onClick={() => setActiveFilter("burger")}
            >
              Burger
            </li>
            <li
              className={activeFilter === "pizza" ? "active" : ""}
              onClick={() => setActiveFilter("pizza")}
            >
              Pizza
            </li>
            <li
              className={activeFilter === "pasta" ? "active" : ""}
              onClick={() => setActiveFilter("pasta")}
            >
              Makarna
            </li>
            <li
              className={activeFilter === "fries" ? "active" : ""}
              onClick={() => setActiveFilter("fries")}
            >
              Patates Kızartması
            </li>
          </ul>

          <div className="filters-content">
            <div className="row grid">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  className={`col-sm-6 col-lg-4 all ${item.category}`}
                >
                  <div className="box">
                    <div>
                      <div className="img-box">
                        <img src={item.imgSrc} alt={item.title} />
                      </div>
                      <div className="detail-box">
                        <h5>{item.title}</h5>
                        <p>{item.description}</p>
                        <hr />
                        <p>{item.ingredients.join(", ")}</p>{" "}
                        <div className="options">
                          <h6>{item.price}</h6>
                          <a href="#">
                            <svg
                              version="1.1"
                              id="Capa_1"
                              xmlns="http://www.w3.org/2000/svg"
                              x="0px"
                              y="0px"
                              viewBox="0 0 456.029 456.029"
                              style={{
                                enableBackground: "new 0 0 456.029 456.029",
                              }}
                            >
                              <g>
                                <g>
                                  <path
                                    d="M345.6,338.862c-29.184,0-53.248,23.552-53.248,53.248c0,29.184,23.552,53.248,53.248,53.248
                                        c29.184,0,53.248-23.552,53.248-53.248C398.336,362.926,374.784,338.862,345.6,338.862z"
                                  />
                                </g>
                              </g>
                              <g>
                                <g>
                                  <path
                                    d="M439.296,84.91c-1.024,0-2.56-0.512-4.096-0.512H112.64l-5.12-34.304C104.448,27.566,84.992,10.67,61.952,10.67H20.48
                                        C9.216,10.67,0,19.886,0,31.15c0,11.264,9.216,20.48,20.48,20.48h41.472c2.56,0,4.608,2.048,5.12,4.608l31.744,216.064
                                        c4.096,27.136,27.648,47.616,55.296,47.616h212.992c26.624,0,49.664-18.944,55.296-45.056l33.28-166.4
                                        C457.728,97.71,450.56,86.958,439.296,84.91z"
                                  />
                                </g>
                              </g>
                              <g>
                                <g>
                                  <path
                                    d="M215.04,389.55c-1.024-28.16-24.576-50.688-52.736-50.688c-29.696,1.536-52.224,26.112-51.2,55.296
                                        c1.024,28.16,24.064,50.688,52.224,50.688h1.024C193.536,443.31,216.576,418.734,215.04,389.55z"
                                  />
                                </g>
                              </g>
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="btn-box">
            <a href="" className="btn btn-warning">
              Daha Fazla
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomeOurMenu;
