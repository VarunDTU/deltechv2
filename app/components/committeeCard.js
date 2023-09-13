"use client";
import { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

// const committeeCard = ({
//   shortName,
//   name,
//   img,
//   excerpt,
//   description,
//   guide,
// }) => {
//   let [isOpen, setIsOpen] = useState(false);
//   function closeModal() {
//     setIsOpen(false);
//   }
//   function openModal() {
//     setIsOpen(true);
//   }

//   return (
//     <div>
//       <div
//         onClick={openModal}
//         className="w-[360px] flex justify-between flex-col bg-white rounded-b-2xl transform transition-all hover:-translate-y-1 duration-150 border border-[#C5C5C5] shadow-md
//         hover:shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] "
//       >
//         <div className="rounded overflow-hidden shadow-md bg-white">
//           <div className="absolute h-32 w-32 -mt-20 flex justify-center">
//             <img
//               src={img}
//               alt="img"
//               className="rounded-full object-cover h-full w-full shadow-md"
//             />
//           </div>
//           <div className="px-6 mt-16">
//             <div className="font-bold text-2xl text-center pb-1">
//               {shortName}
//             </div>
//             <p className="text-gray-800 text-sm text-center">{name}</p>
//             <p className="text-center pt-4 text-xs font-medium">{excerpt}</p>
//             <div className="w-full flex justify-center pt-5 pb-5"></div>
//           </div>
//         </div>
//       </div>

//       {/* Model */}
//       <Transition appear show={isOpen} as={Fragment}>
//         <Dialog
//           as="div"
//           className="fixed inset-0 z-10 overflow-y-auto"
//           onClose={closeModal}
//         >
//           <div className="min-h-screen px-4 text-center">
//             <Transition.Child
//               as={Fragment}
//               enter="ease-out duration-300"
//               enterFrom="opacity-0"
//               enterTo="opacity-100"
//               leave="ease-in duration-200"
//               leaveFrom="opacity-100"
//               leaveTo="opacity-0"
//             >
//               <Dialog.Overlay className="fixed inset-0 bg-black/25" />
//             </Transition.Child>

//             {/* This element is to trick the browser into centering the modal contents. */}
//             <span
//               className="inline-block h-screen align-middle"
//               aria-hidden="true"
//             >
//               &#8203;
//             </span>
//             <Transition.Child
//               as={Fragment}
//               enter="ease-out duration-300"
//               enterFrom="opacity-0 scale-95"
//               enterTo="opacity-100 scale-100"
//               leave="ease-in duration-200"
//               leaveFrom="opacity-100 scale-100"
//               leaveTo="opacity-0 scale-95"
//             >
//               <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
//                 <Dialog.Title
//                   as="h3"
//                   className="text-lg flex justify-between font-medium leading-6 text-gray-900"
//                 >
//                   {name}
//                   <button
//                     type="button"
//                     className="inline-flex justify-center px-4 py-2 text-sm text-red-900 bg-red-100 border border-transparent rounded-md hover:bg-red-200 duration-300"
//                     onClick={closeModal}
//                   >
//                     close
//                   </button>
//                 </Dialog.Title>
//                 <div className="mt-2">
//                   <p className="text-sm text-gray-500 border-t pt-2">
//                     {description}
//                   </p>
//                 </div>

//                 <a href={guide} className="mt-4">
//                   <button
//                     type="button"
//                     className="inline-flex justify-center px-4 py-2 text-sm text-red-900 bg-red-100 border border-transparent rounded-md hover:bg-red-200 duration-300"
//                   >
//                     guide
//                   </button>
//                 </a>
//               </div>
//             </Transition.Child>
//           </div>
//         </Dialog>
//       </Transition>
//     </div>
//   );
// };

// export default committeeCard;

// const committeeCard = ({
//   shortName,
//   name,
//   img,
//   excerpt,
//   description,
//   guide,
// }) => {
//   let [isOpen, setIsOpen] = useState(false);
//   function closeModal() {
//     setIsOpen(false);
//   }
//   function openModal() {
//     setIsOpen(true);
//   }

//   return (
//     <div>
//       <div className="w-[360px] flex justify-between flex-col bg-white rounded-b-2xl transform transition-all hover:-translate-y-1 duration-150 border border-[#C5C5C5] shadow-md hover:shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]">
//         <div className="flex flex-col justify-center items-center">
//           <img className="object-cover" src={img} alt="thumbnail" />
//           <div className="px-5">
//             <h5 className="my-3 font-serif text-3xl text-center font-bold tracking-tight text-gray-900">
//               {shortName}
//             </h5>
//             <p className="mb-1 font-sans font-normal text-center text-gray-800">
//               {name}
//             </p>
//             <p className="mb-1 font-sans text-center font-normal text-gray-700">
//               {excerpt}
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Model */}
//       <Transition appear show={isOpen} as={Fragment}>
//         <Dialog
//           as="div"
//           className="fixed inset-0 z-10 overflow-y-auto"
//           onClose={closeModal}
//         >
//           <div className="min-h-screen px-4 text-center">
//             <Transition.Child
//               as={Fragment}
//               enter="ease-out duration-300"
//               enterFrom="opacity-0"
//               enterTo="opacity-100"
//               leave="ease-in duration-200"
//               leaveFrom="opacity-100"
//               leaveTo="opacity-0"
//             >
//               <Dialog.Overlay className="fixed inset-0 bg-black/25" />
//             </Transition.Child>

