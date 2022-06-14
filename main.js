

const myArray=[1,2,3,4,5];

  let i=0;
myArray.forEach(function(item){
    const rate=document.createElement("button");
     rate.innerHTML=item
     document.getElementById("content").appendChild(rate)
     rate.value=item
     rate.style.borderRadius="50%"
     rate.style.backgroundColor="#242D37"
     rate.style.border="none"
     rate.style.padding="1.5vw 2vw"
     rate.style.color="white"
     rate.style.marginRight="1vw"
     rate.style.marginBottom="1vw"
     function change(){
        rate.style.backgroundColor="#7C8899"
        // const answer= "You have selected "+ rate.value
        // success.innerHTML=answer
        // const main=document.getElementById("new")
        // main.innerHTML ="ghghhghg"
     }
     rate.addEventListener("mouseenter",change,true)

    //  function removeEvent(){
    //     console.log("hdhdhd")
    //         rate.style.backgroundColor="#242D37"
    //     rate.removeEventListener("mouseenter",change,true)
    //  }
    //  rate.addEventListener("mouseleave",removeEvent)
    
     function clicking(){
        rate.style.backgroundColor="#EF7321"
        i= rate.value
     }

       rate.addEventListener("click", clicking)
    //  console.log(rate.value)
})

const myButton=document.getElementById("submitting");
// myButton.addEventListener(MouseEvent)
    myButton.addEventListener("click",function(){

        const thankImage=document.querySelector("img");
        thankImage.src="images/illustration-thank-you.svg"
        thankImage.style.margin="1vw 8vw"
        thankImage.style.width="13vw"

        const success=document.createElement("p")
        success.id="new"
       const myContent= document.getElementById("pictures")
       myContent.appendChild(success)
       success.innerHTML= "You selected " + i + " out of 5!"
        success.style.color="#EF7321"
        success.style.backgroundColor="#242D37"
        success.style.fontSize="1.5vw"
        success.style.width="60%"
        success.style.borderRadius="40px"
        success.style.padding='1vh'
        success.style.textAlign="center"
        success.style.marginLeft="5vw"

        const title=document.getElementById("heading")
        title.innerHTML="Thank you!"
        title.style.textAlign="center"

        const other=document.getElementById("paragraph")
        other.innerHTML="We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch! "
        other.style.textAlign="center"
        // success=change
        const element = document.querySelectorAll("button");
        // rate.remove()
        element.forEach(n=>
            n.remove()
            )
    })
    