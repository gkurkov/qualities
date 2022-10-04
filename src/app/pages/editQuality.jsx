import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
// import EditForm from '../components/ui/editForm'
// import axios from 'axios'
// import httpService from '../services/http.service'
// import config from '../config.json'
import qualityService from '../services/quality.service'
import { toast } from 'react-toastify'
import QualityForm from '../components/ui/qualities/qualityForm'
import { useQualities } from '../hooks/useQualities'

// // перехватчик ошибок
// axios.interceptors.response.use(
//     // получили данные
//     (response) => response,
//     // обрабатываем ошибки
//     function (error) {
//       const expectedErrors =
//         error.response &&
//         error.response.status >= 400 &&
//         error.response.status < 500
//       // обработали ошибку:
//       if (!expectedErrors) {
//         console.log('Unexpected error')
//       }
//       // продолжаем выполнять код, передаем ошибку жальше
//       return Promise.reject(error)
//     }
//   )

const EditQualityPage = () => {
  // const [quality, setQuality] = useState(null)
  const id = useParams().id
  const { getQuality, updateQuality } = useQualities()
  const quality = getQuality(id)
  const history = useHistory()

  // const [errors, setErrors] = useState(null)
  // const qualityEndPoint = `http://localhost:4000/api/v1/quality/${id}`
  // const qualityEndPoint = config.apiEndPoint + `quality/${id}`
  // const qualityEndPoint = `quality/${id}`

  // const updateQuality = async (content) => {
  //   try {
  //     const data = await qualityService.update(id, content)
  //     return data.content
  //   } catch (error) {
  //     const { message, code } = error.response.data
  //     setErrors({ message, code })
  //     toast.error(message)
  //   }

  // try {
  //   const { data } = await httpService
  //     .put(qualityEndPoint, content)
  // .then((res) => console.log('res', res.data.content))
  // return data
  // } catch (error) {
  //   console.log('Expected error')
  // }

  const handleSubmit = (data) => {
    updateQuality(data).then((data) => {
      if (data) history.push('/')
    })}

  // const getQuality = async (id) => {
  //   try {
  //     const data = await qualityService.get(id)
  //     return data.content
  //     // setQuality(data.content)
  //   } catch (error) {
  //     const { message } = error.response.data
  //     toast.error(message)
  //     console.log('Expected error')
  //   }
  // }

  //   const handleSubmit = async (data) => {
  //     try {
  //       await httpService
  //         .put(qualityEndPoint, data)
  //         .then((res) => console.log('res', res.data.content))
  //     } catch (error) {
  //       //   const expectedErrors =
  //       //     error.response &&
  //       //     error.response.status >= 400 &&
  //       //     error.response.status < 500
  //       //   if (!expectedErrors) {
  //       //     console.log('Unexpected error')
  //       //   } else {
  //       console.log('Expected error')
  //       //   }
  //     }
  //   }

  //   useEffect(async () => {
  //     const { data } = await httpService.get(qualityEndPoint)
  //     setQuality(data.content)
  //   }, [])
  // useEffect(() => {
  //   getQuality(id).then((data) => setQuality(data))
  // }, [])
  return (
    <>
      <h1>Edit Quality Page</h1> {/* {quality !== null ? ( */}
      {/* <EditForm data={quality} onSubmit={handleSubmit} /> */}
      <QualityForm data={quality} onSubmit={handleSubmit} />
      {/* ) : (
        'Loading...'
      )} */}
    </>
  )
}
export default EditQualityPage