//             {/* This element is to trick the browser into centering the modal contents. */}
//             <span
//               className="inline-block h-screen align-middle"
//               aria-hidden="true"
//             >
//               &#8203;
//             </span>
//             <Transition.Child
//               as={Fragment}
//               enter="ease-out duration-300"
//               enterFrom="opacity-0 scale-95"
//               enterTo="opacity-100 scale-100"
//               leave="ease-in duration-200"
//               leaveFrom="opacity-100 scale-100"
//               leaveTo="opacity-0 scale-95"
//             >
//               <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
//                 <Dialog.Title
//                   as="h3"
//                   className="text-lg flex justify-between font-medium leading-6 text-gray-900"
//                 >
//                   {name}
//                   <button
//                     type="button"
//                     className="inline-flex justify-center px-4 py-2 text-sm text-red-900 bg-red-100 border border-transparent rounded-md hover:bg-red-200 duration-300"
//                     onClick={closeModal}
//                   >
//                     close
//                   </button>
//                 </Dialog.Title>
//                 <div className="mt-2">
//                   <p className="text-sm text-gray-500 border-t pt-2">
//                     {description}
//                   </p>
//                 </div>

//                 <a href={guide} className="mt-4">
//                   <button
//                     type="button"
//                     className="inline-flex justify-center px-4 py-2 text-sm text-red-900 bg-red-100 border border-transparent rounded-md hover:bg-red-200 duration-300"
//                   >
//                     guide
//                   </button>
//                 </a>
//               </div>
//             </Transition.Child>
//           </div>
//         </Dialog>
//       </Transition>
//     </div>
//   );
// };

// export default committeeCard;

