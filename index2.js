const bookURL = "https://www.googleapis.com/books/v1/volumes?q=";

gridpostions = ["grid1", "grid2", "grid3", "grid4", "grid5", "grid6", "grid7", "grid8", "grid9", "grid10",]
///add an event listener to submit button
const button = document.getElementById("submit")
const box= document.getElementById("searchBox")

//const box= document.getElementById("searchBox")



///Event Listener to pull search term
button.addEventListener('click', (e) => {
    const box= document.getElementById("searchBox")
    const bookURL = "https://www.googleapis.com/books/v1/volumes?q=";
    e.preventDefault();
    searchTerm = (box.value)
    SearchUrl =  bookURL + searchTerm;
    //console.log(document.getElementById("searchBox").value)
    //console.log(bookURL+searchTerm) ///way of getting complete website and search term///turn into a function
    console.log(SearchUrl)
    console.log(search(SearchUrl))
    
});

///Pull API data
const search = async(searchTerm) => {
    const promiseRequest =fetch(SearchUrl)
    const response = await promiseRequest 
    const searchData = await response.json()
    
   console.log(searchData)

   ///Book details array
const results= searchData.items.map((volume) => {
    const output= {}
    output.title = volume.volumeInfo.title
    //output.subtitle = volume.volumeInfo.subtitle
    
    //output.author=volume.volumeInfo.author
 //output.description= volume.volumeInfo.description
    output.image = volume.volumeInfo.imageLinks;
    
   //console.log(output.image.thumbnail)

    //firstbox information
    
    //const displayOne =document.getElementById("grid1")
    //const info=document.createTextNode(output.title)
    //displayOne.appendChild(info)


    return output


})
//const displayOne =document.getElementById("grid1")
//console.log(results[0].title) ///Result of function 
//const info=document.createTextNode(results[i].title)
 //   displayOne.appendChild(info//

    for (let i = 0; i < gridpostions.length; i++) {
        const fred = document.getElementById(gridpostions[i]);

       const title=document.createTextNode(results[i].title)
       //const info2=document.createTextNode(results[i].description)

       ///Display Image
       const img = document.createElement("img")
      img.src= results[i].image.thumbnail;
       console.log(results[i].description)
       //const info3=document.createTextNode( results[i].image.thumbnail)
       ///( results[i].image.thumbnail)
        //console.log(info3)
        //let img =document.createElement("img");
       
        




        ///Fred this appends to Page

        fred.appendChild(img)

        
       fred.appendChild(title)
        //fred.appendChild(info2)
       


    }
}

