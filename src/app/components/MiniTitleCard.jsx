import Image from "next/image";

const MiniCard = ({image, name}) => {
  return (
    <div
      className="
    bg-white/10 backdrop-blur-sm absolute bottom-0 left-0 self-end items-start justify-self-start 
    h-fit m-4 w-50 flex p-3 gap-2 shadow-xl rounded-xl"
    >
      <Image
        src={image}
        alt="Creepy doog"
        width={500}
        height={500}
        className="rounded-xl aspect-square w-12.5 h-12.5 object-cover"
      />
      <p className="items-start text-white font-medium">{name}</p>
    </div>
  );
};

export default MiniCard;
