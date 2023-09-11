"use client";
import { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

const committeeCard = ({
  shortName,
  name,
  img,
  excerpt,
  description,
  guide,
}) => {
  let [isOpen, setIsOpen] = useState(false);
  function closeModal() {
    setIsOpen(false);
  }
  function openModal() {
    setIsOpen(true);
  }

  return (
    <div>
      <div
        onClick={openModal}
        className="relative mt-16 mb-32 sm:mb-24 cursor-pointer "
      >
        <div className="rounded overflow-hidden shadow-md bg-white">
          <div className="absolute h-32 w-32 -mt-20 flex justify-center">
            <img
              src={img}
              alt="img"
              className="rounded-full object-cover h-full w-full shadow-md"
            />
          </div>
          <div className="px-6 mt-16">
            <div className="font-bold text-2xl text-center pb-1">
              {shortName}
            </div>
            <p className="text-gray-800 text-sm text-center">{name}</p>
            <p className="text-center pt-4 text-xs font-medium">{excerpt}</p>
            <div className="w-full flex justify-center pt-5 pb-5"></div>
          </div>
        </div>
      </div>

      {/* Model */}
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black/25" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg flex justify-between font-medium leading-6 text-gray-900"
                >
                  {name}
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm text-red-900 bg-red-100 border border-transparent rounded-md hover:bg-red-200 duration-300"
                    onClick={closeModal}
                  >
                    close
                  </button>
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-sm text-gray-500 border-t pt-2">
                    {description}
                  </p>
                </div>

                <a href={guide} className="mt-4">
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm text-red-900 bg-red-100 border border-transparent rounded-md hover:bg-red-200 duration-300"
                  >
                    guide
                  </button>
                </a>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default committeeCard;
