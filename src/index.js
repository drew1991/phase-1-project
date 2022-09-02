
//request for resources from json.db
    fetch("http://localhost:3000/links")
        .then(resp => resp.json())
        .then (data => {
            showLinks(data)
            showLinksInfo(data[0])
    })
// wait for html to be completely parsed before running script
    document.addEventListener("DOMContentLoaded", ()=>{alert('Welcome My first Project')})
//add event listener to a button with an anonymous functions that perfroms alert
        let button = document.getElementById("agree")
    button.addEventListener('click', () => { 
        
        reported.innerText = reportedToIncrease(parseInt(reported.innerText, 10))
        alert("You Agree with report, Press okay to proceed");

    } )
    // grab an element,programmatically create a button and manipulate the dom
    let btnIncrease = document.querySelector('#myReport')
    let btn = document.createElement("button");
btn.innerHTML = "Disagree👎";
btn.style.background='#04AA6D'
btn.style.padding= '16';
btn.style.fontsize='16p';
btn.style.marginright= '150px';
btn.style.borderRadius='25%';
btn.style.color='red'
btnIncrease.appendChild(btn);
// adding eventlistener to button
btn.addEventListener("click", function () {
    reported.innerText = reportedToDecrease(parseInt(reported.innerText, 10))
// alert message
 alert("You Disagree with report, Press okay to proceed");

      
      
  } )
// function to display sites to html
let link=document.querySelector("#links")
function showLinks(data) {
    data.forEach(thing => {
        let sites= document.createElement("li")
        sites.className= "film item"
        sites.innerText= links.title
        sites.innerHTML= thing.title
        link.append(sites)
        sites.addEventListener('click', () => {    
            showLinksInfo(thing)
        })
    });
}

// grab elements from html and assign them to variables
let poster = document.getElementById("poster")
let title = document.getElementById("title")
let report = document.getElementById("report")
let filmInfo = document.getElementById("film-info") 
let show = document.getElementById("show")
let reported = document.getElementById("ticket-num")
// create function to display the info
function showLinksInfo(data) {
    title.innerText= data.title
    report.innerText= data.report
    filmInfo.innerText= data.description
    show.innerText= data.show
    reported.innerText= data.reported
    likes=data.likes
    
}
// function to decrement on button click
function reportedToDecrease(reported){
    
    if (reported >0 ){
        reported--
        return `${reported}`
           
    }
    return 0
} 

// function to increment on button click 
    function reportedToIncrease(reported){
        if (reported >0) {
            reported++
            return reported
        } else if (reported===0) {
            reported++
            return reported
        } else{
            return 'okay'
        }
       
    }
// grab elements from dom, and add event listener and in the anonymous function increment likes on button click
const likeCount = document.getElementById("like-count")
const commentList = document.getElementById("comments-list")
document.getElementById("poster").addEventListener('submit', addComment)
document.getElementById("like-button").addEventListener('click',()=>{
    likes +=1;
          renderLikes()
})
// write function to display comments on html using foreach
function renderComments(comments){
   
    commentList.innerHTML="";
    comments,forEach(renderComment)

 }
 function renderComment(comment) {

    const li = document.createElement('li')
    const delBut = document.createElement('button')
    li.textContent = comment.content
    delBut.textContent = "Delete Comment"
    delBut.style.backgroundColor="red"
    delBut.style.borderRadius='25%'
    delBut.style.marginLeft='150'
    commentList.append(li)
    li.appendChild(delBut)
    delBut.addEventListener('click', function(e) {
        e.target.closest('li').remove()
      })
 }
 function addComment(event) {
    event.preventDefault()
    const commentText ='=> ' + event.target.comment.value ;
    renderComment({content:commentText})

    event.target.reset();
 }
 function renderLikes() {
    document.getElementById("like-count").textContent = `${likes} likes `
}

