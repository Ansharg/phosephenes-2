import React from "react";
import prize from "../assets/comingsoon.png";
import vector from "../assets/Vector.svg";
import star2 from '../assets/star2.svg'
import wolf from '../assets/wolfram-logo.png'
import koffee from '../assets/koffeehouz.png'
import us from '../assets/unsaid.png'
import cbs from '../assets/cbs.png';
import gmc from '../assets/gmc.png';
import selle from '../assets/selle.png';
import vardiano from '../assets/vardiano.png';
import ccsc from '../assets/ques.svg';
import title from '../assets/title reveal.png'
import sybgen from '../assets/SYBGEN-1.png'
import streamyard from '../assets/streamyard3605.jpg'
import interviewcake from '../assets/r-66-interview-cake-be-good-at-programming-interviews.jpg'
import canva from '../assets/1656733637logo-canva-png.webp'
import zsecurity from '../assets/zsecurity.webp'
import xyz from '../assets/xyzdomains.png'
import intern from '../assets/internshala.webp'
import timepass from '../assets/timepass.jpeg'
import waffle from '../assets/waffle.png'
import gofro from '../assets/gofro.png'
import airtel from '../assets/airtel.png'
import ezy from "../assets/eazydiner.png"
import what from "../assets/what.png"
import nord from "../assets/nord.png"
import codingninjas from "../assets/cnlogo.png"
import nordpass from "../assets/nordpass.png"
import peerlist from "../assets/peerlist.png"
import incogni from "../assets/incogni.png"
import amd from "../assets/amd.png"
import echo from "../assets/echo.jpg"
import mario from "../assets/mario.jpg"
import aecc from "../assets/aecc.png"
import creambell from "../assets/creambell.png"
import skyjumper from "../assets/skyjumper.png"
import time from "../assets/time.jpg"

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  EffectFade,
  Autoplay,
  Navigation,
  Pagination,
} from "swiper";
import "swiper/css";
const Prizes = () => {
  SwiperCore.use([Autoplay, Navigation, Pagination]);
  return (
    <>
      <section className="w-screen h-full bg-black" id="prizes">
        <div className="w-full h-full flex items-center justify-center py-2 lg:py-6 lg:p-2">
          <div className="w-full h-full flex items-start justify-center flex-row lg:py-4 lg:p-2">
            <div className="w-full h-full flex items-start justify-start lg:w-[65%] flex-col p-6">
              <div className="flex items-center justify-start">
                <h1 className="text-[2rem]  xs:text-[2.7rem] s:text-6xl sm:text-[4rem] md:text-[5rem] lg:text-8xl xl:text-9xl 2xl:text-[154px] font-black sm:leading-tight text-[#ffffff]">
                  PRIZES <span className="text-purple-800">.</span>
                </h1>
              </div>
              <div className="xs:flex items-center justify-center flex-row w-full md:w-[75%] lg:w-full  my-6">
                <p className="font-normal text-xs text-white sm:text-sm lg:text-lg ">
                  Delecacies worth of 1.2 crores which will include: • Winning Delecacy 30 Lakh •
                  Goodies worth 72 Lakh Each participant will get premium goodies
                  and merch. Venue - <span className="text-purple-800">Chitkara University, Punjab</span> , Date: 25-26 April, 2024.

                </p>
              </div>
              <div className="flex items-center justify-start w-full flex-col max-w-4xl lg:w-full">
                <div className="flex items-center justify-between w-full flex-row border-t-2 border-white border-b-2 px-1 py-6">
                  <h1 className="flex text-purple-800 items-center justify-center gap-4 text-2xl xs:text-3xl s:text-4xl md:text-5xl lg:text-6xl  font-black">
                    Delecacies<br />Worth
                  </h1>
                  <h1 className="flex items-center justify-center gap-4 text-2xl xs:text-3xl s:text-4xl md:text-5xl lg:text-6xl text-[#ffffff] font-black">
                  1.2 CRORES
                  </h1>
                </div>
                <div className="flex items-center justify-between w-full flex-row border-white px-1 py-6">
                  <h1 className="flex items-center justify-center gap-4 text-2xl xs:text-3xl s:text-4xl md:text-5xl lg:text-6xl  text-[#ffffff] font-black">
                    Winning<br />Delecacy
                  </h1>
                  <h1 className="flex items-center justify-center gap-4 text-2xl xs:text-3xl s:text-4xl md:text-5xl lg:text-6xl  text-[#ffffff] font-black">
                  30 LAKHS
                  </h1>
                </div>
                <div className="flex items-center justify-between w-full flex-row border-t-2 border-white border-b-2 px-1 py-6">
                  <h1 className="flex items-center justify-center gap-4 text-2xl xs:text-3xl s:text-4xl md:text-5xl lg:text-6xl  text-purple-800 font-black">
                    Goodies
                  </h1>
                  <h1 className="flex items-center justify-center gap-4 text-2xl xs:text-3xl s:text-4xl md:text-5xl lg:text-6xl  text-[#ffffff] font-black">
                    72 LAKHS
                  </h1>
                </div>
              </div>
            </div>
            <div className="lg:flex hidden items-center justify-start w-[35%] flex-col p-4">
              <div className="flex items-center justify-center p-2 rounded-tl-[3.5rem] ">
                <img src={prize} alt="prize" className="h-80 w-80 rounded-tl-[3.5rem] shadow-[-10px_-10px_0px_0px_rgba(107,33,168)]" />
              </div>
              <div className="flex items-center justify-center flex-row w-full sm:p-2 my-6">
                <p className="font-normal text-xs text-white sm:text-sm lg:text-lg ">
                  It will be a 36 hr event. Team of 5 will be made having 3
                  Chitkara Business School students and 2 CSE students. Teams
                  will be formed by organising team and will be assigned one
                  nation, and will manage each nation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-screen md:h-screen bg-black">
        <div className="w-full h-full flex items-center justify-center p-4 lg:p-6">
          <div className="w-full h-full flex items-start justify-center flex-row  s:p-4 md:p-6 lg:p-8 my-4">
            <div className="flex items-center justify-center bg-[#292929] p-4 md:p-6 sm:py-12 w-full h-full relative">
              <div className="flex items-center justify-center flex-row my-4 w-full s:max-w-7xl s:w-[85%] md:w-[90%]">
                <p className="items-center justify-center inline-block text-center gap-4 text-2xl xs:text-3xl sm:text-4xl p-1 sm:p-2 md:text-5xl lg:text-6xl xl:text-7xl text-[#ffffff] font-black w-full">
                  A CREATIVE <span className="text-purple-800">MIND</span> KNOWS
                  HOW TO DO THE RIGHT{" "}
                  <span className="text-purple-800">THING</span> AT THE{" "}
                  <span className="text-purple-800">RIGHT </span>
                  PLACE AND AT THE RIGHT{" "}
                  <span className="text-purple-800">TIME .</span>
                </p>
                <img
                  src={vector}
                  alt="vector"
                  className="absolute top-0 left-0 w-8 h-8 sm:h-14 sm:w-14"
                />
                <img
                  src={vector}
                  alt="vector"
                  className="absolute bottom-0 right-0 w-8 h-8 sm:h-14 sm:w-14"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-screen h-full py-16 md:overflow-hidden relative bg-black">
        <div className=" h-full flex flex-col items-center gap-4 justify-center w-full z-[10] p-2">
          <div className="text-white z-10">
            <div className="lg:text-6xl text-purple-800 md:text-4xl font-bold uppercase z-[10]">
              <p>Title Sponsor</p>
            </div>
          </div> 
          <div className=" flex items-center justify-center w-full z-[10] p-2">
            <Swiper
              modules={[Navigation, Pagination, EffectFade, Autoplay]}
              navigation={false}
              slidesPerView={1}
              spaceBetween={50}
              autoplay={{ delay: 2000 }}
            >
              <div className="items-center xl:hidden flex justify-center flex-row w-full h-full gap-12">
                <SwiperSlide className="s:p-4 xs:p-7 p-4  items-center justify-center flex-row">

                  <div className="flex items-center mx-auto md:w-96 w-auto  justify-center bg-white rounded-md p-2"> <img src={airtel} alt="ccsc" className="md:h-32 h-14 xs:h-16 s:h-20 w-auto" /> </div>
                </SwiperSlide>
              </div>
            </Swiper>
          </div>
          <div className="text-white z-10">
            <div className="text-purple-800 lg:text-6xl md:text-4xl font-bold uppercase z-[10]">
              <p>Diamond Sponsor</p>
            </div>
          </div>
          <div className=" flex items-center justify-center w-full z-[10] p-2">
            <Swiper
              modules={[Navigation, Pagination, EffectFade, Autoplay]}
              navigation={false}
              slidesPerView={2}
              spaceBetween={50}
              autoplay={{ delay: 2000 }}
              breakpoints={{
                300: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                520: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
              }}
            >
              <div className="items-center xl:hidden flex justify-center flex-row w-full h-full gap-12">
                {/* <SwiperSlide className="s:p-4 xs:p-7 p-4  items-center justify-center flex-row">

                  <div className="flex items-center mx-auto md:w-96 w-auto  justify-center bg-white rounded-md p-2"> <img src={wolf} alt="ccsc" className="md:h-32 h-14 xs:h-16 s:h-20 w-auto" /> </div>
                </SwiperSlide> */}
                <SwiperSlide className="s:p-4 xs:p-7 p-4  items-center justify-center flex-row">

                  <div className="flex items-center mx-auto md:w-96 w-auto  justify-center bg-white rounded-md p-2"> <img src={codingninjas} alt="ccsc" className="md:h-32 h-14 xs:h-16 s:h-20 w-auto" /> </div>
                </SwiperSlide>
                <SwiperSlide className="s:p-4 xs:p-7 p-4  items-center justify-center flex-row">

                  <div className="flex items-center mx-auto md:w-96 w-auto  justify-center bg-white rounded-md p-2"> <img src={ezy} alt="ccsc" className="md:h-32 h-14 xs:h-16 s:h-20 w-auto" /> </div>
                </SwiperSlide>
              </div>
            </Swiper>
          </div>
          <div className="text-white z-10">
            <div className="text-purple-800 lg:text-6xl md:text-4xl font-bold uppercase z-[10]">
              <p>Platinum Sponsor</p>
            </div>
          </div>
          <div className=" flex items-center justify-center w-full z-[10] p-2">
            <Swiper
              modules={[Navigation, Pagination, EffectFade, Autoplay]}
              navigation={false}
              slidesPerView={2}
              spaceBetween={50}
              autoplay={{ delay: 2000 }}
              breakpoints={{
                300: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                520: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
              }}
            >
              <div className="items-center xl:hidden flex justify-center flex-row w-full h-full gap-12">
                <SwiperSlide className="s:p-4 xs:p-7 p-4  items-center justify-center flex-row">

                  <div className="flex items-center mx-auto md:w-96 w-auto  justify-center bg-white rounded-md p-2"> <img src={wolf} alt="ccsc" className="md:h-32 h-14 xs:h-16 s:h-20 w-auto" /> </div>
                </SwiperSlide>
                {/* <SwiperSlide className="s:p-4 xs:p-7 p-4  items-center justify-center flex-row">

                  <div className="flex items-center mx-auto md:w-96 w-auto  justify-center bg-white rounded-md p-2"> <img src={codingninjas} alt="ccsc" className="md:h-32 h-14 xs:h-16 s:h-20 w-auto" /> </div>
                </SwiperSlide> */}
                <SwiperSlide className="s:p-4 xs:p-7 p-4  items-center justify-center flex-row">

                  <div className="flex items-center mx-auto md:w-96 w-auto  justify-center bg-white rounded-md p-2"> <img src={mario} alt="ccsc" className="md:h-32 h-14 xs:h-16 s:h-20 w-auto" /> </div>
                </SwiperSlide>
                <SwiperSlide className="s:p-4 xs:p-7 p-4  items-center justify-center flex-row">

                  <div className="flex items-center mx-auto md:w-96 w-auto  justify-center bg-white rounded-md p-2"> <img src={aecc} alt="ccsc" className="md:h-32 h-14 xs:h-16 s:h-20 w-auto" /> </div>
                </SwiperSlide>
              </div>
            </Swiper>
          </div>
          <div className="text-white z-10">
            <div className=" text-purple-800 lg:text-6xl md:text-4xl  font-bold uppercase z-[10]">
              <p>Gold Sponsor</p>
            </div>
          </div>
          <div className=" flex items-center justify-center w-full z-[10] p-2">
            <Swiper
              modules={[Navigation, Pagination, EffectFade, Autoplay]}
              navigation={false}
              slidesPerView={3}
              spaceBetween={50}
              autoplay={{ delay: 2000 }}
              breakpoints={{
                300: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                520: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
              }}
            >
              <div className="items-center xl:hidden flex justify-center flex-row w-full h-full gap-12">
                <SwiperSlide className="s:p-4 xs:p-7 p-4  items-center justify-center flex-row">

                  <div className="flex items-center mx-auto max-[700px]:w-auto w-96  justify-center bg-white rounded-md p-2"> <img src={gmc} alt="ccsc" className="md:h-32 h-14 xs:h-16 s:h-20 w-auto" /> </div>
                </SwiperSlide>
                <SwiperSlide className="s:p-4 xs:p-7 p-4  items-center justify-center flex-row">

                  <div className="flex items-center mx-auto max-[700px]:w-auto w-96  justify-center bg-white rounded-md p-2"> <img src={us} alt="ccsc" className="md:h-32 h-14 xs:h-16 s:h-20 w-auto" /> </div>
                </SwiperSlide>
                <SwiperSlide className="s:p-4 xs:p-7 p-4  items-center justify-center flex-row">

                  <div className="flex items-center mx-auto max-[700px]:w-auto w-96  justify-center bg-white rounded-md p-2"> <img src={sybgen} alt="ccsc" className="md:h-32 h-14 xs:h-16 s:h-20 w-auto" /> </div>
                </SwiperSlide>
                <SwiperSlide className="s:p-4 xs:p-7 p-4  items-center justify-center flex-row">

                  <div className="flex items-center mx-auto max-[700px]:w-auto w-96  justify-center bg-white rounded-md p-2"> <img src={creambell} alt="ccsc" className="md:h-32 h-14 xs:h-16 s:h-20 w-auto" /> </div>
                </SwiperSlide>
                <SwiperSlide className="s:p-4 xs:p-7 p-4  items-center justify-center flex-row">

                  <div className="flex items-center mx-auto max-[700px]:w-auto w-96  justify-center bg-white rounded-md p-2"> <img src={time} alt="ccsc" className="md:h-32 h-14 xs:h-16 s:h-20 w-auto" /> </div>
                </SwiperSlide>
              </div>
            </Swiper>
          </div>
          <div className="text-white z-10">
            <div className="text-purple-800 lg:text-6xl md:text-4xl font-bold uppercase z-[10]">
              <p>Silver Sponsor</p>
            </div>
          </div>
          <div className=" flex items-center justify-center w-full z-[10] p-2">
            <Swiper
              modules={[Navigation, Pagination, EffectFade, Autoplay]}
              navigation={false}
              slidesPerView={3}
              spaceBetween={50}
              autoplay={{ delay: 2000 }}
              breakpoints={{
                300: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                520: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
              }}
            >
              <div className="items-center xl:hidden flex justify-center flex-row w-full h-full gap-12">
                <SwiperSlide className="s:p-4 xs:p-7 p-4  items-center justify-center flex-row">

                  <div className="flex items-center mx-auto max-[700px]:w-auto w-96  justify-center bg-white rounded-md p-2"> <img src={koffee} alt="ccsc" className="md:h-32 h-14 xs:h-16 s:h-20 w-auto" /> </div>
                </SwiperSlide>
                <SwiperSlide className="s:p-4 xs:p-7 p-4  items-center justify-center flex-row">

                  <div className="flex items-center mx-auto max-[700px]:w-auto w-96   justify-center bg-white rounded-md p-2"> <img src={xyz} alt="ccsc" className="md:h-32 h-14 xs:h-16 s:h-20 w-auto" /> </div>
                </SwiperSlide>

                <SwiperSlide className="s:p-4 xs:p-7 p-4  items-center justify-center flex-row">

                  <div className="flex items-center mx-auto max-[700px]:w-auto w-96  justify-center bg-white rounded-md p-2"> <img src={interviewcake} alt="ccsc" className="md:h-32 h-14 xs:h-16 s:h-20 w-auto" /> </div>
                </SwiperSlide>
                <SwiperSlide className="s:p-4 xs:p-7 p-4  items-center justify-center flex-row">

                  <div className="flex items-center mx-auto max-[700px]:w-auto w-96   justify-center bg-white rounded-md p-2"> <img src={canva} alt="ccsc" className="md:h-32 h-14 xs:h-16 s:h-20 w-auto" /> </div>
                </SwiperSlide>
                <SwiperSlide className="s:p-4 xs:p-7 p-4  items-center justify-center flex-row">

                  <div className="flex items-center mx-auto max-[700px]:w-auto w-96   justify-center bg-white rounded-md p-2"> <img src={what} alt="ccsc" className="md:h-32 h-14 xs:h-16 s:h-20 w-auto" /> </div>
                </SwiperSlide>
                <SwiperSlide className="s:p-4 xs:p-7 p-4  items-center justify-center flex-row">

                  <div className="flex items-center mx-auto max-[700px]:w-auto w-96   justify-center bg-white rounded-md p-2"> <img src={skyjumper} alt="ccsc" className="md:h-32 h-14 xs:h-16 s:h-20 w-auto" /> </div>
                </SwiperSlide>
              </div>
            </Swiper>
          </div>
          <div className="text-white z-10">
            <div className=" text-purple-800 lg:text-6xl md:text-4xl  font-bold uppercase z-[10]">
              <p>Bronze Sponsor</p>
            </div>
          </div>
          <div className=" flex items-center justify-center w-full z-[10] p-2">
            <Swiper
              modules={[Navigation, Pagination, EffectFade, Autoplay]}
              navigation={false}
              slidesPerView={3}
              spaceBetween={50}
              autoplay={{ delay: 2000 }}
              breakpoints={{
                300: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                520: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
              }}
            >
              <div className="items-center xl:hidden flex justify-center flex-row w-full h-full gap-12">
                <SwiperSlide className="s:p-4 xs:p-7 p-4  items-center justify-center flex-row">

                  <div className="flex items-center mx-auto max-[700px]:w-auto w-96   justify-center bg-white rounded-md p-2"> <img src={streamyard} alt="ccsc" className="md:h-32 h-14 xs:h-16 s:h-20 w-auto" /> </div>
                </SwiperSlide>
                <SwiperSlide className="s:p-4 xs:p-7 p-4  items-center justify-center flex-row">

                  <div className="flex items-center mx-auto max-[700px]:w-auto w-96   justify-center bg-white rounded-md p-2"> <img src={zsecurity} alt="ccsc" className="md:h-32 h-14 xs:h-16 s:h-20 w-auto" /> </div>
                </SwiperSlide>
                <SwiperSlide className="s:p-4 xs:p-7 p-4  items-center justify-center flex-row">

                  <div className="flex items-center mx-auto max-[700px]:w-auto w-96   justify-center bg-white rounded-md p-2"> <img src={intern} alt="ccsc" className="md:h-32 h-14 xs:h-16 s:h-20 w-auto" /> </div>
                </SwiperSlide>
                <SwiperSlide className="s:p-4 xs:p-7 p-4  items-center justify-center flex-row">

                  <div className="flex items-center mx-auto max-[700px]:w-auto w-96   justify-center bg-white rounded-md p-2"> <img src={timepass} alt="ccsc" className="md:h-32 h-14 xs:h-16 s:h-20 w-auto" /> </div>
                </SwiperSlide>
                <SwiperSlide className="s:p-4 xs:p-7 p-4  items-center justify-center flex-row">

                  <div className="flex items-center mx-auto max-[700px]:w-auto w-96   justify-center bg-white rounded-md p-2"> <img src={waffle} alt="ccsc" className="md:h-32 h-14 xs:h-16 s:h-20 w-auto" /> </div>
                </SwiperSlide>
                <SwiperSlide className="s:p-4 xs:p-7 p-4  items-center justify-center flex-row">

                  <div className="flex items-center mx-auto max-[700px]:w-auto w-96   justify-center bg-white rounded-md p-2"> <img src={gofro} alt="ccsc" className="md:h-32 h-14 xs:h-16 s:h-20 w-auto" /> </div>
                </SwiperSlide>
                <SwiperSlide className="s:p-4 xs:p-7 p-4  items-center justify-center flex-row">

                  <div className="flex items-center mx-auto max-[700px]:w-auto w-96   justify-center bg-white rounded-md p-2"> <img src={nord} alt="ccsc" className="md:h-32 h-14 xs:h-16 s:h-20 w-auto" /> </div>
                </SwiperSlide>
                <SwiperSlide className="s:p-4 xs:p-7 p-4  items-center justify-center flex-row">

                  <div className="flex items-center mx-auto max-[700px]:w-auto w-96   justify-center bg-white rounded-md p-2"> <img src={nordpass} alt="ccsc" className="md:h-32 h-14 xs:h-16 s:h-20 w-auto" /> </div>
                </SwiperSlide>
                <SwiperSlide className="s:p-4 xs:p-7 p-4  items-center justify-center flex-row">

                  <div className="flex items-center mx-auto max-[700px]:w-auto w-96   justify-center bg-white rounded-md p-2"> <img src={amd} alt="ccsc" className="md:h-32 h-14 xs:h-16 s:h-20 w-auto" /> </div>
                </SwiperSlide>
                <SwiperSlide className="s:p-4 xs:p-7 p-4  items-center justify-center flex-row">

                  <div className="flex items-center mx-auto max-[700px]:w-auto w-96   justify-center bg-white rounded-md p-2"> <img src={peerlist} alt="ccsc" className="md:h-32 h-14 xs:h-16 s:h-20 w-auto" /> </div>
                </SwiperSlide>
                <SwiperSlide className="s:p-4 xs:p-7 p-4  items-center justify-center flex-row">

                  <div className="flex items-center mx-auto max-[700px]:w-auto w-96   justify-center bg-white rounded-md p-2"> <img src={incogni} alt="ccsc" className="md:h-32 h-14 xs:h-16 s:h-20 w-auto" /> </div>
                </SwiperSlide>
                <SwiperSlide className="s:p-4 xs:p-7 p-4  items-center justify-center flex-row">

                  <div className="flex items-center mx-auto max-[700px]:w-auto w-96   justify-center bg-white rounded-md p-2"> <img src={echo} alt="ccsc" className="md:h-32 h-14 xs:h-16 s:h-20 w-auto" /> </div>
                </SwiperSlide>
                {/* <SwiperSlide className="s:p-4 xs:p-7 p-4  items-center justify-center flex-row">

                  <div className="flex items-center mx-auto max-[700px]:w-auto w-96   justify-center bg-white rounded-md p-2"> <img src={ccsc} alt="ccsc" className="md:h-32 h-14 xs:h-16 s:h-20 w-auto" /> </div>
                </SwiperSlide> */}
                {/* <SwiperSlide className="s:p-4 xs:p-7 p-4  items-center justify-center flex-row">

                  <div className="flex items-center mx-auto max-[700px]:w-auto w-96   justify-center bg-white rounded-md p-2"> <img src={ccsc} alt="ccsc" className="md:h-32 h-14 xs:h-16 s:h-20 w-auto" /> </div>
                </SwiperSlide> */}
              </div>
            </Swiper>
          </div>





        </div>
        <div className="h-screen hidden md:flex items-center justify-center absolute top-0 bottom-0 left-0 right-0  w-full ">
          <div className="flex w-full h-full items-center  justify-center py-0 sm:py-2 md:py-4 lg:py-6"><marquee className="py-10 xs:py-12 rotate-[45deg] w-full h-full"><h1 className="flex items-center justify-center gap-4 text-2xl xs:text-3xl s:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white/20 font-black">DESIGN YOUR IDEAS <img className='w-8 h-8' src={star2} alt="star2" /> BUILD YOUR IDEAS</h1></marquee></div>
        </div>
        <div className="h-screen hidden md:flex items-center justify-center w-full absolute top-0 bottom-0 left-0 right-0 ">
          <div className="flex w-full h-full items-center  justify-center py-0 sm:py-2 md:py-4 lg:py-6"><marquee className="py-10 xs:py-12 rotate-[-45deg] w-full h-full"><h1 className="flex items-center justify-center gap-4 text-2xl xs:text-3xl s:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white/20 font-black">DESIGN YOUR IDEAS <img className='w-8 h-8' src={star2} alt="star2" /> BUILD YOUR IDEAS</h1></marquee></div>
        </div>
        <div className="h-screen hidden md:flex items-center justify-center w-full absolute top-0 bottom-0 left-0 right-0 ">
          <div className="flex w-full h-full items-center  justify-center py-0 sm:py-2 md:py-4 lg:py-6"><marquee className="py-10 xs:py-12 rotate-[-135deg] w-full h-full"><h1 className="flex items-center justify-center gap-4 text-2xl xs:text-3xl s:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white/20 font-black">DESIGN YOUR IDEAS <img className='w-8 h-8' src={star2} alt="star2" /> BUILD YOUR IDEAS</h1></marquee></div>
        </div>
        <div className="h-screen hidden md:flex items-center justify-center w-full absolute top-0 bottom-0 left-0 right-0 ">
          <div className="flex w-full h-full items-center  justify-center py-0 sm:py-2 md:py-4 lg:py-6"><marquee className="py-10 xs:py-12 rotate-[135deg] w-full h-full"><h1 className="flex items-center justify-center gap-4 text-2xl xs:text-3xl s:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white/20 font-black">DESIGN YOUR IDEAS <img className='w-8 h-8' src={star2} alt="star2" /> BUILD YOUR IDEAS</h1></marquee></div>
        </div>

      </section>
    </>
  );
};

export default Prizes;
