/* eslint-disable @next/next/no-img-element */
export const GuruPengajarCard = ({ title, list_guru }) => {
  return (
    <div className="space-y-7">
      <div className="text-[#677487] text-center font-semibold text-2xl lg:text-4xl">
        <h1>{title}</h1>
      </div>
      <div className={`${list_guru.length <= 3 ? "grid grid-cols-2 lg:flex flex-wrap justify-center gap-4" : "grid gap-4 lg:gap-y-10 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4"}`}>
        {list_guru.map((guru) => {
          return (
            <div key={guru.id} className={`relative overflow-hidden flex justify-center ${list_guru.length <= 3 ? "w-full lg:basis-1/4" : "w-full"}`}>
              <img
                src={guru.image}
                alt={guru.nama}
                className="w-full border-b-8 border-orange-600 rounded-lg max-w-[280px]"
              />
              <div className="absolute text-center bottom-5">
                <p className="text-xs font-semibold tracking-normal text-white sm:text-lg lg:text-lg lg:tracking-tight">
                  {guru.nama}
                </p>
                <p className="text-xs font-light tracking-tight text-white sm:text-base">
                  {guru.mapel}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  )
}
