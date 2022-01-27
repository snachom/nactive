import {getGifs} from '../../helpers/getGifs'


describe('Pruebas con getGifs Fetch', () => {

  test('debe de traer 4 elementos', async() => {
    
    const gifs = await getGifs('Avengers')

    expect(gifs.length).toBe(4)

  });

  test('debe de traer 4 elementos', async() => {
    
    const gifs = await getGifs('')

    // console.log(gifs)

    expect(gifs.length).toBe(0)

  });
  

})