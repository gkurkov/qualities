import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import QualitiesTable from '../components/ui/qualitiesTable'
// import axios from 'axios'
// import qualityService from '../services/quality.service'
import { useQualities } from '../hooks/useQualities'

const QualitiesListPage = () => {
  const history = useHistory()
  // const [qualities, setQualities] = useState([])
  const { qualities, deleteQuality } = useQualities()
  // 1 вариант
  //   useEffect(() => {
  //     const promise = axios
  //       .get('http://localhost:4000/api/v1/quality')
  //       .then((res) => setQualities(res.data.content))
  //   }, [])

  // 2 вариант
  // useEffect(async () => {
  //   qualityService.fetchAll().then((data) => setQualities(data.content))

  //   // const { data } = await axios.get('http://localhost:4000/api/v1/quality')
  //   // setQualities(data.content)
  // }, [])

  const handleEdit = (param) => {
    console.log(param)
    history.push(`/edit/${param}`)
  }
  const handleDelete = (id) => {
    deleteQuality(id)
  }
  return (
    <>
      <h1>Qualitites List Page</h1>
      <QualitiesTable
        onDelete={handleDelete}
        onEdit={handleEdit}
        data={qualities}
      />
    </>
  )
}

export default QualitiesListPage
