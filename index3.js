

const bookURL = "https://www.googleapis.com/books/v1/volumes?q=";

///Add Event Listener to Buttons
const button = document.getElementById("submit")
const box= document.getElementById("searchBox")

///Create Container for Items
const container = document.createElement("container")
container.classList.add("container");

document.body.appendChild(container);

///Define searchTerm
let searchTerm = box.value
let  SearchUrl =  bookURL + searchTerm;
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
    console.log(searchTerm)
    
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
    output.image = volume.volumeInfo.imageLinks.thumbnail;
   } else {
    output.image = "Unknown"
   }if (volume.volumeInfo.description){
   output.description= volume.volumeInfo.description;
   } else {
    output.description="Not available"
   }if ( output.description.length > 600) {
    output.description = `${output.description.slice(0,600)}...`;
}

   ///Creating div that contains Image, Title Author
   const div =document.createElement("div")
   div.classList.add("items");
   document.body.appendChild(div)


   ///Creating div2 that contains Image, Title, Author,Paragraph
   const div2 =document.createElement("div")
   div2.classList.add("items2");
   document.body.appendChild(div2)


   ///Creating new img element
   const image = document.createElement("img")
   image.src = output.image;

   //Append image to img element
   div.append(document.body.appendChild(image));

    ///Appending Div to Body
    div2.append(document.body.appendChild(div));

    ///Appending Container to Div
    container.append(div2)



///Create Items

   const createitem = (i, e) => {
       const item = document.createElement(e);
       item.appendChild(document.createTextNode(i));
       div.append(document.body.appendChild(item));
   };

   const createitem2 = (i,e) => {
    const item = document.createElement(e);
    item.appendChild(document.createTextNode(i));
    div2.append(document.body.appendChild(item));
   }

    

   ///Append Items 
   createitem(output.title, "h2")
   createitem(output.author, "h3")
   createitem2(output.description,"p")


 

    return output

    
})


}

