import React from 'react';
import { useFetchGifs } from '../../hooks/useFetchGifs'
import { renderHook } from '@testing-library/react-hooks'


describe('Pruebas en el hook useFetchGifs', () => {

  test('debe devolver el estado inicial', async() => {

    // const  resp = useFetchGifs( 'category' );
    // const  { data, loading } = useFetchGifs( 'category' );
    // console.log(resp)
    // console.log( data, loading );
    
    const { result, waitForNextUpdate } = renderHook( () => useFetchGifs('Charlie') );
    const { data, loading } = result.current;
    
    
    await waitForNextUpdate({ timeout: 3000 });
    expect( data ).toEqual( [] )
    expect( loading ).toEqual( true )
    
  })
  
  test('debe devolver un array de imgs y el loading', async() => {
    
    const { result, waitForNextUpdate } = renderHook( () => useFetchGifs('Charlie') );
    await waitForNextUpdate({ timeout: 3000 });

    const { data, loading } = result.current
    
    expect( data.length ).toBe( 4 )
    expect( loading ).toBe( false )

  });
  

})