import React from 'react'
import SelectField from '../../../components/common/form/selectField'
import TextField from '../../../components/common/form/textField'
import colors from '../../../constants/colors.json'
import useForm from '../../../hooks/useForm'
// import { useQualities } from '../../../hooks/useQualities'

const QualityForm = ({ data, onSubmit }) => {
  const { form, handeleSubmit, handleChange } = useForm(data, onSubmit)
  // const data = useContext(QualitiesContext)
  // const data = useQualities()

  return (
    <form onSubmit={handeleSubmit}>
      <TextField
        label='Наименование'
        name='name'
        onChange={handleChange}
        value={form.name || ''}
      />
      <SelectField
        label='Цвет'
        name='color'
        options={colors}
        onChange={handleChange}
        value={form.color || ''}
      />
      <button className='btn btn-primary'>Submit</button>
    </form>
  )
}

export default QualityForm
