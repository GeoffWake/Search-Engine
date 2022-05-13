

gridpostions = ["grid1", "grid2", "grid3", "grid4", "grid5", "grid6", "grid7", "grid8", "grid9", "grid10",]

titlepostion = ["title1", "title2", "title3", "title4", "title5", "title6", "title7", "title8", "title9", "title10",]

authorpostions = ["author1", "author2", "author3", "author4", "author5", "author6", "author7", "author8", "author9", "author10",]

pictureposistion = ["picture1", "picture2", "picture3", "picture4", "picture5", "picture6", "picture7", "picture8", "picture9", "picture10"]

///add an event listener to submit button
const button = document.getElementById("submit")
const box= document.getElementById("searchBox")

//const box= document.getElementById("searchBox")


const bookURL = "https://www.googleapis.com/books/v1/volumes?q=";
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
   if (volume.volumeInfo.title){
       output.title=volume.volumeInfo.title
   }else {
        output.title= "Unknown";
   } if (volume.volumeInfo.authors) {
       output.author= volume.volumeInfo.authors[0]
   } else {
       output.author= "Unknown";
   }if (volume.volumeInfo.imageLinks) {
    output.image = volume.volumeInfo.imageLinks;
   } else {
    output.image = "Unknown"
   }
   output.description= volume.volumeInfo.description
   console.log(output)

    return output

    
})




///Append Titles to title posistion
///const f4= titlepostion.items.map((volume) => {}

//const pos = titlepostion.map((i)=>  
for (let i = 0; i < titlepostion.length; i++){
    const fred = document.getElementById(titlepostion[i]);
    
   const title=document.createTextNode(results[i].title)
   
  
   fred.appendChild(title)
   
}
////Appends authors to author posistion

for (let i = 0; i < pictureposistion.length; i++) {
    const fred3 = document.getElementById(pictureposistion[i]);

    const img = document.createElement("img")
    img.src= results[i].image.thumbnail;

   
   fred3.appendChild(img)
}

for (let i = 0; i < authorpostions.length; i++) {
    const fred1 = document.getElementById(authorpostions[i]);

   const author=document.createTextNode(results[i].author)
   fred1.appendChild(author)
}



}
