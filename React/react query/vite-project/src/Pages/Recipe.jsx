import React from 'react'
import { useState } from 'react'
import { useQuery, keepPreviousData } from '@tanstack/react-query'


function Recipe() {

  let [search, setSearch] = useState('')

  const { isPending, error, data } = useQuery({
    queryKey: ['recipe', search],
    queryFn: () =>
      fetch(
        search
          ? `https://dummyjson.com/recipes/search?q=${search}`
          : "https://dummyjson.com/recipes"
      ).then((res) => res.json()),
    keepPreviousData: true,
  })

  // if (isPending) return 'Loading...'
  if (error) return 'An error has occurred: ' + error.message

  console.log(data)


  return (

    <div>
      {
        isPending && <h1>Loading...</h1>
      }

      <h1>Recipe Page</h1>

      <hr />

      <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
        <input value={search} onChange={(e) => setSearch(e.target.value)} type="text" style={{ width: '50%', height: '50px' }} name="" id="" />
      </div>

      <hr />
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
        {
          data?.recipes?.map((item, index) => {
            return <div style={{ textAlign: 'center', border: '2px solid black', gap: '20px', marginBottom: '10px', flexWrap: 'wrap', width: '20%' }} key={index}>
              <h1>{item.id}</h1>
              <img src={item.image} width='200' alt="" />
              <h3>{item.name}</h3>
              <h3>{item.cuisine}</h3>
            </div>
          })
        }
      </div>
    </div>
  )
}

export default Recipe
