import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import MyTeam from "./MyTeam"
import {
  useGetMatchDetailsQuery,
  useCreateFantasyTeamMutation,
  useGetMyFantasySquadQuery,
} from "../api/apiSlice"
import CreateTeamHeader from "../../components/team/CreateTeamHeader"
import SelectCaptains from "../../components/team/SelectCaptains"
import SelectTeam from "../../components/team/SelectTeam"

const CreateTeam = () => {
  const { id } = useParams()
  const [currentStep, setCurrentStep] = useState(1)
  const [selectedPlayers, setSelectedPlayers] = useState([])
  const [captain, setCaptain] = useState(null)
  const [viceCaptain, setViceCaptain] = useState(null)
  const [appUserId, setAppUserId] = useState("")
  const navigate = useNavigate()

  useEffect(() => {
    const storedUser = localStorage.getItem("user")
    if (storedUser) {
      const { user_id } = JSON.parse(storedUser)
      setAppUserId(user_id)
    }
  }, [])

  const skipQuery = !appUserId || !id

  // Match Details
  const {
    data: match,
    isLoading: isL1,
    isError: isE1,
  } = useGetMatchDetailsQuery(Number(id))

  // Check if user already has a team
  const { data: existingTeam, isLoading: isL2 } =
    useGetMyFantasySquadQuery(
      { id, userid: appUserId },
      { skip: skipQuery }
    )

  // Initialize team if user has already created one
  useEffect(() => {
    if (existingTeam && existingTeam.lstPlayers) {
      const players = existingTeam.lstPlayers
      setSelectedPlayers(players)

      const cap = players.find(
        (p) => p.captain_status === "1"
      )
      const vcap = players.find(
        (p) => p.vice_captain_status === "1"
      )

      setCaptain(cap || null)
      setViceCaptain(vcap || null)
    }
  }, [existingTeam])

  const [createFantasyTeam] = useCreateFantasyTeamMutation()

  const nextStep = () => setCurrentStep((prev) => prev + 1)

  const saveTeam = async () => {
    if (!captain || !viceCaptain) return

    const newTeam = {
      match_id: id,
      user_id: appUserId,
      players: selectedPlayers.map((player) => ({
        player_id: player.player_id,
        isCaptain: player.player_id === captain.player_id,
        isViceCaptain:
          player.player_id === viceCaptain.player_id,
      })),
    }

    try {
      await createFantasyTeam(newTeam).unwrap()
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
          team1_id={match[0]?.team1_id}
          team2_id={match[0]?.team2_id}
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
