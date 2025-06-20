// import { useGetUserTeamByMatchIdQuery } from "../api/apiSlice"

// const MyTeam = ({ matchId }) => {
//   const {
//     data: userTeam,
//     isLoading,
//     isError,
//   } = useGetUserTeamByMatchIdQuery({
//     user_id: 1, // Replace with actual user ID
//     match_id: matchId,
//   })

//   if (isLoading) return <p>Loading...</p>
//   if (isError) return <p>Error loading team details.</p>
//   if (!userTeam) return <p>No team found for this match.</p>

//   return (
//     <div className="p-4">
//       <h3 className="mb-4 text-lg font-bold">My Squad</h3>
//       <ul>
//         {userTeam.players.map((player) => (
//           <li
//             key={player.player_id}
//             className={`p-3 flex items-center justify-between mb-2 border rounded-lg ${
//               player.isCaptain
//                 ? "bg-green-200"
//                 : player.isViceCaptain
//                 ? "bg-yellow-200"
//                 : ""
//             }`}
//           >
//             <div>
//               <div className="text-sm font-bold">
//                 {player.name}
//               </div>
//               <div className="text-xs text-gray-500">
//                 {player.position}
//               </div>
//             </div>
//             <div className="flex gap-4">
//               {player.isCaptain && "Captain"}
//               {player.isViceCaptain && "Vice Captain"}
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   )
// }

// export default MyTeam

import React from "react"

const MyTeam = () => {
  return <div>MyTeam</div>
}

export default MyTeam
