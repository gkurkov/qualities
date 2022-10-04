import React from 'react'
import { useHistory } from 'react-router-dom'
// import CreateForm from "../components/ui/createForm";
import QualityForm from '../components/ui/qualities/qualityForm'
import { useQualities } from '../hooks/useQualities'

const AddQualityPage = () => {
  const history = useHistory()

  const { addQuality } = useQualities()

  const handleSubmit = (data) => {
    addQuality(data).then((data) => {
      if (data) history.push('/')
    })
  }
  return (
    <>
      <h1>Add Quality</h1>
      {/* <CreateForm /> */}
      <QualityForm onSubmit={handleSubmit} />
    </>
  )
}

export default AddQualityPage
