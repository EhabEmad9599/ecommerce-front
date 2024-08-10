import React from "react";
import { TLoading } from "../../../types/shared"

interface ILoading  {
  status: TLoading;
  error: string | null;
  children: React.ReactNode;
}

export const Loading = ({status, error, children}: ILoading) => {
  if(status === 'pending') {
    return <p>Loading please wait</p>
  }
  if(status  === 'failed') {
    return <p>{error}</p>
  }
  
  return (
    <>{children}</>
  )
}
