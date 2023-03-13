import Image from "next/image";

function Carousel() {

  return (
      <div className="relative">
          <div id="content" className="carousel p-4 flex items-center justify-start overflow-x-auto scroll-smooth gap-8 scrollbar-hide">
              <Image src="/images/carousel/RPL.png" alt="RPL" width={222} height={317} />
              <Image src="/images/carousel/TKJ.png" alt="TKJ" width={222} height={317} />
              <Image src="/images/carousel/OTKP.png" alt="OTKP" width={222} height={317} />
              <Image src="/images/carousel/AKL.png" alt="AKL" width={222} height={317} />
          </div>
      </div>
  );
}

export default Carousel;
