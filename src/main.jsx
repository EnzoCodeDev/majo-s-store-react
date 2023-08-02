import React from 'react';
import ReactDOM from 'react-dom/client';
import i18next from "i18next";
import { Provider } from "react-redux";
import { I18nextProvider } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { ConfigProvider } from "antd";
import es_ES from "antd/lib/locale/es_ES";
import moment from "moment";
import "moment/locale/es";
import { App } from './App';
import { configureAppStore } from "./redux/store";
import { resources } from "./translations/global";

const store = configureAppStore();

i18next.use(LanguageDetector).init({
  resources,
});

moment.locale("es");
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <I18nextProvider i18n={i18next}>
        <ConfigProvider locale={es_ES}>
          <App />
        </ConfigProvider>
      </I18nextProvider>
    </Provider>
  </React.StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
