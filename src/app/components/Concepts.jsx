import { CORE_CONCEPTS } from "@/app/data";
import ConceptCard from "./ConceptCard";
import ConceptCardTwo from "./ConceptCardTwo";

const Concepts = () => {
  return (
    <>
      <div className="bg-[#59295f] bg-opacity-55 flex flex-col w-[1240px] h-[620px] m-auto rounded-xl py-12 px-9 gap-2 shadow-xl justify-center">
        <h1 className="text-center text-3xl font-semibold text-pink-100 opacity-85">
          Core Concepts
        </h1>
        <div className="flex flex-1 gap-8">
          <ConceptCard />
        </div>
      </div>
      <div className="bg-[#59295f] bg-opacity-55 flex flex-col w-[1240px] h-[620px] m-auto rounded-xl py-12 px-9 gap-2 shadow-xl justify-center">
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
      </div>
    </>
  );
};

export default Concepts;
