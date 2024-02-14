import Image from "next/image";
import { CORE_CONCEPTS } from "@/app/data";

const ConceptCardTwo = ({image, title, description}) => {
  return (
    <div className="cursor-pointer hover:shadow-2xl rounded-2xl hover:scale-110 transition-all ease-in-out flex flex-col justify-center items-center gap-4">
      <Image
        className="bg-[#361d4c] rounded-full"
        width={200}
        height={100}
        src={image}
        alt="content image"
      />
      <h2 className="text-xl font-semibold text-white  opacity-90">
        {title}
      </h2>
      <p className="opacity-75 text-center text-lg font-light text-white">
        {description}
      </p>
    </div>
  );
};

export default ConceptCardTwo;
