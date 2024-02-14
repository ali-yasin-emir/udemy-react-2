import { CORE_CONCEPTS } from "@/app/data";
import ConceptCard from "./ConceptCard";
import ConceptCardTwo from "./ConceptCardTwo";

const Concepts = () => {
  return (
    <>
      <div className="bg-[#421d4e] bg-opacity-55 flex flex-col max-md:px-16 max-md:w-[375px]  max-lg:w-[650px] max-xl:w-[1040px] max-lg:h-fit w-[1240px] h-[620px] rounded-xl mx-9 py-12 px-9 gap-2 shadow-xl justify-center">
        <h1 className="text-center text-3xl font-semibold text-pink-100 opacity-85">
          Core Concepts
        </h1>
        <div className="max-lg:m-auto max-lg:w-full max-lg:items-center max-lg:flex-col flex flex-1 gap-8">
          <ConceptCard />
        </div>
      </div>
      {/* <div className="bg-[#59295f] bg-opacity-55 flex flex-col w-[1240px] h-[620px] m-auto rounded-xl py-12 px-9 gap-2 shadow-xl justify-center">
        <h1 className="text-center text-3xl font-semibold text-pink-100 opacity-85">
          Core Concepts
        </h1>
        <div className="flex flex-1 gap-8">
          <ConceptCardTwo
            image={CORE_CONCEPTS[0].image}
            title={CORE_CONCEPTS[0].title}
            description={CORE_CONCEPTS[0].description}
          />
          <ConceptCardTwo
            {...CORE_CONCEPTS[1]}
          />
          <ConceptCardTwo
            {...CORE_CONCEPTS[2]}
          />
          <ConceptCardTwo
            {...CORE_CONCEPTS[3]}
          />
        </div>
      </div> */}

    </>
  );
};

export default Concepts;
