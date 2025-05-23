// import { Card, CardContent } from "@/components/ui/card";
// import { Separator } from "@/components/ui/separator";
// import Navbar from "../components/Navbar";
// import { motion } from "framer-motion";

// import {
//   CheckCircle,
//   Heart,
//   Bell,
//   Hospital,
//   UserPlus,
//   UserCheck,
//   Megaphone,
// } from "lucide-react";

// const cardVariants = {
//   offscreen: { y: 30, opacity: 0 },
//   onscreen: {
//     y: 0,
//     opacity: 1,
//     transition: { type: "spring", bounce: 0.3, duration: 0.7 },
//   },
// };

//  const objectivesData = [
//     {
//       text: "Provide a platform to find instant blood donors at the nearest location.",
//       icon: MapPin // Icon for finding donors
//     },
//     {
//       text: "To spread awareness and motivate people to donate blood.",
//       icon: Heart // Icon for awareness and motivation
//     },
//     {
//       text: "Create a user-friendly website that is easy to use and navigate.",
//       icon: Laptop // Icon for user-friendly website
//     },
//     {
//       text: "Ensure quick and easy donor sign-up with a user-friendly registration process.",
//       icon: UserPlus // Icon for donor sign-up
//     },
//     {
//       text: "Implement real-time updates on blood availability and nearest centers.",
//       icon: Clock // Icon for real-time updates
//     },
//     {
//       text: "Send push notifications to remind donors of opportunities and regular contributions.",
//       icon: Bell // Icon for push notifications
//     },
//   ];

// export default function About() {
//   return (
//     <>
//       <Navbar />
//       <div className="p-4 md:p-10 space-y-10 max-w-7xl mx-auto">
//   <div className="bg-gradient-to-br from-red-100 via-white to-red-50 dark:from-red-900 dark:via-red-800 dark:to-red-900 rounded-3xl shadow-xl p-10 md:p-16 border border-red-300">
//     <div className="text-center space-y-6">
//       <h1 className="text-5xl font-extrabold tracking-tight text-red-700 leading-tight">
//         ❤️ About Instant Blood Donor Finder
//       </h1>
//       <div className="bg-white/80 dark:bg-black/20 p-6 md:p-8 rounded-xl shadow-inner max-w-4xl mx-auto text-left">
//         <p className="text-lg md:text-xl text-gray-800 dark:text-gray-200 font-medium leading-relaxed tracking-wide">
//           <span className="text-red-600 font-semibold">Instant Blood Donor Finder</span> is a platform dedicated to saving lives by 
//           instantly connecting <span className="text-red-600 font-semibold">verified blood donors</span> with 
//           <span className="text-red-600 font-semibold">individuals and hospitals in urgent need</span>. Whether you are a first-time donor or 
//           a medical facility in search of reliable supply, our smart alert system and seamless user experience 
//           ensure help is never too far away.
//         </p>
//       </div>
//     </div>
//   </div>


//       <div className="grid gap-8 md:grid-cols-3">
//   {[
//     {
//       icon: <Heart className="mx-auto text-red-600" size={48} />,
//       text: "We provide a platform for people to request blood in emergencies.",
//     },
//     {
//       icon: <Bell className="mx-auto text-red-600" size={48} />,
//       text: "Notifications are sent to nearby safe donors in real-time.",
//     },
//     {
//       icon: <Hospital className="mx-auto text-red-600" size={48} />,
//       text: "Hospitals can register and collect blood from willing donors.",
//     },
//     {
//       icon: <UserPlus className="mx-auto text-red-600" size={48} />,
//       text: "Interested donors can register and will be contacted when needed.",
//     },
//     {
//       icon: <UserCheck className="mx-auto text-red-600" size={48} />,
//       text: "Needy individuals can register and request blood within their area.",
//     },
//     {
//       icon: <Megaphone className="mx-auto text-red-600" size={48} />,
//       text: "We promote awareness and encourage blood donation in society.",
//     },
//   ].map(({ icon, text }, i) => (
//     <motion.div
//       key={i}
//       initial="offscreen"
//       whileInView="onscreen"
//       viewport={{ once: true, amount: 0.8 }}
//       variants={cardVariants}
//     >
//       <Card className="bg-white/30 dark:bg-white/10 backdrop-blur-md border border-red-300/40 hover:border-red-500 transition-all duration-300 rounded-2xl shadow-md hover:shadow-xl">
//         <CardContent className="p-6 text-center space-y-4">
//           {icon}
//           <p className="text-gray-900 dark:text-gray-100 font-medium leading-relaxed">{text}</p>
//         </CardContent>
//       </Card>
//     </motion.div>
//   ))}
// </div>

