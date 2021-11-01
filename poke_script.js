document.getElementById('getInfo').addEventListener('click', getInfo)
        
        
        
async function getInfo(){
    var name = document.getElementById('name')
    var url = 'http://pokeapi.co/api/v2/pokemon/' + name.value
    
 try{
    var data = await fetch(url)  //0.5s
    data = await data.json()

    var urlImg = data.sprites.front_default
    document.getElementById('image').src=urlImg

    data = await fetch(data.species.url)
    data = await data.json()
    data = await fetch(data.evolution_chain.url)
    data = await data.json()

    var evolution = data.chain.evolves_to[0].species.name
    document.getElementById('evolution').innerHTML=evolution
 }catch(error){
     console.log(error)
 }
}