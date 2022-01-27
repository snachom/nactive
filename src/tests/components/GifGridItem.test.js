import {shallow} from 'enzyme'
import { GifGridItem } from '../../components/GifGridItem';

describe('Pruebas en <GifGridItem />', () => {

  const title = 'Un título'
  const url = 'https://localhost/algo.jpg'
  const wrapper = shallow( <GifGridItem title={title} url={url}/>)

  test('debe mostrar el componente correctamente', () => {

    expect(wrapper).toMatchSnapshot();

  })

  test('debe tener un párrafo con el título', () => {

    const p = wrapper.find('p')
    expect(p.text().trim()).toBe( title )

  })

  test('debe tener la imagen igual al url y alt de los props', () => {

    const img = wrapper.find('img')
    // console.log( img.props('src') )
    expect(img.prop('src')).toBe(url)
    expect(img.prop('alt')).toBe(title)

  })

  test('deber tener animate__fadeIn', () => {

    const div = wrapper.find('div')
    const className = div.prop('className')
    // console.log(div.props('className'))

    expect(className.includes('animate__fadeIn')).toBe(true)

  })
});