//         <Separator className="my-8" />

//        <div className="w-full bg-gradient-to-r from-red-50 via-white to-red-50 dark:from-red-900/20 dark:via-black/30 dark:to-red-900/20 py-12 px-6 md:px-20">
//   <div className="max-w-screen-xl mx-auto bg-white/30 dark:bg-white/10 backdrop-blur-md border border-red-300/30 shadow-md rounded-2xl p-10 space-y-8">
//     <h2 className="text-3xl font-bold text-center text-red-600">
//       Target Audience
//     </h2>

//     <ul className="space-y-4 text-gray-800 dark:text-gray-100 text-base pl-4">
//       <li className="flex items-start gap-3">
//         <CheckCircle className="text-red-500 mt-1" size={20} />
//         <span>People willing to donate blood and save lives</span>
//       </li>
//       <li className="flex items-start gap-3">
//         <CheckCircle className="text-red-500 mt-1" size={20} />
//         <span>Anyone meeting blood donation criteria regardless of age, gender, or origin</span>
//       </li>
//       <li className="flex items-start gap-3">
//         <CheckCircle className="text-red-500 mt-1" size={20} />
//         <span>Regular donors looking for a convenient platform</span>
//       </li>
//       <li className="flex items-start gap-3">
//         <CheckCircle className="text-red-500 mt-1" size={20} />
//         <span>First-time donors needing awareness and appropriate site guidance</span>
//       </li>
//       <li className="flex items-start gap-3">
//         <CheckCircle className="text-red-500 mt-1" size={20} />
//         <span>Patients urgently seeking a nearby hospital or blood donor</span>
//       </li>
//     </ul>
//   </div>
// </div>

       
//         <Separator className="my-8" />

//   <div className="pt-10 pb-5 w-full bg-gradient-to-r from-red-50 via-white to-red-50 dark:from-red-900/20 dark:via-black/20 dark:to-red-900/20 px-6 md:px-20">
//       <div className="max-w-screen-xl mx-auto space-y-10">
//         <h2 className="text-2xl md:text-3xl font-bold text-center text-red-600">
//           🏥 Hospitals & Blood Banks
//         </h2>

//         {/* Adjusted font size for the main description */}
//         <p className="text-xs md:text-sm max-w-4xl mx-auto leading-relaxed text-gray-800 dark:text-gray-200 indent-4 text-left">
//           Our platform empowers <span className="font-semibold text-red-600">hospitals</span> and
//           <span className="font-semibold text-red-600"> blood banks</span> to maintain a steady and reliable blood supply
//           for life-saving transfusions. With integrated smart-matching algorithms and instant donor alerts,
//           we ensure <span className="text-red-600 font-medium">faster access</span> to volunteers,
//           <span className="text-red-600 font-medium"> efficient tracking</span> of blood units, and
//           <span className="text-red-600 font-medium"> seamless coordination</span> between medical teams and donors.
//         </p>

//         {/* Removed specific horizontal padding from the grid container, relying on parent's padding */}
//         <div className="mt-10 grid gap-6 md:grid-cols-3 text-center">
//           {[
//             {
//               title: "🚑 Faster Emergency Support",
//               desc: "Immediate connection with nearby donors during critical needs."
//             },
//             {
//               title: "📦 Reliable Blood Inventory",
//               desc: "Track blood availability and manage stocks with ease."
//             },
//             {
//               title: "🔗 Seamless Coordination",
//               desc: "Connect hospitals, banks, and donors on a unified platform."
//             }
//           ].map(({ title, desc }, i) => (
//             <Card
//               key={i}
//               // Removed max-w-sm to allow grid to manage width more flexibly, especially on smaller screens
//               className="bg-white/30 dark:bg-white/10 backdrop-blur-md border border-red-300/30 rounded-2xl shadow-md hover:shadow-red-400/40 transition duration-300 mx-auto w-full md:max-w-sm"
//             >
//               <CardContent className="p-4 space-y-2">
//                 {/* Adjusted font size for card titles */}
//                 <p className="text-red-600 font-bold text-sm md:text-base">{title}</p>
//                 {/* Adjusted font size for card descriptions */}
//                 <p className="text-xs text-gray-700 dark:text-gray-300">{desc}</p>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </div>




