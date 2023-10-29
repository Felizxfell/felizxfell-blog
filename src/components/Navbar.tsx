"use client";

import Link from "next/link";
import { Menu, Dialog, Transition } from "@headlessui/react";
import { usePathname, useRouter } from "next/navigation";
import { useState, Fragment } from "react";
import Image from "next/image";
import { PropsLang, PropsPath } from "@/types/types.p";

import IconFoodpanda from "../icons/IconFoodpanda";
import IconMenuHamburger from "../icons/IconMenuHamburger";
import IconSearch from "../icons/IconSearch";
import IconLanguage from "@/icons/IconLanguage";
import IconFlagMexico from "@/icons/icon-flag-mexico.svg";
import IconFlagUs from "@/icons/icon-flag-us.svg";
import { MenuModal } from "./MenuModal";
import { links } from "@/constans";
import { useStore } from "@/store";
import { Helper } from "@/lib/utils";

export default function Navbar({ lang }: PropsLang) {
  const pathname = usePathname();

  const [toggle, setToggle] = useState(false);

  const handledToggle = () => {
    setToggle(!toggle)
  }

  const visible = useStore((state) => state.visible);

  if (!visible) return <></>

  return (
    <>
      {toggle && <MenuModal handledToggle={handledToggle} links={links[lang]} lang={lang} />}

      <nav className={`w-full ${toggle && 'opacity-0'}  `}>
        <div className="flex justify-between p-5 m-2 mt-7
          lg:mx-32 xl:mx-36 2xl:mx-96 rounded-full
          bg-slate-700 shadow-lg shadow-slate-500/50 text-white"
        >
          <div className="flex w-1/3 max-md:w-1/2">
            <Link href="/" className="hover:text-emerald-400">
              <IconFoodpanda />
            </Link>
          </div>
          <div className="flex justify-center w-1/3 max-md:w-1/2 max-md:justify-end">

            <button onClick={handledToggle} className="z-10 mt-[-5px] hidden max-md:flex">
              <IconMenuHamburger className="w-8 h-8" />
            </button>

            <ul className="flex gap-4 place-content-center max-md:hidden">
              {links[lang].map((link) => {
                link.href = link.href === "/" ? "" : link.href;

                const isActive = pathname.localeCompare(`/${lang}${link.href}`);

                return (
                  <li
                    key={link.name}
                    className={
                      isActive
                        ? `hover:text-emerald-400 hover:underline`
                        : `text-emerald-400 underline`
                    }
                  >
                    <Link href={`/${lang}${link.href}`} className="flex gap-1">
                      {link.icon()} {link.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="flex justify-end w-1/3 max-md:hidden">
            <ModalSearch />
            <Dropdown pathname={pathname} />
          </div>
        </div>
      </nav>
    </>
  );
}

function Dropdown({ pathname }: PropsPath) {
  const router = useRouter();

  return (
    <div className="absolute mt-[-7px] text-right">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center rounded-full bg-black bg-opacity-20 p-2 text-sm font-medium text-white hover:text-emerald-400 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            <IconLanguage />
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
          <Menu.Items className="absolute right-0 mt-2 w-36 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${active
                      ? "hover:bg-slate-300 text-white hover:text-emerald-600"
                      : "text-slate-800"
                      } group flex w-32 items-center rounded-md px-1 py-1 text-sm`}
                    onClick={() => {
                      router.push(`/es${Helper.getPathWithoutLang(pathname)}`);
                    }}
                  >
                    <span className="mr-3">Español</span>
                    <Image src={IconFlagMexico} width={25} alt="flag-mexico" />
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${active
                      ? "hover:bg-slate-300 text-white hover:text-emerald-600"
                      : "text-slate-800"
                      } group flex w-32 items-center rounded-md px-1 py-1 text-sm`}
                    onClick={() => {
                      router.push(`/en${Helper.getPathWithoutLang(pathname)}`);
                    }}
                  >
                    <span className="mr-4">English</span>
                    <Image src={IconFlagUs} width={25} alt="flag-us" />
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

function ModalSearch() {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <div className="absolute mt-[-7px] mr-[55px]">
        <button
          type="button"
          onClick={openModal}
          className="rounded-full bg-black bg-opacity-20 p-2 text-sm font-medium text-white hover:text-emerald-400 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          <IconSearch />
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Menu
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Your payment has been successfully submitted. We’ve sent
                      you an email with all of the details of your order.
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Got it, thanks!
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
