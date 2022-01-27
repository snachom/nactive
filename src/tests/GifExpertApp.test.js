import React from 'react'
import {shallow} from 'enzyme'
import '@testing-library/jest-dom'
import {GifExpertApp} from '../GifExpertApp'

describe('Pruebas sobre GifExpertApp', () => {

  const wrapper = shallow(<GifExpertApp />)

  test('GifExpertApp', () => {

    expect(wrapper).toMatchSnapshot()

  })

  test('debe mostrar una lista de categorías', () => {

    const categories = ['Snoopy', 'Charlie Brown']
    const wrapper = shallow(<GifExpertApp defaultCategories={categories} />)

    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find('GifGrid').length).toBe(categories.length)
    
  })

})