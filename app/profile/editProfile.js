"use client";
import { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { BsPencil } from "react-icons/bs";
import service from "../lib/hygraphServices";

const EditProfile = ({ author }) => {
  let [isOpen, setIsOpen] = useState(false);
  function closeModal() {
    setIsOpen(false);
  }
  function openModal() {
    setIsOpen(true);
  }

  const submitData = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formValue = {
      dp: formData.get("dp"),
      name: formData.get("name"),
      bio: formData.get("bio"),
    };
    console.log(formValue);
    closeModal();
    const resp = await service.updateProfile(author.email, formValue);
    console.log(resp);
  };
  return (
    <>
      {/* <button
        onClick={openModal}
        className="flex item-center rounded-md py-1.5 px-3.5 mt-3 text-[15px] font-semibold border hover:bg-blue-500"
      >
        <BsPencil className="mt-0.5 mr-1" size="18" />
        <span>Edit profile</span>
      </button> */}
      <button
        className=" border-none outline-none text-white bg-gradient-to-r from-[#269af7] to-[#8e59ff] text-[14px] shadow-btn none transition-all ease-in duration-200 py-3 px-4 mr-4 hover:shadow-hover rounded-[50px]"
        onClick={openModal}
      >
        <div className="flex gap-1 items-center">
          <BsPencil className="mt-0.5 mr-1" size="18" /> Edit Profile
        </div>
      </button>
      {/* Model */}
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-50 overflow-y-auto"
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
              <div className="inline-block w-full max-w-3xl pt-4 px-6 pb-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="div" // Change 'as' to 'div'
                  className="flex justify-between items-center text-2xl py-2 font-bold leading-6 text-gray-900"
                >
                  <div className="flex items-center font-merriweather">
                    Edit Profile
                  </div>
                  <button
                    type="button"
                    className="inline-flex justify-center py-3 px-4 w-fit duration-500 text-[#1341EC] border-2 border-[#1341EC] rounded-xl
                hover:bg-gradient-to-t from-[#1341EC] to-[#142e8a] hover:text-[#fff]"
                    onClick={closeModal}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2" // Change 'stroke-width' to 'strokeWidth'
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-x"
                    >
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </button>
                </Dialog.Title>
                <div className="text-base mt-2 text-center font-normal font-serif text-zinc-800 border-t pt-5 pb-8">
                  <form
                    className="space-y-4 md:space-y-6"
                    onSubmit={submitData}
                  >
                    <div>
                      <label
                        htmlFor="dp"
                        className="block mb-2 text-sm font-medium"
                      >
                        Display Picture
                      </label>
                      <input
                        type="file"
                        name="dp"
                        id="dp"
                        accept="image/jpg, image/png, image/jpeg, image/webp"
                        className="border sm:text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
                        autoComplete="off"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="name"
                        className="block mb-2 text-sm font-medium"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        // value={author.name}
                        placeholder="New name"
                        className="border sm:text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
                        // required
                        autoComplete="off"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="bio"
                        className="block mb-2 text-sm font-medium"
                      >
                        Description
                      </label>
                      <input
                        type="text"
                        name="bio"
                        id="bio"
                        // value={author.bio}
                        // required
                        placeholder="New description"
                        className="border sm:text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
                        autoComplete="off"
                      />
                    </div>
                    <div className="mt-6 flex justify-center">
                      <button
                        type="submit"
                        className="font-merriweather tracking-wider text-md w-fit px-[60px] py-[15px] rounded-xl text-[#FFF] text-[18px] font-semibold mb-2 transition-all duration-500 bg-gradient-to-tl from-[#1341EC] via-[#5CA0F2] to-[#142e8a] bg-size-200 bg-pos-100 hover:bg-pos-0"
                      >
                        Update
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default EditProfile;
// <BsPencil className="mt-0.5 mr-1" size="18" />
