const accessKey="yIhFAaUSkPpL4I0-5ovyV0BASF7xW-UhMj584BrlQS8";

const formE1=document.querySelector("form")
const inputE1=document.getElementById("search-input")
const searchResults=document.querySelector("#search-results")
const showMore=document.getElementById("show-more-button")

let inputData=''
let page=1;

async function searchImages(){
    inputData=inputE1.value;
    const url=`https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}` 
    const response= await fetch(url)
    const data= await response.json()
     
    const results=data.results;
    if(page ===1){
        searchResults.innerHTML="";
    }

    results.map((result)=>{
        const imageWrapper=document.createElement('div');
        imageWrapper.classList.add("search-result")
        const image=document.createElement("img");
        image.src=result.urls.small;
        image.alt=result.alt_description;
        const imageLink=document.createElement("a");
        imageLink.href=result.links.html;
        imageLink.target="_blank";
        imageLink.textContent=result.alt_description;
        
        imageWrapper.appendChild(image);
        imageWrapper.appendChild(imageLink);
        searchResults.appendChild(imageWrapper);
    });
    page++;
    if(page>1){
        showMore.style.display='block'
    }
}
formE1.addEventListener('submit',(event)=>{
    event.preventDefault()
    page=1;
    searchImages()
})
showMore.addEventListener('click',()=>{
    searchImages()
})

// random value
// const a=Math.random()*(10-1)+1;
// console.log(a)

// const a= Math.floor(Math.random()*(10-1)+1);
// console.log(`random number between 1 to 10 is ${a}`)

// const min=parseInt(prompt('Enter the min value:'))
// const max=parseInt(prompt('Enter the max value:'))
// const a=Math.floor(Math.random()*(max-min+1))+min;
// console.log(`random value between 1 to 50 is ${a}`)


// function getRandomItem(arr){
//     const randomIndex=Math.floor(Math.random()*arr.length)
//     const item=arr[randomIndex]
//     return item

// }
// arr=[1,'hello',5,9]
// const result=getRandomItem(arr)
// console.log(result)

// guess a random number
// function GuessNumber(){
//     const random=Math.floor(Math.random()*10)+1
//     let Number=parseInt(prompt("Enter the guess number:"))
//     while(Number!==random){
//         Number=parseInt(prompt("Enter the guess number:"))
//     }
//     if(Number==random){
//         console.log('u guess the correct number')
//     }
// }
// GuessNumber()






