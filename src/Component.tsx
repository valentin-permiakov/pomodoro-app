import React from "react"

export const NewComponent = () => {
  const timestamp = new Date().toLocaleDateString()
  return (
    <div>
      {timestamp}
    </div>
  )
}
