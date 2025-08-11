import Marquee from "react-fast-marquee";

const SkillCard = ({ frontend, direction }) => {
  return (
    <div>
      <Marquee direction={direction}>
        <div className="flex items-center gap-5 w-full">
          {frontend.map((item) => {
            return (
              <div
                key={item.name}
                className="p-2 bg-white w-20 h-20 rounded-lg text-center ml-2"
              >
                <div>
                  <img
                    className="rounded-lg object-cover mx-auto w-10 h-10"
                    src={item.image}
                    alt={item.name}
                  />
                </div>
                <h2 className="font-bold text-xs mt-2">{item.name}</h2>
              </div>
            );
          })}
        </div>
      </Marquee>
    </div>
  );
};

export default SkillCard;
