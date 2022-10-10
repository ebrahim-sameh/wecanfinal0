import React from "react";
import { Footer, Header } from "./components";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ContactPage from "./pages/ContactPage";
import SignleCategory from "./pages/SingleCategry";
import AboutPage from "./pages/AboutPage";
import k1p1 from '../src/components/images/Kitchens/k1/1.jpg'
import k1p2 from '../src/components/images/Kitchens/k1/2.jpg'
import k1p3 from '../src/components/images/Kitchens/k1/3.jpg'

import k2p1 from '../src/components/images/Kitchens/k2/1.jpg'
import k2p2 from '../src/components/images/Kitchens/k2/2.jpg'
import k2p3 from '../src/components/images/Kitchens/k2/3.jpg'

import k3p1 from '../src/components/images/Kitchens/k3/1.jpg'
import k3p2 from '../src/components/images/Kitchens/k3/2.jpg'
import k3p3 from '../src/components/images/Kitchens/k3/3.jpg'

import k4p1 from '../src/components/images/Kitchens/k4/1.jpg'
import k4p2 from '../src/components/images/Kitchens/k4/2.jpg'

import k5p1 from '../src/components/images/Kitchens/k5/1.jpg'
import k5p2 from '../src/components/images/Kitchens/k5/2.jpg'

import opt1 from '../src/components/images/optics/1.png' 
import opt2 from '../src/components/images/optics/2.png' 
import opt3 from '../src/components/images/optics/3.png' 
import opt4 from '../src/components/images/optics/4.png' 

import i1p1 from '../src/components/images/Interior/l1/Living Room.jpg'
import i1p2 from '../src/components/images/Interior/l1/Living Room(1).jpg'

import i2p1 from '../src/components/images/Interior/l2/1st library.jpeg'

import i3p1 from '../src/components/images/Interior/l3/3rd library.jpeg'

import i4p1 from '../src/components/images/Interior/l4/4th library.jpg'
import i4p2 from '../src/components/images/Interior/l4/5 th library.jpg'
import i4p3 from '../src/components/images/Interior/l4/6th library.jpg'

import a1p1 from '../src/components/images/Accessories/1.jpg'
import a1p2 from '../src/components/images/Accessories/2.jpg'
import a1p3 from '../src/components/images/Accessories/3.jpg'
import a1p4 from '../src/components/images/Accessories/4.jpg'

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/app.scss";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap/js/dist/dropdown";
import "bootstrap/js/dist/button";

function App() {

  const categories = [
    {
      id: 1,
      title: 'Optical store design',
      desc:'You can easily display your products and services in a way that is both elegant and practical, with our trendy and creative optic store design.',
      projects: [
        {
          id: 1,
          title: 'project Name',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, recusandae!',
          images: [
            {
              id: 1,
              src: opt1
            },
            {
              id: 2,
              src: opt2
            },
            {
              id: 3,
              src: opt3
            },
            {
              id: 3,
              src: opt4
            },
          ]
        }
      ]
    },
    {
      id: 2,
      title: 'Interior design',
      desc: "When it comes to interior design, there's a lot to choose from. We recognise that every detail is important, so we offer a wide choice of furniture and decorations.",
      projects: [
        {
          id: 1,
          title: 'project Name',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, recusandae!',
          images: [
            {
              id: 1,
              src: i4p1
            },
            {
              id: 2,
              src: i4p2
            },
            {
              id: 3,
              src: i4p3
            },
          ]
        },
        {
          id: 2,
          title: 'project Name',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, recusandae!',
          images: [
            {
              id: 1,
              src: i3p1
            }
          ]
        },
        {
          id: 3,
          title: 'project Name',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, recusandae!',
          images: [
            {
              id: 1,
              src: i2p1
            }
          ]
        },
        {
          id: 4,
          title: 'project Name',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, recusandae!',
          images: [
            {
              id: 1,
              src: i1p1
            },
            {
              id: 2,
              src: i1p2
            },
          ]
        }
      ]
    },
    {
      id: 3,
      title: 'Kitchens',
      desc:'We have everything you need to bring your dream kitchen to life. Call us today to help make your vision a reality!',
      projects: [
        {
          id: 1,
          title: 'project Name',
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
          ]
        },
        {
          id: 2,
          title: 'project Name',
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
          title: 'project Name',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, recusandae!',
          images: [
            {
              id: 1,
              src: k3p1
            },
            {
              id: 2,
              src: k3p2
            },
            {
              id: 3,
              src: k3p3
            },
          ]
        },
        {
          id: 4,
          title: 'project Name',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, recusandae!',
          images: [
            {
              id: 1,
              src: k4p1
            },
            {
              id: 2,
              src: k4p2
            },
          ]
        },
        {
          id: 5,
          title: 'project Name',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, recusandae!',
          images: [
            {
              id: 1,
              src: k5p1
            },
            {
              id: 1,
              src: k5p2
            }
          ]
        },
      ]
    },
    {
      id: 4,
      title: 'Accessories',
      desc:'Our range of wooden accessories is perfect for adding a touch of nature to any room.',
      projects: [
        {
          id: 1,
          title: 'project Name',
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
