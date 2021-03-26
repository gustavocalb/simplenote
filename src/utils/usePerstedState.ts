import { useState, useEffect, Dispatch, SetStateAction } from "react";

type Response<T> = [
  T,
  Dispatch<SetStateAction<T>>
]

function usePerstedState<T>(key: string, initialState: T): Response<T> {
  const [ state, setState ] = useState(initialState)

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state))
  }, [key, state])

  return [state, setState];
}

export default usePerstedState;