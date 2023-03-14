import Image from "next/image";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

function CarouselJurusan() {
  return (
    <Splide
      options={{
        padding: "5rem",
        gap: "2rem",
        rewind: true,
        start: 3,
      }}
    >
      <SplideSlide>
        <Image
          src="/images/carousel/AKL.png"
          alt="AKL"
          width={222}
          height={317}
          className="pb-10"
        />
      </SplideSlide>
      <SplideSlide>
        <Image
          src="/images/carousel/BDP.png"
          alt="AKL"
          width={222}
          height={317}
          className="pb-10"
        />
      </SplideSlide>
      <SplideSlide>
        <Image
          src="/images/carousel/OTKP.png"
          alt="AKL"
          width={222}
          height={317}
          className="pb-10"
        />
      </SplideSlide>
      <SplideSlide>
        <Image
          src="/images/carousel/RPL.png"
          alt="AKL"
          width={222}
          height={317}
          className="pb-10"
        />
      </SplideSlide>
      <SplideSlide>
        <Image
          src="/images/carousel/TKJ.png"
          alt="AKL"
          width={222}
          height={317}
          className="pb-10"
        />
      </SplideSlide>
    </Splide>
  );
}

export default CarouselJurusan;
