import Image from "next/image";
import midf from "../public/Our-Global-Clients/midf.svg";
import tech from "../public/Our-Global-Clients/techmahindra.svg";
import sodexo from "../public/Our-Global-Clients/sodexo.svg";
import neewee from "../public/Our-Global-Clients/neewee.svg";
import digi from "../public/Our-Global-Clients/digi.svg";
import cimb from "../public/Our-Global-Clients/cimb.svg";
import hsbc from "../public/Our-Global-Clients/hsbc.svg";
import changing from "../public/Our-Global-Clients/x-changing.svg";
import effigst from "../public/Our-Global-Clients/effigst.svg";
import cmb from "../public/Our-Global-Clients/cmb.svg";
import sansys from "../public/Our-Global-Clients/sansys.svg";
import deamon from "../public/Our-Global-Clients/deamon.svg";
import blueendeavour from "../public/Our-Global-Clients/blueendeavour.svg";
import capgemini from "../public/Our-Global-Clients/capgemini.svg";
import wiki from "../public/Our-Global-Clients/wiki-labs.svg";
import bosch from "../public/Our-Global-Clients/bosch.svg";
import image from "../public/Our-Global-Clients/image-59.svg";

export default function Slider() {
  return (
    <>
      <div className="logos overflow-hidden py-16 bg-white relative">
        <div className="hidden lg:block">
          <div className="animation flex slide-track">
            <Image src={midf} alt="midf" className="slider-image mx-8 lg:mx-12 hover-stop-and-grow" />
            <Image src={tech} alt="tech" className="slider-image mx-8 lg:mx-12 hover-stop-and-grow" />
            <Image src={sodexo} alt="sodexo" className="slider-image mx-8 lg:mx-12 hover-stop-and-grow" />
            <Image src={neewee} alt="neewee" className="slider-image mx-8 lg:mx-12 hover-stop-and-grow" />
            <Image src={digi} alt="digi" className="slider-image mx-8 lg:mx-12 hover-stop-and-grow" />
            <Image src={cimb} alt="cimb" className="slider-image mx-8 lg:mx-12 hover-stop-and-grow" />
            <Image src={image} alt="image" className="slider-image mx-8 lg:mx-12 hover-stop-and-grow" />
            <Image src={hsbc} alt="hsbc" className="slider-image mx-8 lg:mx-12 hover-stop-and-grow" />
            <Image src={changing} alt="changing" className="slider-image mx-8 lg:mx-12 hover-stop-and-grow" />
            <Image src={effigst} alt="effigst" className="slider-image mx-8 lg:mx-12 hover-stop-and-grow" />
            <Image src={cmb} alt="cmb" className="slider-image mx-8 lg:mx-12 hover-stop-and-grow" />
            <Image src={sansys} alt="sansys" className="slider-image mx-8 lg:mx-12 hover-stop-and-grow" />
            <Image src={deamon} alt="deamon" className="slider-image mx-8 lg:mx-12 hover-stop-and-grow" />
            <Image src={blueendeavour} alt="blueendeavour" className="slider-image mx-8 lg:mx-12 hover-stop-and-grow" />
            <Image src={capgemini} alt="capgemini" className="slider-image mx-8 lg:mx-12 hover-stop-and-grow" />
            <Image src={wiki} alt="wiki" className="slider-image mx-8 lg:mx-12 hover-stop-and-grow" />
            <Image src={bosch} alt="bosch" className="slider-image mx-8 lg:mx-12 hover-stop-and-grow" />
          </div>
        </div>
        <div className="flex animate-slideRightToLeft slideRightToLeft lg:hidden">
            <Image
            src={midf}
            className="slider-image  mx-8 lg:mx-12"
            alt="midf"
          />

          <Image
            src={tech}
            className="slider-image  mx-8 lg:mx-12"
            alt="tech"
          />

          <Image
            src={sodexo}
            className="slider-image  mx-8 lg:mx-12"
            alt="sodexo"
          />

          <Image
            src={neewee}
            className="slider-image  mx-8 lg:mx-12"
            alt="neewee"
          />
          <Image
            src={digi}
            className="slider-image  mx-8 lg:mx-12"
            alt="digi"
          />
          <Image
            src={cimb}
            className="slider-image  mx-8 lg:mx-12"
            alt="cimb"
          />
          <Image
            src={image}
            className="slider-image  mx-8 lg:mx-12"
            alt="image"
          />
          <Image
            src={hsbc}
            className="slider-image   mx-8 lg:mx-12"
            alt="hsbc"
          />
        </div>

        <div className="flex py-[30px] slideLeftToRight animate-slideLeftToRight lg:hidden">
          <Image
            src={changing}
            className="slider-image  mx-8 lg:mx-12"
            alt="changing"
          />
          <Image
            src={effigst}
            className="slider-image  mr-8 lg:mx-12"
            alt="effigst"
          />
          <Image
            src={cmb}
            className="slider-image  mx-8 lg:mx-12"
            alt="cmb"
          />
          <Image
            src={sansys}
            className="slider-image  mx-8 lg:mx-12"
            alt="sansys"
          />
          <Image
            src={deamon}
            className="slider-image  mx-8 lg:mx-12"
            alt="deamon"
          />
          <Image
            src={blueendeavour}
            className="slider-image  mx-8 lg:mx-12"
            alt="blueendeavour"
          />
          <Image
            src={capgemini}
            className="slider-image  mx-8 lg:mx-12"
            alt="capgemini"
          />
          <Image
            src={wiki}
            className="slider-image  mx-8 lg:mx-12"
            alt="wiki"
          />
          <Image
            src={bosch}
            className="slider-image  mx-8 lg:mx-12"
            alt="bosch"
          />
        </div>
      </div>
    </>
  )
}

