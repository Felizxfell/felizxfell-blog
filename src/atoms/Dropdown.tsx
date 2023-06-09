import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import IconChevronDown from "../icons/IconChevronDown";

interface OptionsDropdown {
  text: string
}

interface PropsDropdown {
  text: string | "options",
  options: OptionsDropdown[]
}

export default function Dropdown({ text = "options", options }: PropsDropdown) {
  return (
    <div className="fixed top-16 w-56 text-right">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            {text}
            <IconChevronDown
              className="ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            {options?.map((option) => (
              <div className="px-1 py-1 " key={option.text}>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${active
                          ? "hover:bg-slate-700 hover:text-emerald-400"
                          : "text-slate-800"
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      {option.text}
                    </button>
                  )}
                </Menu.Item>
              </div>
            ))}
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${active
                        ? "hover:bg-slate-700 hover:text-emerald-400"
                        : "text-slate-800"
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    Archive
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