//         <Separator className="my-8" />

//         <div className="pt-10 pb-5 w-full bg-gradient-to-r from-red-50 via-white to-red-50 dark:from-red-900/20 dark:via-black/20 dark:to-red-900/20 px-6 md:px-20">
//       <div className="max-w-screen-xl mx-auto space-y-10">
//         <h2 className="text-2xl md:text-3xl font-bold text-center text-red-600">
//           🏥 Hospitals & Blood Banks
//         </h2>

//         {/* Adjusted font size for the main description */}
//         <p className="text-xs md:text-sm max-w-4xl mx-auto leading-relaxed text-gray-800 dark:text-gray-200 indent-4 text-left">
//           Our platform empowers <span className="font-semibold text-red-600">hospitals</span> and
//           <span className="font-semibold text-red-600"> blood banks</span> to maintain a steady and reliable blood supply
//           for life-saving transfusions. With integrated smart-matching algorithms and instant donor alerts,
//           we ensure <span className="text-red-600 font-medium">faster access</span> to volunteers,
//           <span className="text-red-600 font-medium"> efficient tracking</span> of blood units, and
//           <span className="text-red-600 font-medium"> seamless coordination</span> between medical teams and donors.
//         </p>

//         {/* Removed specific horizontal padding from the grid container, relying on parent's padding */}
//         <div className="mt-10 grid gap-6 md:grid-cols-3 text-center">
//           {[
//             {
//               title: "🚑 Faster Emergency Support",
//               desc: "Immediate connection with nearby donors during critical needs."
//             },
//             {
//               title: "📦 Reliable Blood Inventory",
//               desc: "Track blood availability and manage stocks with ease."
//             },
//             {
//               title: "🔗 Seamless Coordination",
//               desc: "Connect hospitals, banks, and donors on a unified platform."
//             }
//           ].map(({ title, desc }, i) => (
//             <Card
//               key={i}
//               // Removed max-w-sm to allow grid to manage width more flexibly, especially on smaller screens
//               className="bg-white/30 dark:bg-white/10 backdrop-blur-md border border-red-300/30 rounded-2xl shadow-md hover:shadow-red-400/40 transition duration-300 mx-auto w-full md:max-w-sm"
//             >
//               <CardContent className="p-4 space-y-2">
//                 {/* Adjusted font size for card titles */}
//                 <p className="text-red-600 font-bold text-sm md:text-base">{title}</p>
//                 {/* Adjusted font size for card descriptions */}
//                 <p className="text-xs text-gray-700 dark:text-gray-300">{desc}</p>
//               </CardContent>
//             </Card>
//           ))}
//         </div>

//      <Separator className="my-8" />
//         {/* New Objectives Section */}

//       <div className="pt-10 pb-5 w-full bg-gradient-to-r from-red-50 via-white to-red-50 dark:from-red-900/20 dark:via-black/20 dark:to-red-900/20 px-6 md:px-20">
//       <div className="max-w-screen-xl mx-auto space-y-10">
//         <h2 className="text-2xl md:text-3xl font-bold text-center text-red-600">
//           🏥 Hospitals & Blood Banks
//         </h2>

//         {/* Adjusted font size for the main description */}
//         <p className="text-xs md:text-sm max-w-4xl mx-auto leading-relaxed text-gray-800 dark:text-gray-200 indent-4 text-left">
//           Our platform empowers <span className="font-semibold text-red-600">hospitals</span> and
//           <span className="font-semibold text-red-600"> blood banks</span> to maintain a steady and reliable blood supply
//           for life-saving transfusions. With integrated smart-matching algorithms and instant donor alerts,
//           we ensure <span className="text-red-600 font-medium">faster access</span> to volunteers,
//           <span className="text-red-600 font-medium"> efficient tracking</span> of blood units, and
//           <span className="text-red-600 font-medium"> seamless coordination</span> between medical teams and donors.
//         </p>

