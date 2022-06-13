

const myArray=[1,2,3,4,5];
const myButton=document.getElementById("submitting");
    myButton.addEventListener("click",function(){
        const success=document.createElement("p")
        success.id="new"
       const myContent= document.getElementById("pictures")
       myContent.appendChild(success)
       success.innerHTML="fhhdhsh"
        console.log(success)

        document.getElementById("heading").innerHTML="Thank you!"
        document.getElementById("paragraph").innerHTML="We appreciate you taking the time to give a rating. If you ever need more support, don ’t hesitate to get in touch! "
        // success=change
        const element = document.getElementById("submitting");
        // rate.remove()
        element.remove()
    })


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
        rate.style.backgroundColor="pink"
        // const answer= "You have selected "+ rate.value
        // success.innerHTML=answer
        // const main=document.getElementById("new")
        // main.innerHTML ="ghghhghg"
     }

     rate.addEventListener("click",change)

     function removeEvent(){
        // console.log("hdhdhd")
        rate.removeEventListener("click",change)
     }
     rate.addEventListener("mouseleave",removeEvent)
     
     
      //  rate.addEventListener("click", function(){
    //     rate.style.backgroundColor="red"

    //  })
    //  console.log(rate.value)
})
    