import React from "react";
import { Footer, Header } from "./components";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ContactPage from "./pages/ContactPage";
import SignleCategory from "./pages/SingleCategry";
import AboutPage from "./pages/AboutPage";

import k1p1 from '../src/components/images/Kitchens/k1/Copy of kitchen3_Unnamed Space-10.jpeg'
import k1p2 from '../src/components/images/Kitchens/k1/Copy of kitchen3_Unnamed Space-10 - Copy.jpeg'
import k1p3 from '../src/components/images/Kitchens/k1/Copy of kitchen3_Unnamed Space-11.jpeg'
import k1p4 from '../src/components/images/Kitchens/k1/Copy of kitchen3_Unnamed Space-11 - Copy.jpeg'
import k1p5 from '../src/components/images/Kitchens/k1/Copy of kitchen3_Unnamed Space-11(1).jpeg'
import k1p6 from '../src/components/images/Kitchens/k1/Copy of kitchen3_Unnamed Space-12 - Copy.jpeg'

import k2p1 from '../src/components/images/Kitchens/k2/4 th kitchen.png'
import k2p2 from '../src/components/images/Kitchens/k2/4th kitchen.png'
import k2p3 from '../src/components/images/Kitchens/k2/4thkitchen.png'

import k3p1 from '../src/components/images/Kitchens/k3/1st kitchen.jpeg'
import k3p2 from '../src/components/images/Kitchens/k3/1st kitchen.jpeg'


import opti1 from '../src/components/images/OpticalStoreDesign/BrandOptics/310366898_497503539053478_5108431652593121113_n (1).jpg' 
import opti2 from '../src/components/images/OpticalStoreDesign/BrandOptics/HAD (10).jpg' 
import opti3 from '../src/components/images/OpticalStoreDesign/BrandOptics/HAD (13).jpg' 
import opti4 from '../src/components/images/OpticalStoreDesign/BrandOptics/HAD (3).jpg' 
import opti5 from '../src/components/images/OpticalStoreDesign/BrandOptics/HAD (5).jpg' 
import opti6 from '../src/components/images/OpticalStoreDesign/BrandOptics/HAD (7).jpg' 
import opti7 from '../src/components/images/OpticalStoreDesign/BrandOptics/HAD (9).jpg' 

import optii1 from '../src/components/images/OpticalStoreDesign/DiorOptics/HAD (14).jpg' 
import optii2 from '../src/components/images/OpticalStoreDesign/DiorOptics/HAD (18).jpg' 
import optii3 from '../src/components/images/OpticalStoreDesign/DiorOptics/HAD (19).jpg' 
import optii4 from '../src/components/images/OpticalStoreDesign/DiorOptics/HAD (6).jpg' 
import optii5 from '../src/components/images/OpticalStoreDesign/DiorOptics/HAD (8).jpg' 
import optii6 from '../src/components/images/OpticalStoreDesign/DiorOptics/WhatsApp Image 2022-10-23 at 2.18.16 AM.jpeg' 
import optii7 from '../src/components/images/OpticalStoreDesign/DiorOptics//WhatsApp Image 2022-10-23 at 2.18.16 AM (1).jpeg' 

import ini1 from '../src/components/images/InteriorDesign/project 1/IMG-20221009-WA0020.jpg'
import ini2 from '../src/components/images/InteriorDesign/project 1/IMG-20221009-WA0021.jpg'
import ini3 from '../src/components/images/InteriorDesign/project 1/IMG-20221009-WA0022.jpg'
import ini4 from '../src/components/images/InteriorDesign/project 1/IMG-20221009-WA0023.jpg'
import ini5 from '../src/components/images/InteriorDesign/project 1/IMG-20221009-WA0024.jpg'

import inii1 from '../src/components/images/InteriorDesign/project 2/Living Room.jpg'
import inii2 from '../src/components/images/InteriorDesign/project 2/Living Room(1).jpg'

import a1p1 from '../src/components/images/Accessories/1.jpg'
import a1p2 from '../src/components/images/Accessories/2.jpg'
import a1p3 from '../src/components/images/Accessories/3.jpg'
import a1p4 from '../src/components/images/Accessories/4.jpg'
import { useTranslation } from "react-i18next";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/app.scss";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap/js/dist/dropdown";
import "bootstrap/js/dist/button";

