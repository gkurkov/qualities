import { toast } from 'react-toastify'
import React, { useContext, useEffect, useRef, useState } from 'react'
import qualityService from '../services/quality.service'

const QualitiesContext = React.createContext()

export const useQualities = () => {
  return useContext(QualitiesContext)
}

export const QualitiesProvider = ({ children }) => {
  const [error, setError] = useState(null)
  const [qualities, setQualities] = useState([])
  const [isLoading, setLoading] = useState(true)
  const prevState = useRef()

  useEffect(() => {
    const getQualities = async () => {
      try {
        // const qualities = await qualityService.fetchAll()
        // setQualities(qualities.content)
        const { content } = await qualityService.fetchAll()
        setQualities(content)
        setLoading(false)
      } catch (error) {
        errorCatcher(error)
      }
    }
    getQualities()
  }, [])

  const getQuality = (id) => {
    return qualities.find((q) => q._id === id)
  }

  const updateQuality = async ({ _id: id, ...data }) => {
    try {
      const { content } = await qualityService.update(id, data)
      setQualities((prevState) =>
        prevState.map((item) => {
          if (item._id === content._id) {
            return content
          }
          return item
        })
      )
      return content
    } catch (error) {
        errorCatcher(error)
    }
  }
  const addQuality = async (data) => {
    try {
      const { content } = await qualityService.create(data)
      setQualities((prevState) => [...prevState, content])
      return content
    } catch (error) {
        errorCatcher(error)
    }
  }

  const deleteQuality = async (id) => {
    prevState.current = qualities
    setQualities((prevState) => {
      return prevState.filter((item) => item._id !== id)
    })
    try {
      await qualityService.delete(id)
    } catch (error) {
    errorCatcher(error)
      toast('Object not deleted')
      setQualities(prevState.current)
    }
    // try {
    //   const { content } = await qualityService.delete(id)
    //   setQualities((prevState) => {
    //     return prevState.filter((item) => item._id !== content._id)
    //   })
    //   return content
    // } catch (error) {
    //   const { message } = error.response.data
    //   setError(message)
    // }
  }

  function errorCatcher(error) {
    const { message } = error.response.data
    setError(message)
}

useEffect(()=>{
    if(error!==null){
        toast(error)
        setError(null)
    }
}, [error])

  return (
    <QualitiesContext.Provider
      value={{
        qualities,
        getQuality,
        updateQuality,
        addQuality,
        deleteQuality,
      }}
    >
      {!isLoading ? children : <h1>Qualities are loading...</h1>}
    </QualitiesContext.Provider>
  )
}

// const QualitiesLoading = ({ children }) => {
//     const { isLoading } = useQualities()
//     if (!isLoading) {
//       return children
//     }
//     return <h1>Qualities are loading...</h1>
//   }
