import { initializeApp, getApps } from "firebase/app"
import { getDatabase } from "firebase/database"

const firebaseConfig = {
  apiKey: "AIzaSyAjD7QCBe5jitmdwe2oZtYvaBJutYfl7ug",
  authDomain: "cricketwar-website.firebaseapp.com",
  databaseURL: "https://cricketwar-website.firebaseio.com",
  projectId: "cricketwar-website",
  storageBucket: "cricketwar-website.appspot.com",
  messagingSenderId: "943795950350",
  appId: "1:943795950350:web:7c7086fa61430052273d5f",
  measurementId: "G-TXDHRZ4EMZ",
}

// Avoid re-initializing during HMR (hot reload)
const app = getApps().length
  ? getApps()[0]
  : initializeApp(firebaseConfig)

export const db = getDatabase(app)
