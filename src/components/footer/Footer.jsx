import React from "react";
import moment from "moment";
import { MdWhatsapp, MdFacebook } from "react-icons/md";
import { TbBrandTiktok, TbBrandInstagram } from "react-icons/tb";
import Scroll from 'react-scroll';
import "./footer.scss";
import { Link, useNavigate } from "react-router-dom";
let footerInfo = [{
  title: 'INFORMACIÓN',
  content: [{
    text: 'Roldanillo, Valle del Cauca',
    redirect: false,
    openWindow: false,
  }, {
    text: '318 - 684 - 9298',
    redirect: false,
    openWindow: false,
  }, {
    text: 'Lunes a viernes  8 a.m. - 6 p.m.',
    redirect: false,
    openWindow: false,
  }]
}, {
  title: 'SOBRE NOSOTROS',
  content: [{
    text: 'SERGIO CANO',
    redirect: false,
    openWindow: false,
  }, {
    text: "MAJO'S",
    redirect: '/about',
    openWindow: false,
  }],
}, {
  title: 'MAS SERVICIOS',
  content: [{
    text: 'Guía de tallas',
    redirect: '/size-guides',
    openWindow: false,
  }, {
    text: 'Devoluciones y garantías',
    redirect: 'return-warranties',
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
  let navigate = useNavigate();
  let scroll = Scroll.animateScroll;
  return (
    <footer className="container-main-footer">
      <div className="container-footer">
        {footerInfo.map((item, index) => (
          <div key={index} className="cotainer-setion-footer">
            <span>{item['title']}</span>
            <ul className={'container-list'}>
              {item['content'].map((itemContent, i) => (
                <li key={i} className={itemContent['redirect'] ? 'rediret' : ''}
                  onClick={() => {
                    if (itemContent['redirect']) {
                      scroll.scrollToTop();
                      navigate(itemContent['redirect']);
                    }
                  }}
                >
                  {itemContent['text']}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="container-footer-footer">
        <p className="parrafo">
          &copy; {`${moment().format("YYYY")} `}Sergio Cano.{" "}
          Todos los derechos reservados
        </p>
        {socials.map((item, index) => (
          <Link key={index} to={item['redirect']} target="_blank"
            onClick={(event) => {
              event.preventDefault();
              window.open(item['redirect'])
            }}
          >
            {item['icon']}
          </Link>
        ))}
      </div>
    </footer>
  );
};
