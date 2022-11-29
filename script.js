const pokeBtn = document.querySelector('#pokeBtn')
pokeBtn.addEventListener('click',getName)
async function getName()
{
    const getPokemonStats = await axions. get('https://pokeapi.co/api/v2/pokemon/ditto')
    .then(res=>res.data.results)
    .then(data=>{
           data.map(pokeStats=>{
           getPokemonStats(pokeStats)
      })
      return data
      })
  } catch(error)
  {
    console.error(error)
  }
            const getMainContainer = document.querySelector('#mainContainer')
            constgetStats = async(charStats)=>{
try{
    constinStats = await axions.get(charStats.url)
    .then(res=>res.date)
    .then(data=>{
            console.log()

            //<div class="card" style="width: 18rem;">
      const card = document.createElement('div')
      card.className = 'card'
            //<img src="..." class="card-img-top" alt="...">
      constfrontShiny = data.sprites.front-shiny
      const img = document.createElement('img')
      img.src=frontShiny
      img.className = 'card-img-top'
      card.append(img)
            // <div class="card-body">
      constcardBody=document.createElement('div')
      cardBody.className='card-body'
      console.log(charStats.name)
      card.append(cardBody)

      getMainContainer.append()
      })
            //<h5 class="card-title">Card title</h5>

      consth5 = document.createElement('h5')
      h5E1.className = 'card-title'
      h5E1.textContent = charStats.name
      cardbody.append(h5)
 
     //p element.card-text

constpE1 = document.createElement('p')
pE1.className = 'card-text'
data.types.map(type=>{
  pE1.textContent=' '+type.name
})
p1.textContent = data.type.map(type=>{
  return type
})
cardBody.append(pE1)

getMainContainer.append(card);
}
}
    trycatch(error);
    {
      console.error(error)
   }  
          

//https://pokeapi.co/api/v2/pokemon/ditto


