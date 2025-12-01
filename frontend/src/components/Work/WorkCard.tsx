import { useEffect, useState } from "react";
import type { Work } from "@/types";
import worksData from '@/datas/works.json'

const WorkCard = () => {
  const [works, setWorks] = useState<Work[]>([]);

  useEffect(() => {
    setWorks(worksData as Work[])
  }, []);

  if (!works || works.length === 0) {
    return null;
  }

  return (
    <>
      {works.map((work) => (
        <div className="border border-secondary/20 rounded-sm p-6">
          <div className="flex gap-2 items-center">
            <h1 className="text-xl">{work.role}</h1>
          </div>

          <h1 className="opacity-80">{work.place}</h1>
          <div className="mt-3">
            {work.description.map((w) => (
              <div className="my-2 text-justify">{w}</div>
            ))}
            <div className="flex gap-2 mt-5 justify-end flex-wrap">
              {work.techs.map((tech) => (
                <div className="border rounded-full px-2 text-sm">{tech}</div>
              ))}
            </div>
          </div>
        </div>
      ))}

    </>
  );
};

export default WorkCard;
