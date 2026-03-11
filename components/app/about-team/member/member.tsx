import Image from "next/image";

type MemberProps = {
  name: string;
  image: string;
  socialId: string;
};

const Member = async ({ name, image, socialId }: MemberProps) => {
  return (
    <div>
      <Image
        src={image}
        width={350}
        height={420}
        alt={name}
        className="w-28 h-36 sm:w-32 sm:h-40 md:w-36 md:h-44 lg:w-44 lg:h-56 xl:w-52 xl:h-64 object-contain"
      />
      <div>
        <h3 className="text-2xl xl:text-3xl">{name}</h3>
        <h4 className="text-base">{socialId}</h4>
      </div>
    </div>
  );
};

export default Member;
