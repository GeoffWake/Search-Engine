////Things to do
////Assist with user input like add %20 for spaces in dearch terms

///Use a loop/iterator that will get one book at a time
////console.log(searchData.items[i].volumeInfo.title); loop through to get 10 books
///for loop into an array of objects by using map
///do something for if the search is spelt wrong on incorrect
///have an if/else statement whereby if something is nothing is there "unknown is returned"


///idea do a publishers, author, title and then feed the function/object into html


const bookURL = "https://www.googleapis.com/books/v1/volumes?q=${box.value}";

SearchUrl = (searchTerm) => {
    return bookURL + searchTerm;
};

//console.log(SearchUrl("Javascript"))

const search = async (searchTerm) => {
const requestPromise = fetch(SearchUrl(searchTerm));
const response = await requestPromise;
const searchData = await response.json(); ///This is returning the individual data/volume relating to search term
//console.log(searchData)
////to access title searchData is the whole object, inside of searchData then items, items array[0], then volume info then title

///In console type search("dogs") Will give the title of the first book in the array

///Same argument for addtional books just change position in array
//console.log(searchData.items[0].volumeInfo.title);
//console.log(searchData.items[1].volumeInfo.title);
//console.log(searchData.items[2].volumeInfo.title);
//console.log(searchData.items[3].volumeInfo.title);
//console.log(searchData.items[4].volumeInfo.title);
//console.log(searchData.items[5].volumeInfo.title);

///searchdata.items is an array, so we can map over that array

///publish
const results = searchData.items.map((volume)=> {
    const output = {}
    if(volume.volumeInfo.authors)
    output.author=volume.volumeInfo.authors[0]
    else output.author= 'unknown'
   return {
    Title: volume.volumeInfo.title,
    author: volume.volumeInfo.authors[0], ///Authors is an array so [0] gets the first author only 
    publisher: volume.volumeInfo.publisher,
    description: volume.volumeInfo.description,
    image: volume.volumeInfo.imageLinks,


} //this returns an object with the author and publisher

});
console.log(results)


}


///add an event listener to submit button
const button = document.getElementById("submit")
const box= document.getElementById("searchBox")

//const box= document.getElementById("searchBox")



button.addEventListener('click', (i) => {
    const box= document.getElementById("searchBox")
    i.preventDefault();
    console.log(box.value)
    
});


console.log(bookURL)


/// >   
///onsubmit="return false"