//         {/* Removed specific horizontal padding from the grid container, relying on parent's padding */}
//         <div className="mt-10 grid gap-6 md:grid-cols-3 text-center">
//           {[
//             {
//               title: "🚑 Faster Emergency Support",
//               desc: "Immediate connection with nearby donors during critical needs."
//             },
//             {
//               title: "📦 Reliable Blood Inventory",
//               desc: "Track blood availability and manage stocks with ease."
//             },
//             {
//               title: "🔗 Seamless Coordination",
//               desc: "Connect hospitals, banks, and donors on a unified platform."
//             }
//           ].map(({ title, desc }, i) => (
//             <Card
//               key={i}
//               // Removed max-w-sm to allow grid to manage width more flexibly, especially on smaller screens
//               className="bg-white/30 dark:bg-white/10 backdrop-blur-md border border-red-300/30 rounded-2xl shadow-md hover:shadow-red-400/40 transition duration-300 mx-auto w-full md:max-w-sm"
//             >
//               <CardContent className="p-4 space-y-2">
//                 {/* Adjusted font size for card titles */}
//                 <p className="text-red-600 font-bold text-sm md:text-base">{title}</p>
//                 {/* Adjusted font size for card descriptions */}
//                 <p className="text-xs text-gray-700 dark:text-gray-300">{desc}</p>
//               </CardContent>
//             </Card>
//           ))}
//         </div>

//       <Separator className="my-8" />
//         {/* New Objectives Section */}
//         <div className="pt-10"> {/* Added padding top for spacing */}
//           <h2 className="text-3xl font-bold mb-6 text-center text-red-600">Objectives</h2>
//           <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
//             {objectivesData.map((objective, i) => (
//               <motion.div
//                 key={i}
//                 initial="offscreen"
//                 whileInView="onscreen"
//                 viewport={{ once: true, amount: 0.8 }}
//                 variants={cardVariants}
//               >
//                 <Card className="hover:shadow-lg border-red-300 border-2 rounded-lg">
//                   <CardContent className="p-6 text-center text-gray-800 dark:text-gray-200 font-medium flex flex-col items-center">
//                     {/* Render the icon */}
//                     {objective.icon && React.createElement(objective.icon, { className: "w-8 h-8 text-red-600 mb-3" })}
//                     {objective.text}
//                   </CardContent>
//                 </Card>
//               </motion.div>
//             ))}
//           </div>
//         </div>
    
//       </div>
//       </div>
      
//     </>
//   );
// }


import React from 'react';
import { motion } from 'framer-motion';

// Assuming these components are available from a UI library like shadcn/ui
// In a real application, ensure these paths are correct and components are installed.
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
// import Navbar from "../components/Navbar"; // Assuming Navbar component exists at this path
// The Navbar component import was removed as it's an external dependency
// and caused a module resolution error in this self-contained environment.
import Navbar from '../components/Navbar';
// Importing all necessary icons from lucide-react
import {
  MapPin, Heart, Laptop, UserPlus, Clock, Bell, // Icons for objectivesData
  CheckCircle, Hospital, UserCheck, Megaphone // Additional icons for featuresData and target audience
} from 'lucide-react';
import Footer from '../components/Footer';

// Define cardVariants for framer-motion animation
const cardVariants = {
  offscreen: { y: 30, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", bounce: 0.3, duration: 0.7 },
  },
};

// Data for the Objectives section (as selected by the user)
const objectivesData = [
  {
    text: "Provide a platform to find instant blood donors at the nearest location.",
    icon: MapPin // Icon for finding donors
  },
  {
    text: "To spread awareness and motivate people to donate blood.",
    icon: Heart // Icon for awareness and motivation
  },
  {
    text: "Create a user-friendly website that is easy to use and navigate.",
    icon: Laptop // Icon for user-friendly website
  },
  {
    text: "Ensure quick and easy donor sign-up with a user-friendly registration process.",
    icon: UserPlus // Icon for donor sign-up
  },
  {
    text: "Implement real-time updates on blood availability and nearest centers.",
    icon: Clock // Icon for real-time updates
  },
  {
    text: "Send push notifications to remind donors of opportunities and regular contributions.",
    icon: Bell // Icon for push notifications
  },
];

