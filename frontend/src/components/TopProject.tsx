import { ChevronRight, Presentation } from "lucide-react";
import { Link } from "react-router";

const TopProject = () => {
  return (
    <div className="my-10">
      <div className="flex items-center gap-2 ">
        <Presentation className="size-6" />
        <h1 className="text-2xl font-bold underline underline-offset-8">Projects</h1>
      </div>

      <div className="mt-5 space-y-7 tracking-widest">

        {/* TODO: make it reuseable!!!!! */}
        <a href="https://github.com/Xynno22/InventoryManagement" target="_blank" className="block tracking-widest rounded-md space-y-2 group cursor-pointer">
          <div className="space-y-1">
            <h1 className="text-xl group-hover:text-third transition-colors duration-150">StockSense</h1>
            <p className="opacity-80 text-sm">lalalal alalal lalaa</p>
          </div>
          <p>Inventory Management System build with Laravel, Tailwind, PHP, MySQL for My Final Project in the College</p>
        </a>

        <a href="https://github.com/changjli/pisonz" target="_blank" className="block tracking-widest rounded-md space-y-2 group cursor-pointer">
          <div className="space-y-1">
            <h1 className="text-xl group-hover:text-third transition-colors duration-150">Pisonz Store</h1>
            <p className="opacity-80 text-sm">lalalal alalal lalaa</p>
          </div>
          <p>Online Top Up Store for online games</p>
        </a>
        <Link to="/projects" className="text-third text-shadow-amber-950 text-sm items-center flex gap-1 group hover:underline underline-offset-8">
          See More
          <ChevronRight className="size-4 group-hover:translate-x-1 transition-all duration-150" /></Link>
      </div>
    </div>
  )
}

export default TopProject;
