import WorkTechStack from "./WorkTechStack";

const WorkCard = () => {
  return (
    <div className="bg-main border rounded-sm p-5">
      <h1 className="text-xl">Fullstack Developer Intern</h1>
      <h1 className="opacity-80">PT Prodia Widyahusada Tbk (Feb 2024 - Feb 2025)</h1>
      <div className="mt-3">
        <p>- Developed and maintained three internal systems using PHP (Laravel & CodeIgniter), collaborating with IT teams and
          optimizing MySQL databases for better performance. </p>
        <p>- Independently developed a referral application and a data parsing tool from scratch, handling frontend, backend, and database
          design, successfully deployed for internal use, improving workflow efficiency and reducing manual workload. </p>
        <p>- Assisted in debugging, testing, and implementing new features across systems, enhancing internal operations and user
          experience.</p>
        <WorkTechStack />
      </div>
    </div>
  )
}

export default WorkCard;
