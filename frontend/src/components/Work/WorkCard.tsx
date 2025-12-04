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
        <div className="sm:border-2 sm:border-third/20 dark:sm:border-third/30 rounded-sm p-1 sm:p-6">
          <div className="flex gap-2 items-center">
            <h1 className="text-base sm:text-xl font-semibold">{work.role}</h1>
          </div>

          <h1 className="opacity-80 text-xs sm:text-base">{work.place} ({work.date})</h1>
          <div className="mt-3">
            {work.description.map((w) => (
              <ul className="px-4">
                <li className="my-2 list-disc text-sm sm:text-base">{w}</li>
              </ul>
            ))}
            <div className="flex gap-2 mt-5 justify-end flex-wrap">
              {work.techs.map((tech) => (
                <div className="border border-[#252525]/40 dark:border-third/30 rounded-full px-2 text-xs sm:text-sm">{tech}</div>
              ))}
            </div>
          </div>
        </div>
      ))}

    </>
  );
};

export default WorkCard;
