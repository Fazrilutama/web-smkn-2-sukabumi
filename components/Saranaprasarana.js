import Image from "next/image";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

function Saranaprasarana() {
  return (
    <>
    <div className="hidden md:flex flex-wrap mt-10 justify-around">
    <Image
          src="/images/sarana/perpus.png"
          alt="AKL"
          width={222}
          height={317}
          className="pb-10"
        />
    <Image
          src="/images/sarana/parkir.png"
          alt="AKL"
          width={222}
          height={317}
          className="pb-10"
        />
    <Image
          src="/images/sarana/masjid.png"
          alt="AKL"
          width={222}
          height={317}
          className="pb-10"
        />
    <Image
          src="/images/sarana/lobi.png"
          alt="AKL"
          width={222}
          height={317}
          className="pb-10"
        />
    <Image
          src="/images/sarana/kantin.png"
          alt="AKL"
          width={222}
          height={317}
          className="pb-10"
        />
    </div>
    <div className="md:hidden">
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
          src="/images/sarana/perpus.png"
          alt="AKL"
          width={222}
          height={317}
          className="pb-10"
        />
      </SplideSlide>
      <SplideSlide>
        <Image
          src="/images/sarana/parkir.png"
          alt="AKL"
          width={222}
          height={317}
          className="pb-10"
        />
      </SplideSlide>
      <SplideSlide>
        <Image
          src="/images/sarana/masjid.png"
          alt="AKL"
          width={222}
          height={317}
          className="pb-10"
        />
      </SplideSlide>
      <SplideSlide>
        <Image
          src="/images/sarana/lobi.png"
          alt="AKL"
          width={222}
          height={317}
          className="pb-10"
        />
      </SplideSlide>
      <SplideSlide>
        <Image
          src="/images/sarana/kantin.png"
          alt="AKL"
          width={222}
          height={317}
          className="pb-10"
        />
      </SplideSlide>
    </Splide>
    </div>
    </>
  );
}

export default Saranaprasarana;
