import { ArrowUpRight, GithubIcon } from "lucide-react";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import * as Tooltip from '@radix-ui/react-tooltip';
import { useGSAPTyping } from "../hooks/useGSAPTyping";

const Project = () => {
  useDocumentTitle('Projects - Chris')

  const { elementRef, isComplete } = useGSAPTyping('Projects', {
    speed: 0.08,
    delay: 0.3,
    cursor: true,
    onComplete: () => console.log('Typing Complete')
  })

  return (
    <div className="px-5 mt-5 sm:px-0">
      <h1 className="text-4xl font-bold">
        <span ref={elementRef}></span>
        {!isComplete && (
          <span className="inline-block ml-1 text-third">|</span>
        )}
      </h1>

      <div className="block my-5 space-y-5 border border-secondary/20 p-5 rounded-md group hover:border-third transition-all duration-150">
        <div className="flex justify-between">
          <div>
            <h1 className="text-3xl font-extrabold group-hover:text-third transition-all duration-150">StockSense</h1>
            <p className="opacity-80">Inventory Management System (June 2025 - Oct 2025)</p>
          </div>
          <a href="https://stocksense.site/" target="_blank" >
            <ArrowUpRight className="hover:text-third" />
          </a>
        </div>

        <div>
          <h1 className="text-xl font-bold mb-2">Achievement</h1>
          <p>- Handle more then 50 data user realtime</p>
          <p>- Data Report for the user</p>
          <p>- Achievement</p>
          <p>- Achievement</p>
        </div>

        <div>
          <h1 className="text-xl font-bold mb-2">Technologies</h1>
          <div className="flex justify-between items-center ">
            <div className="flex gap-2 flex-wrap">
              <p className="tracking-wider border border-secondary/30 p-1 px-2 rounded-full text-sm">Laravel</p>
              <p className="tracking-wider border border-secondary/30 p-1 px-2 rounded-full text-sm">MySQL</p>
              <p className="tracking-wider border border-secondary/30 p-1 px-2 rounded-full text-sm">Tailwind</p>
              <p className="tracking-wider border border-secondary/30 p-1 px-2 rounded-full text-sm">PHP Breeze</p>
            </div>

            {/*TODO:: bekeng ini reusable*/}
            <Tooltip.Root>
              <Tooltip.Trigger asChild>
                <a
                  href="https://github.com/Xynno22/InventoryManagement"
                  className="p-2 border rounded-full hover:border-third transition-all duration-150"
                  target="_blank"
                >
                  <GithubIcon className="hover:text-third transition-all duration-150" />
                </a>
              </Tooltip.Trigger>
              <Tooltip.Portal>
                <Tooltip.Content
                  className="bg-gray-900 text-white text-sm px-3 py-1.5 rounded shadow-lg"
                  sideOffset={5}
                >
                  Go to Github
                  <Tooltip.Arrow className="fill-gray-900" />
                </Tooltip.Content>
              </Tooltip.Portal>
            </Tooltip.Root>


          </div>
        </div>
      </div>

      <div className="block my-5 space-y-5 border border-secondary/20 p-5 rounded-md group hover:border-third transition-all duration-150">
        <div className="flex justify-between">
          <div>
            <h1 className="text-3xl font-extrabold group-hover:text-third transition-all duration-150">Pisonz Store</h1>
            <p className="opacity-80">Top Up Online Games </p>
          </div>
          <a href="https://stocksense.site/" target="_blank" >
            <ArrowUpRight className="hover:text-third" />
          </a>
        </div>

        <div>
          <h1 className="text-xl font-bold mb-2">Achievement</h1>
          <p>- Handle more then 50 data user realtime</p>
          <p>- Data Report for the user</p>
          <p>- Achievement</p>
          <p>- Achievement</p>
        </div>

        <div>
          <h1 className="text-xl font-bold mb-2">Technologies</h1>
          <div className="flex justify-between items-center ">
            <div className="flex gap-2 flex-wrap">
              <p className="tracking-wider border border-secondary/30 p-1 px-2 rounded-full text-sm">Laravel</p>
              <p className="tracking-wider border border-secondary/30 p-1 px-2 rounded-full text-sm">MySQL</p>
              <p className="tracking-wider border border-secondary/30 p-1 px-2 rounded-full text-sm">Tailwind</p>
              <p className="tracking-wider border border-secondary/30 p-1 px-2 rounded-full text-sm">PHP Breeze</p>
            </div>

            {/*TODO:: bekeng ini reusable*/}
            <Tooltip.Root>
              <Tooltip.Trigger asChild>
                <a
                  href="https://github.com/Xynno22/InventoryManagement"
                  className="p-2 border rounded-full hover:border-third transition-all duration-150"
                  target="_blank"
                >
                  <GithubIcon className="hover:text-third transition-all duration-150" />
                </a>
              </Tooltip.Trigger>
              <Tooltip.Portal>
                <Tooltip.Content
                  className="bg-gray-900 text-white text-sm px-3 py-1.5 rounded shadow-lg"
                  sideOffset={5}
                >
                  Go to Github
                  <Tooltip.Arrow className="fill-gray-900" />
                </Tooltip.Content>
              </Tooltip.Portal>
            </Tooltip.Root>


          </div>
        </div>
      </div>

    </div>
  )
}

export default Project;
