import { useEffect, useState } from "react";

const AboutSection = () => {
  const [artist, setArtist] = useState([])

  const getArtist = async () => {
    try {
      const resp = await fetch('/assets/data/artist.json')
      const data = await resp.json()
      setArtist(data.artist)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getArtist()
  }, [artist])

  type artistType = {
    name: string,
    earnings: string,
    verified: boolean,
    img: string
  }

  return (
    <div className="flex flex-col gap-10 items-start py-24 relative -z-40" id="explore">
      <div className=' absolute -z-50 -left-[13%] -top-[10%]' style={{
        width: 295,
        height: 295,
        background: 'radial-gradient(41.49% 41.49% at 50% 50%, rgba(102, 27, 122, 0.62) 0%, rgba(101, 26, 117, 0) 100%)',

      }}></div>
      <h1 className="text-[28px] gradient-text font-bold">TOP EARNER OF ALL TIME</h1>
      <div className="w-full grid lg:grid-cols-3 grid-cols-1 gap-5">
        {/* cols */}
        {artist.map((item: artistType, index) => {
          return (
            <div className="w-full bg-accent py-4 rounded-md flex items-center  gap-3 px-5" key={index}>
              <p className="text-[20px] font-bold text-white">{index + 1}.</p>
              <div className="flex items-center gap-3">
                <img src={`${item.img}`} alt="" />
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <p className="font-bold text-[16px]">{item.name}</p>
                    {item.verified && <img src="/assets/img/verified 2.png" alt="" />}
                  </div>
                  <p className="text-[14px] text-textAccent">{item.earnings}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default AboutSection;