import { useState } from 'react'
import CreateTeamHeader from '../components/team/CreateTeamHeader'
import SelectTeam from '../components/team/SelectTeam'
import SelectCaptains from '../components/team/SelectCaptains'
import MyTeam from '../components/team/MyTeam'
import { players } from '../data/players'

const CreateTeamPage = () => {
  const [currentStep, setCurrentStep] = useState(1)
  const [selectedPlayers, setSelectedPlayers] = useState([])
  const [captain, setCaptain] = useState(null)
  const [viceCaptain, setViceCaptain] = useState(null)

  const nextStep = () => setCurrentStep((prev) => prev + 1)
  const saveTeam = () => setCurrentStep(3)

  return (
    <div>
      <CreateTeamHeader />
      {currentStep === 1 && (
        <SelectTeam
          players={players}
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
      {currentStep === 3 && (
        <MyTeam
          selectedPlayers={selectedPlayers}
          captain={captain}
          viceCaptain={viceCaptain}
        />
      )}
    </div>
  )
}

export default CreateTeamPage
