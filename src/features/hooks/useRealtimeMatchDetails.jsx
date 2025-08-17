import { useState, useEffect } from "react"
import { doc, onSnapshot } from "firebase/firestore"
import { db } from "../firebase" // adjust path to your firebase config

// Custom Hook
export function useRealtimeMatchDetails(id) {
  const [match, setMatch] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    if (!id) return

    setIsLoading(true)
    setIsError(false)

    const unsub = onSnapshot(
      doc(db, "matches", String(id)),
      (snapshot) => {
        if (snapshot.exists()) {
          setMatch(snapshot.data())
          setIsLoading(false)
        } else {
          setMatch(null)
          setIsError(true)
          setIsLoading(false)
        }
      },
      (error) => {
        console.error("Error fetching match:", error)
        setIsError(true)
        setIsLoading(false)
      }
    )

    return () => unsub()
  }, [id])

  return { match, isLoading, isError }
}