// Data for the new 6-card features section
const featuresData = [
  {
    icon: <Heart className="mx-auto text-red-600" size={48} />,
    text: "We provide a platform for people to request blood in emergencies.",
  },
  {
    icon: <Bell className="mx-auto text-red-600" size={48} />,
    text: "Notifications are sent to nearby safe donors in real-time.",
  },
  {
    icon: <Hospital className="mx-auto text-red-600" size={48} />,
    text: "Hospitals can register and collect blood from willing donors.",
  },
  {
    icon: <UserPlus className="mx-auto text-red-600" size={48} />,
    text: "Interested donors can register and will be contacted when needed.",
  },
  {
    icon: <UserCheck className="mx-auto text-red-600" size={48} />,
    text: "Needy individuals can register and request blood within their area.",
  },
  {
    icon: <Megaphone className="mx-auto text-red-600" size={48} />,
    text: "We promote awareness and encourage blood donation in society.",
  },
];

// Data for the Hospitals & Blood Banks section (original content)
const hospitalsBloodBanksData = [
  {
    title: "🚑 Faster Emergency Support",
    desc: "Immediate connection with nearby donors during critical needs."
  },
  {
    title: "📦 Reliable Blood Inventory",
    desc: "Track blood availability and manage stocks with ease."
  },
  {
    title: "🔗 Seamless Coordination",
    desc: "Connect hospitals, banks, and donors on a unified platform."
  }
];

