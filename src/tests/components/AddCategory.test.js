import React from 'react';
import '@testing-library/jest-dom'
import {shallow} from 'enzyme'
import {AddCategory} from '../../components/AddCategory'

describe('Pruebas en <AddCategory />', () => {

  const setCategories = jest.fn() // const setCategories = () => {}
  let wrapper = shallow( <AddCategory setCategories={setCategories} />)
  
  beforeEach(() => {
    jest.clearAllMocks()
    wrapper = shallow( <AddCategory setCategories={setCategories} />) // Reset wrapper (it had value 'Hola mundo')
  })
  
  test('debe mostrarse correctamente', () => {
    expect(wrapper).toMatchSnapshot()
  })
  
  test('debe cambiar la caja de texto', () => {
    let input = wrapper.find('input')
    const value = 'Hola mundo'
    input.simulate('change', { target: { value: value} })
    // expect(wrapper.find('p').text().trim()).toBe(value + '1')
    // expect(wrapper.find('p').text().trim()).toBe(value)
  })

  test('no debe poster al info onSubmit', () => {
    wrapper.find('form').simulate('submit', { preventDefault(){} })
    expect(setCategories).not.toHaveBeenCalled()
  })
  
  test('debe llamar el setCategories y limpiar la caja de texto', () => {
    
    const value = 'Hi world'

    //1. simular el inputChange
      wrapper.find('input').simulate('change', {target: {value}})

    //2. simular el submit
      wrapper.find('form').simulate('submit', { preventDefault(){} })

    //3. setCategories debe haberse llamado
      expect(setCategories).toHaveBeenCalled()
      expect(setCategories).toHaveBeenCalledTimes(1)
      expect(setCategories).toHaveBeenCalledWith( expect.any(Function) )

    //4. valor de input debe estar ''
      expect(wrapper.find('input').prop('value')).toBe('')
    

  })


});
