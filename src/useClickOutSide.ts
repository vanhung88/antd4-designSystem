// import { useEffect, useState } from "react";

// export const useClickOutSide=(ref)=>{

//     const [isClickedOutside, setIsClickedOutside] = useState(false);
    
//     useEffect(() => {
//         const handleClickOutside = (event: MouseEvent) => {
//         // Check if the clicked element is outside the ref element
//         if (ref.current) {
//             setIsClickedOutside(true);
//         } else {
//             setIsClickedOutside(false);
//         }
//         };
    
//         document.addEventListener('mousedown', handleClickOutside);
//         return () => {
//         document.removeEventListener('mousedown', handleClickOutside);
//         };
//     }, []);
    
//     return { isClickedOutside };
// }