const AboutPage= () => { // Renamed from About to App to be the default export
  return (
    <>
      <Navbar /> {/* Navbar component was removed to resolve import error */}
      <div className="p-4 md:p-10 space-y-10 max-w-7xl mx-auto">

        {/* About Instant Blood Donor Finder Section */}
        <div className="bg-gradient-to-br from-red-100 via-white to-red-50 dark:from-red-900 dark:via-red-800 dark:to-red-900 rounded-3xl shadow-xl p-10 md:p-16 border border-red-300">
          <div className="text-center space-y-6">
            <h1 className="text-5xl font-extrabold tracking-tight text-red-700 leading-tight">
              ❤️ About Instant Blood Donor Finder
            </h1>
            <div className="bg-white/80 dark:bg-black/20 p-6 md:p-8 rounded-xl shadow-inner max-w-4xl mx-auto text-left">
              <p className="text-lg md:text-xl text-gray-800 dark:text-gray-200 font-medium leading-relaxed tracking-wide">
                <span className="text-red-600 font-semibold">Instant Blood Donor Finder</span> is a platform dedicated to saving lives by
                instantly connecting <span className="text-red-600 font-semibold">verified blood donors</span> with
                <span className="text-red-600 font-semibold">individuals and hospitals in urgent need</span>. Whether you are a first-time donor or
                a medical facility in search of reliable supply, our smart alert system and seamless user experience
                ensure help is never too far away.
              </p>
            </div>
          </div>
        </div>

        {/* New 6-card Features Section */}
        <div className="grid gap-8 md:grid-cols-3">
          {featuresData.map(({ icon, text }, i) => (
            <motion.div
              key={i}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.8 }}
              variants={cardVariants}
            >
              <Card className="bg-white/30 dark:bg-white/10 backdrop-blur-md border border-red-300/40 hover:border-red-500 transition-all duration-300 rounded-2xl shadow-md hover:shadow-xl">
                <CardContent className="p-6 text-center space-y-4">
                  {icon}
                  <p className="text-gray-900 dark:text-gray-100 font-medium leading-relaxed">{text}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <Separator className="my-8" />

        {/* Target Audience Section */}
        <div className="w-full bg-gradient-to-r from-red-50 via-white to-red-50 dark:from-red-900/20 dark:via-black/30 dark:to-red-900/20 py-12 px-6 md:px-20 rounded-3xl shadow-xl border border-red-300"> {/* Added styling to match other sections */}
          <div className="max-w-screen-xl mx-auto bg-white/30 dark:bg-white/10 backdrop-blur-md border border-red-300/30 shadow-md rounded-2xl p-10 space-y-8">
            <h2 className="text-3xl font-bold text-center text-red-600">
              Target Audience
            </h2>

            <ul className="space-y-4 text-gray-800 dark:text-gray-100 text-base pl-4">
              <li className="flex items-start gap-3">
                <CheckCircle className="text-red-500 mt-1" size={20} />
                <span>People willing to donate blood and save lives</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="text-red-500 mt-1" size={20} />
                <span>Anyone meeting blood donation criteria regardless of age, gender, or origin</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="text-red-500 mt-1" size={20} />
                <span>Regular donors looking for a convenient platform</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="text-red-500 mt-1" size={20} />
                <span>First-time donors needing awareness and appropriate site guidance</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="text-red-500 mt-1" size={20} />
                <span>Patients urgently seeking a nearby hospital or blood donor</span>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Original Hospitals & Blood Banks Section */}
        <div className="pt-10 pb-5 w-full bg-gradient-to-r from-red-50 via-white to-red-50 dark:from-red-900/20 dark:via-black/20 dark:to-red-900/20 px-6 md:px-20 rounded-3xl shadow-xl border border-red-300"> {/* Added styling to match other sections */}
          <div className="max-w-screen-xl mx-auto space-y-10">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-red-600">
              🏥 Hospitals & Blood Banks
            </h2>

            {/* Adjusted font size for the main description */}
            <p className="text-xs md:text-sm max-w-4xl mx-auto leading-relaxed text-gray-800 dark:text-gray-200 indent-4 text-left">
              Our platform empowers <span className="font-semibold text-red-600">hospitals</span> and
              <span className="font-semibold text-red-600"> blood banks</span> to maintain a steady and reliable blood supply
              for life-saving transfusions. With integrated smart-matching algorithms and instant donor alerts,
              we ensure <span className="text-red-600 font-medium">faster access</span> to volunteers,
              <span className="text-red-600 font-medium"> efficient tracking</span> of blood units, and
              <span className="text-red-600 font-medium"> seamless coordination</span> between medical teams and donors.
            </p>

            {/* Removed specific horizontal padding from the grid container, relying on parent's padding */}
            <div className="mt-10 grid gap-6 md:grid-cols-3 text-center">
              {hospitalsBloodBanksData.map(({ title, desc }, i) => (
                <Card
                  key={i}
                  // Removed max-w-sm to allow grid to manage width more flexibly, especially on smaller screens
                  className="bg-white/30 dark:bg-white/10 backdrop-blur-md border border-red-300/30 rounded-2xl shadow-md hover:shadow-red-400/40 transition duration-300 mx-auto w-full md:max-w-sm"
                >
                  <CardContent className="p-4 space-y-2">
                    {/* Adjusted font size for card titles */}
                    <p className="text-red-600 font-bold text-sm md:text-base">{title}</p>
                    {/* Adjusted font size for card descriptions */}
                    <p className="text-xs text-gray-700 dark:text-gray-300">{desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Objectives Section */}
        <div className="pt-10 pb-5 w-full bg-gradient-to-r from-red-50 via-white to-red-50 dark:from-red-900/20 dark:via-black/20 dark:to-red-900/20 px-6 md:px-20 rounded-3xl shadow-xl border border-red-300"> {/* Added styling to match other sections */}
          <h2 className="text-3xl font-bold mb-6 text-center text-red-600">Objectives</h2>
          <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
            {objectivesData.map((objective, i) => (
              <motion.div
                key={i}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.8 }}
                variants={cardVariants}
              >
                <Card className="hover:shadow-lg border-red-300 border-2 rounded-lg">
                  <CardContent className="p-6 text-center text-gray-800 dark:text-gray-200 font-medium flex flex-col items-center">
                    {/* Render the icon */}
                    {objective.icon && React.createElement(objective.icon, { className: "w-8 h-8 text-red-600 mb-3" })}
                    {objective.text}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      <div>
        <Footer/>
      </div>
      </div>
    </>
  );
};

export default AboutPage;