/*{
  /* <div
className="w-[360px] flex justify-between flex-col bg-white rounded-b-2xl transform transition-all hover:-translate-y-1 duration-150 border border-[#C5C5C5] shadow-md
hover:shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]"
>
<div>
  <img className="w-full h-48 object-cover" src={img} alt="thumbnail" />
  <div className="px-5">
    <h5 className="my-3 font-serif text-3xl font-bold tracking-tight text-gray-900">
      {title}
    </h5>
    <p className="mb-1 font-sans font-normal text-gray-700">{excerpt}</p>
  </div>
</div>
<div>
  <hr className="my-3 h-0.5 border-t-0 bg-neutral-200 " />
  <div className="px-5 pb-4 flex items-center justify-between rounded-b-2xl">
    <a
      className="py-3 px-4 w-fit duration-500 text-[#1341EC] border-2 border-[#1341EC] rounded-xl
      hover:bg-gradient-to-t from-[#1341EC] to-[#142e8a] hover:text-[#fff]"
      href={`/blog/${slug}`}
    >
      Read more
      <FaArrowRight className="ml-1 inline" />
    </a>
    <div className="text-sm flex items-center">
      <img
        className="w-10 h-10 rounded-full ml-3"
        src={authorPhoto}
        alt="Avatar"
      />
      <div className="ml-3">
        <p className="text-gray-900 leading-none">{authorName}</p>
        <p className="text-gray-600">{createdAt}</p>
      </div>
    </div>
  </div>
</div>
</div>
}*/

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
      <div>
        <style>
          {`
        .card{
          position: relative;
          display: flex;
          justify-content: center;
          align-items: flex-start;
          width: 350px;
          height: 300px;
          background: #fff;
          border-radius: 20px;
          box-shadow:0 35px 80px rgba(0,0,0,0.15);
          transition:0.5s;
        }

        .card:hover{
          height: 400px;
        }

        .card .imgBox{
          position: absolute;
          top:20px;
          width: 222px;
          height: 225px;
          border-radius: 12px;
          overflow: hidden;
          transition: 0.5s;
        }

        .card:hover .imgBox{
          top: -100px;
          transform: scale(0.90);
        }
        
        .card .imgBox img{
          position: absolute;
          top:0;
          left:0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .card .content{
          position: absolute;
          top: 252px;
          width: 100%;
          padding: 0 30px;
          height: 35px;
          text-align: center;
          overflow: hidden;
          transition: 0.5s;
        }

        .card:hover .content{
          top: 130px;
          height: 250px;
        }

        .card .content h2{
          font-size: 1.5em;
          font-weight: 700;
          font-family: "Times New Roman", Times, serif;
        }

        .card .content h5{
          font-weight: 500;
          font-size: 1.2em;
        }
        
        .card .content p{
          color: #333;
          font-size: 1.05em;
        }

        .card .content a {
          position: relative;
          top: 15px;
          display: inline-block;
          padding: 12px 25px;
          background: #fff;
          color: #1341EC;
          font-weight: 500;
          text-decoration: none;
          border-radius: 8px;
          border:2px solid #1341EC;
          transition: 0.2s;
        }
        
        .card .content a:hover{
          color: #fff;
          background: #1341EC;
        }
        
        `}
        </style>
        <div className="card">
          <div className="imgBox">
            <img src={img}></img>
          </div>
          <div className="content">
            <h2>{shortName}</h2>
            <h5>{name}</h5>
            <p>{excerpt}</p>
            <a onClick={openModal}>Read More</a>
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
              <div className="inline-block w-full max-w-3xl pt-4 px-6 pb-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="div" // Change 'as' to 'div'
                  className="flex justify-between items-center text-2xl py-2 font-bold leading-6 text-gray-900"
                >
                  <div className="flex items-center">
                    United Nations Commission on the Status of Women
                  </div>
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm text-red-900 bg-red-100 border border-transparent rounded-md hover:bg-red-200 duration-300"
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
                <div className="mt-2">
                  <p className="text-base text-center font-normal text-zinc-800 border-t pt-5 pb-8">
                    Deliberation on the GST Act, With special emphasis on
                    Jurisdictional issues.
                  </p>
                  <div class="grid grid-cols-2 gap-12 md:grid-cols-2 lg:grid-cols-2 px-12">
                    <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-xl">
                      <div class="h-96 w-72">
                        <img
                          class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                          src="https://deltechmun.in/images/Committees/DhruvJain_UNGA_Chairperson.jpeg"
                          alt=""
                        />
                      </div>
                      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                      <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-4 text-center transition-all duration-500 group-hover:translate-y-0">
                        <h1 class="font-dmserif text-3xl pb-10 font-bold text-neutral-400	">
                          Chairperson
                        </h1>
                        <p class="mb-20 text-xl font-semibold italic text-neutral-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                          Aniket Basu
                        </p>
                      </div>
                    </div>
                    <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-xl">
                      <div class="h-96 w-72">
                        <img
                          class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                          src="https://deltechmun.in/images/Committees/Pulkit%20Taneja_UNGA_Vice_Chair.jpeg"
                          alt=""
                        />
                      </div>
                      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                      <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-4 text-center transition-all duration-500 group-hover:translate-y-0">
                        <h1 class="font-dmserif pb-10 text-3xl font-bold text-neutral-400">
                          Vice Chairperson
                        </h1>
                        <p class="mb-20 text-xl font-semibold italic text-neutral-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                          Aditya Sharma
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <a href={guide} className="mt-6 flex justify-center">
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-md font-medium text-slate-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 duration-300"
                  >
                    Guide
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

{
  /* <Transition appear show={isOpen} as={Fragment}>
  <Dialog
    as="div"
    className="fixed inset-0 z-10 overflow-y-auto"
    onClose={closeModal}
  >
    <div className="min-h-screen flex items-center justify-center">
      <Transition.Child
        as={Fragment}
        enter="ease-out duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <Dialog.Overlay className="fixed inset-0 bg-black opacity-50" />
      </Transition.Child>

      <Transition.Child
        as={Fragment}
        enter="ease-out duration-300"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <div className="bg-white w-full max-w-md p-6 my-8 mx-auto rounded-lg shadow-lg">
          <Dialog.Title
            as="h3"
            className="text-lg font-medium text-gray-900"
          >
            {name}
          </Dialog.Title>
          <div className="mt-4">
            <p className="text-sm text-gray-500">{description}</p>
          </div>

          <div className="mt-6 flex justify-end">
            <button
              type="button"
              className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-300"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      </Transition.Child>
    </div>
  </Dialog>
</Transition> */
}
