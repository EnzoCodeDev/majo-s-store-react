import React from "react";
import moment from "moment";
// import { social } from "../../data";
// import logo from "../../assets/img/logo/logo-higueron.png";
import { MdWhatsapp, MdFacebook } from "react-icons/md";
import { TbBrandTiktok, TbBrandInstagram } from "react-icons/tb";
import "./footer.scss";
// import { useTranslation } from "react-i18next";
{/* <p className="parrafo">
&copy; {`${moment().format("YYYY")} `}Sergio Cano.{" "}
{t("footer.all-reserved")}
</p> */}
let footerInfo = [{
  title: 'INFORMACIÓN',
  content: [{
    text: 'Circular 73A #38-73, Medellín, Colombia.',
    redirect: null,
    openWindow: false,
  }, {
    text: '63625752763',
    redirect: null,
    openWindow: false,
  }, {
    text: 'Lunes - Viernes 8 a.m. - 6 p.m.',
    redirect: null,
    openWindow: false,
  }]
}, {
  title: 'SOBRE NOSOTROS',
  content: [{
    text: 'SERGIO CANO',
    redirect: null,
    openWindow: false,
  }, {
    text: "MAJO´S",
    redirect: null,
    openWindow: false,
  }],
}, {
  title: 'MAS SERVICIOS',
  content: [{
    text: 'Guía de tallas',
    redirect: null,
    openWindow: false,
  }, {
    text: 'Devoluciones y garantías',
    redirect: null,
    openWindow: false,
  }],
}];

let socials = [{
  icon: <MdWhatsapp className="icon-social" />,
  redirect: 'https://wa.me/message/VRYESG22ZYGPB1',
}, {
  icon: <MdFacebook className="icon-social" />,
  redirect: 'https://www.facebook.com/profile.php?id=100088500618624',
}, {
  icon: <TbBrandInstagram className="icon-social" />,
  redirect: 'https://www.instagram.com/majos_official/?fbclid=IwAR38fNRd5aYYSYy2HccUB6Av-Cwg32s-QBoYyf46eVviEOdzqAYvfB5ImBo',
},
{
  icon: <TbBrandTiktok className="icon-social" />,
  redirect: 'https://www.tiktok.com/@majos_official?fbclid=IwAR2EJBkEh0-VlbP1opS7UZRzZaQeR-0ZDyHXkmMmVQbe8L8F4f_-URDTlwc',
}];

export const Footer = () => {
  return (
    <footer className="container-main-footer">
      <div className="container-footer">
        {footerInfo.map((item, index) => (
          <div key={index} className="cotainer-setion-footer">
            <span>{item['title']}</span>
            <ul className='container-list'>
              {item['content'].map((itemContent, i) => (
                <li key={i} >
                  {itemContent['text']}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="container-footer-footer">

      </div>
    </footer>
  );
};
