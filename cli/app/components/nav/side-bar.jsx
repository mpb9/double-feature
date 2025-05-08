// import {
//   ArrowFatLineLeft,
//   Eyes,
//   ListPlus,
//   Television,
//   Textbox,
// } from "@phosphor-icons/react";
// import AddSiteForm from "components/forms/AddSiteForm.jsx";
// import EditSiteForm from "components/forms/EditSiteForm.jsx";
// import { useEffect, useState } from "react";
// import { getSitesBySubscribedAndCat } from "services/site-service.js";

// // MARK: SideBar
// export default function SideBar() {
//   const [isOpen, setIsOpen] = useState(true);
//   const [sites, setSites] = useState(null);
//   const [showAddSiteForm, setShowAddSiteForm] = useState(false);
//   const [showEditSiteForm, setShowEditSiteForm] = useState(false);

//   // info: http request to get sites
//   useEffect(() => {
//     getSitesBySubscribedAndCat(1, "streaming")
//       .then((res) => {
//         setSites(res);
//       })
//       .catch((err) => console.error(err));
//   }, [showAddSiteForm, showEditSiteForm]);

//   // info: toggle sidebar and site forms
//   function toggleSidebar() {
//     setIsOpen(!isOpen);
//   }
//   function toggleAddSiteForm() {
//     setShowAddSiteForm(!showAddSiteForm);
//   }
//   function toggleEditSiteForm() {
//     setShowEditSiteForm(!showEditSiteForm);
//   }

//   // MARK: loading
//   if (sites == null) {
//     return <></>;
//   }

//   // MARK: sidebar closed
//   if (!isOpen && sites != null) {
//     return (
//       <div className="fixed top-6 left-6">
//         <div
//           className="flex items-center justify-around p-1 text-[var(--white)] opacity-70 transition-transform duration-300 cursor-pointer rounded-xl hover:scale-110"
//           onClick={toggleSidebar}
//         >
//           <Television weight="duotone" size={48} color="currentColor" />
//           <Eyes
//             weight="duotone"
//             size={34}
//             color="currentColor"
//             className="mt-1"
//           />
//         </div>
//       </div>
//     );
//   }

//   // MARK: sidebar open
//   return (
//     <>
//       <div className="w-24 h-[100vh] pt-4 pb-6 flex flex-col items-center pl-[2px] pr-[2px] justify-between bg-[linear-gradient(to_right,#a0b1b812_1px,transparent_1px),linear-gradient(to_bottom,#a0b1b812_1px,transparent_1px)] bg-[size:6px_9px]">
//         <div
//           className="peer h-fit cursor-pointer rounded-xl flex items-center hover:scale-125 transition-all duration-300 text-[var(--white)] opacity-75"
//           onClick={toggleSidebar}
//         >
//           <ArrowFatLineLeft weight="fill" size={42} color="currentColor" />
//         </div>

//         <div className="flex flex-col items-center w-3/4 pt-4 pb-[60vh] overflow-scroll transition-all duration-300 peer-hover:opacity-25">
//           {sites.map((site) => (
//             <a
//               className="py-1.5 transition-all duration-300 grayscale-[95%] hover:grayscale-0 hover:scale-[1.15]"
//               href={site.url}
//               target="_blank"
//               key={site.name}
//             >
//               <img className="rounded-xl" src={site.iconSrc} alt={site.name} />
//             </a>
//           ))}
//         </div>

//         <div className="pt-4 transition-all duration-300 peer-hover:opacity-25 text-[var(--white)] opacity-75">
//           <div
//             className="flex items-center justify-around transition-all duration-300 cursor-pointer peer w-14 rounded-xl hover:scale-125"
//             onClick={toggleEditSiteForm}
//           >
//             <Textbox weight="regular" size={42} color="currentColor" />
//           </div>
//           <div
//             className="flex items-center justify-around mt-4 transition-all duration-300 cursor-pointer peer w-14 rounded-xl hover:scale-125"
//             onClick={toggleAddSiteForm}
//           >
//             <ListPlus weight="regular" size={42} color="currentColor" />
//           </div>
//         </div>
//       </div>
//       {showAddSiteForm && (
//         <AddSiteForm
//           initialCat="streaming"
//           toggleAddSiteForm={toggleAddSiteForm}
//         />
//       )}
//       {showEditSiteForm && (
//         <EditSiteForm sites={sites} toggleEditSiteForm={toggleEditSiteForm} />
//       )}
//     </>
//   );
// }
