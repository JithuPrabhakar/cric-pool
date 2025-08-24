import { useEffect, useRef, useState } from "react"
import { db } from "./firebase"
import { ref, onValue } from "firebase/database"

export function useRealtimeMatch(matchId) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(Boolean(matchId))
  const [error, setError] = useState(null)
  const lastBallRef = useRef(null)

  useEffect(() => {
    if (!matchId) return

    setLoading(true)
    const gameRef = ref(
      db,
      `FantasyMatches/${matchId}/ScreeDetails`
    )

    const unsubscribe = onValue(
      gameRef,
      (snap) => {
        const obj = snap.val()
        if (!obj) {
          setData(null)
          setLoading(false)
          return
        }

        // Equivalent of: if (obj.last_ball_det != last_record_time) LoadLiveMatch();
        if (obj.last_ball_det !== lastBallRef.current) {
          lastBallRef.current = obj.last_ball_det
          // Put side effects here (e.g., animations, sounds, etc.)
        }

        setData(obj ? { ...obj } : null)
        setLoading(false)
      },
      (e) => {
        setError(e)
        setLoading(false)
      }
    )

    return () => unsubscribe() // cleanup on unmount
  }, [matchId])

  return { data, loading, error }
}