function App() {

  const {t} = useTranslation();
  const categories = [
    {
      id: 1,
      title: `${t('Optical_store_design')}`,
      desc: `${(t('optical__desc'))}`,
      projects: [
        {
          id: 1,
          title: `${t('Brand_Optics')}`,
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, recusandae!',
          images: [
            {
              id: 1,
              src: opti1
            },
            {
              id: 2,
              src: opti2
            },
            {
              id: 3,
              src: opti3
            },
            {
              id: 4,
              src: opti4
            },
            {
              id: 5,
              src: opti5
            },
            {
              id: 6,
              src: opti6
            },
            {
              id: 7,
              src: opti7
            },
          ]
        },
        {
          id: 1,
          title: `${t('Dior_Optics')}`,
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, recusandae!',
          images: [
            {
              id: 1,
              src: optii1
            },
            {
              id: 2,
              src: optii2
            },
            {
              id: 3,
              src: optii3
            },
            {
              id: 4,
              src: optii4
            },
            {
              id: 5,
              src: optii5
            },
            {
              id: 6,
              src: optii6
            },
            {
              id: 7,
              src: optii7
            },
          ]
        },
      ]
    },
    {
      id: 2,
      title: `${t('Interior_design')}`,
      desc: `${t('interior__desc')}`,
      projects: [
        {
          id: 1,
          title: `${t('project_One')}`,
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, recusandae!',
          images: [
            {
              id: 1,
              src: ini1
            },
            {
              id: 2,
              src: ini2
            },
            {
              id: 3,
              src: ini3
            },
            {
              id: 4,
              src: ini4
            },
            {
              id: 5,
              src: ini5
            },
          ]
        },
        {
          id: 2,
          title: `${t('project_Two')}`,
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, recusandae!',
          images: [
            {
              id: 1,
              src: inii1
            },
            {
              id: 2,
              src: inii2
            },
          ]
        }
      ]
    },
    {
      id: 3,
      title: `${t('Kitchens')}`,
      desc:`${t('Kitchens__desc')}`,
      projects: [
        {
          id: 1,
          title: `${t('projectOne')}`,
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, recusandae!',
          images: [
            {
              id: 1,
              src: k1p1
            },
            {
              id: 2,
              src: k1p2
            },
            {
              id: 3,
              src: k1p3
            },
            {
              id: 4,
              src: k1p4
            },
            {
              id: 5,
              src: k1p5
            },
            {
              id: 6,
              src: k1p6
            }
          ]
        },
        {
          id: 2,
          title: `${t('project_Two')}`,
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, recusandae!',
          images: [
            {
              id: 1,
              src: k2p1
            },
            {
              id: 2,
              src: k2p2
            },
            {
              id: 3,
              src: k2p3
            },
          ]
        },
        {
          id: 3,
          title: `${t('project_Three')}`,
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, recusandae!',
          images: [
            {
              id: 1,
              src: k3p1
            },
            {
              id: 2,
              src: k3p2
            }
          ]
        }
      ]
    },
    {
      id: 4,
      title: `${t('Accessories')}`,
      desc: `${t('Accessories__desc')}`,
      projects: [
        {
          id: 1,
          title: `${t('project_One')}`,
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, recusandae!',
          images: [
            {
              id: 1,
              src: a1p1
            },
            {
              id: 2,
              src: a1p2
            },
            {
              id: 3,
              src: a1p3
            },
            {
              id: 3,
              src: a1p4
            },
          ]
        },
      ]
    },
  ];

  return (
    <>
      <Header />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/we-can" index element={<Home />} />
        <Route path="/contact-us" element={<ContactPage />} />
        <Route
          path="/optical-store-design"
          element={<SignleCategory data={categories[0]} />}
        />
        <Route
          path="/interior-design"
          element={<SignleCategory data={categories[1]} />}
        />
        <Route
          path="/kitchens"
          element={<SignleCategory data={categories[2]} />}
        />
        <Route
          path="/accessories"
          element={<SignleCategory data={categories[3]} />}
        />
        <Route
          path="/about-us"
          element={<AboutPage />}
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
