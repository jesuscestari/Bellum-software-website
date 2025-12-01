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
        className="w-48 h-48 md:w-60 md:h-60 lg:w-72 lg:h-72 object-contain"
      />
      <div>
        <h3 className="text-2xl xl:text-3xl">{name}</h3>
        <h4 className="text-base">{socialId}</h4>
      </div>
    </div>
  );
};

export default Member;
