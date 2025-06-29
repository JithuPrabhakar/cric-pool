import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import MyTeam from "./MyTeam"
import { useGetMatchDetailsQuery } from "../api/apiSlice"
import CreateTeamHeader from "../../components/team/CreateTeamHeader"
import SelectCaptains from "../../components/team/SelectCaptains"
import SelectTeam from "../../components/team/SelectTeam"

const CreateTeam = () => {
  const { id } = useParams()
  const [currentStep, setCurrentStep] = useState(1)
  const [selectedPlayers, setSelectedPlayers] = useState([])
  const [captain, setCaptain] = useState(null)
  const [viceCaptain, setViceCaptain] = useState(null)
  const navigate = useNavigate()

  const {
    data: match,
    isLoading: isL1,
    isError: isE1,
  } = useGetMatchDetailsQuery(Number(id))

  const nextStep = () => setCurrentStep((prev) => prev + 1)

  const saveTeam = async () => {
    if (!captain || !viceCaptain) return

    const newTeam = {
      match_id: id,
      user_id: 1, // Replace with actual user ID
      players: selectedPlayers.map((player) => ({
        player_id: player.player_id,
        name: player.name,
        position: player.position,
        isCaptain: player.player_id === captain.player_id,
        isViceCaptain:
          player.player_id === viceCaptain.player_id,
      })),
    }

    try {
      await addUserTeam({ user_id: 1, newTeam }).unwrap()
      console.log("Team saved successfully!")
      navigate(`/my-matches/upcoming/match/${id}`)
    } catch (error) {
      console.error("Error saving team:", error)
    }
  }

  return (
    <div>
      <CreateTeamHeader id={id} />
      {currentStep === 1 && match && (
        <SelectTeam
          id={id}
          team1_id={match[0].team1_id}
          team2_id={match[0].team2_id}
          selectedPlayers={selectedPlayers}
          setSelectedPlayers={setSelectedPlayers}
          nextStep={nextStep}
        />
      )}
      {currentStep === 2 && (
        <SelectCaptains
          selectedPlayers={selectedPlayers}
          captain={captain}
          setCaptain={setCaptain}
          viceCaptain={viceCaptain}
          setViceCaptain={setViceCaptain}
          saveTeam={saveTeam}
        />
      )}
      {currentStep === 3 && <MyTeam matchId={id} />}
    </div>
  )
}

export default CreateTeam
