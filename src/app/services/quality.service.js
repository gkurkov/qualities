import httpService from './http.service'
const qualityEndPoint = 'quality/'

// const updateQuality = async (content) => {
//   try {
//     const { data } = await httpService.put(qualityEndPoint, content)
//     // .then((res) => console.log('res', res.data.content))
//     return data
//   } catch (error) {
//     console.log('Expected error')
//   }
// }

// const getQuality = async (id) => {
//   try {
//     const { data } = await httpService.get(qualityEndPoint)
//     return data
//   } catch (error) {
//     console.log('Expected error')
//   }
// }

const qualityService = {
  update: async (id, content) => {
    const { data } = await httpService.put(qualityEndPoint + id, content)
    return data
  },
  get: async (id) => {
    const { data } = await httpService.get(qualityEndPoint + id)
    return data
  },
  fetchAll: async () => {
    const { data } = await httpService.get(qualityEndPoint)
    return data
  },
  create: async (content) => {
    const { data } = await httpService.post(qualityEndPoint, content)
    return data
  },
  delete: async (id) => {
    const { data } = await httpService.delete(qualityEndPoint + id + 'cwecds')
    return data
  },
}
export default qualityService
