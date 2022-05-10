const bookURL = "https://www.googleapis.com/books/v1/volumes?q=";


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
    
  // console.log(searchData)

   ///Book details array
const results= searchData.items.map((volume) => {
    const output= {}
    output.title = volume.volumeInfo.title
    //output.author=volume.volumeInfo.author
    output.description= volume.volumeInfo.description

    console.log(output)//Out

    //firstbox information
    
    //const displayOne =document.getElementById("grid1")
    //const info=document.createTextNode(output.title)
    //displayOne.appendChild(info)


    return output


})
const displayOne =document.getElementById("grid1")
console.log(results) ///Result of function 
const info=document.createTextNode(results[0])
    displayOne.appendChild(info)


//console.log(results)

}


    