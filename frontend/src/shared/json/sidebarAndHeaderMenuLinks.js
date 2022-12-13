import { lazy } from "react";

// import { EngineRepair } from "../../Articles/EngineRepair/EngineRepair";
const EngineRepair = lazy(import("../../Articles/EngineRepair/EngineRepair"));
// console.log('render') 
export const carService = [
  {
    text: "Магазин Запчастин",
    path: "/car-service/test",
    Component: EngineRepair,
  },
  {
    text: "Магазин Запчастин",
    path: "/car-service/features",
  },
  {
    text: "Магазин Запчастин",
    path: "/car-service/partner",
  },
  {
    text: "Магазин Запчастин",
    path: "/car-service/test",
  },
  {
    text: "Магазин Запчастин",
    path: "/car-service/test",
  },
  {
    text: "Магазин Запчастин",
    path: "/car-service/test",
  },
  {
    text: "Магазин Запчастин",
    path: "/car-service/test",
  },
  {
    text: "Магазин Запчастин",
    path: "/car-service/test",
  },
  {
    text: "Магазин Запчастин",
    path: "/car-service/test",
  },
  {
    text: "Магазин Запчастин",
    path: "/car-service/test",
  },
];

export const carTunning = [
  {
    text: "Подсветка Днища",
    path: "/car-tunning/test",
  },
  {
    text: "Подсветка Днища",
    path: "/car-tunning/test",
  },
  {
    text: "Подсветка Днища",
    path: "/car-tunning/test",
  },
  {
    text: "Подсветка Днища",
    path: "/car-tunning/test",
  },
  {
    text: "Подсветка Днища",
    path: "/car-tunning/test",
  },
  {
    text: "Подсветка Днища",
    path: "/car-tunning/test",
  },
  {
    text: "Подсветка Днища",
    path: "/car-tunning/test",
  },
  {
    text: "Подсветка Днища",
    path: "/car-tunning/test",
  },
];

export const ourFeatures = [
  {
    text: "Діллерська діагностика",
    withImage: true,
    path: "/our-feature/test",
  },
  {
    text: "Промивання форсунок",
    withImage: true,
    path: "/our-feature/test",
  },
  {
    text: "Розвал-сходження авто висотою до 3м.",
    withImage: true,
    path: "/our-feature/test",
  },
];

export const partners = [
  {
    text: 'Кафе "Вогні Баку"',
    path: "/partners/cafe-vohni-baku",
  },
  {
    text: "Авіамодельний гурток",
    path: "/partners/aviahurtok",
  },
  {
    text: "Буксирування автомобіля",
    withImage: true,
    path: "/partners/buksyruvannya-avto",
  },
];
