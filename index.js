let closebtns = document.querySelectorAll('.close') //to reach close button 

//click close button and delete list element
for (let i=0; i<closebtns.length; i++) {
    closebtns[i].addEventListener("click",function(){
        this.parentElement.style.display="none";
        let toastDOM=document.querySelector(".toast")
        toastDOM.innerHTML="Listeden Silindi"
        $(".toast").toast("show") //Show the toast for delete list element
    });
}
// to reach add button, list and text documents
let ekle = document.querySelector(".button")
let ulDOM = document.querySelector("ul.list")
let listDOM = document.querySelectorAll("li").length
let inputDOM = document.querySelector(".input")

//click the add button and add the list 
ekle.addEventListener("click",function(){
    if (listDOM%2==1 && inputDOM.value!=""){
        let liDOM=document.createElement('li');
        liDOM.innerHTML=inputDOM.value;
        ulDOM.append(liDOM);
        ulDOM.lastChild.classList.add('gray-2')
        let span = document.createElement("span");
        ulDOM.lastChild.appendChild(span);
        ulDOM.lastChild.lastElementChild.innerHTML="x"
        ulDOM.lastChild.lastElementChild.classList.add("close");
        inputDOM.value=""
        listDOM++;
        let toastDOM=document.querySelector(".toast")
        toastDOM.innerHTML="Listeye Eklendi"
        $(".toast").toast("show") // to show toast for add list element
        
        closebtns = document.querySelectorAll('.close');
        //click close button and delete list element
        for (let i=0; i<closebtns.length; i++) {
            closebtns[i].addEventListener("click",function(){
                this.parentElement.style.display="none";
                let toastDOM=document.querySelector(".toast")
                toastDOM.innerHTML="Listeden Silindi"
                $(".toast").toast("show")
            });
        }
    }
    else if (listDOM%2==0 && inputDOM.value!=""){
        let liDOM=document.createElement('li');
        liDOM.innerHTML=inputDOM.value;
        ulDOM.append(liDOM);
        ulDOM.lastChild.classList.add('gray-1')
        let span = document.createElement("span");
        ulDOM.lastChild.appendChild(span);
        ulDOM.lastChild.lastElementChild.innerHTML="x"
        ulDOM.lastChild.lastElementChild.classList.add("close");
        inputDOM.value=""
        listDOM++;
        let toastDOM=document.querySelector(".toast")
        toastDOM.innerHTML="Listeye Eklendi"
        $(".toast").toast("show")
        closebtns = document.querySelectorAll('.close');
        for (let i=0; i<closebtns.length; i++) {
            closebtns[i].addEventListener("click",function(){
                this.parentElement.style.display="none";
                let toastDOM=document.querySelector(".toast")
                toastDOM.innerHTML="Listeden Silindi"
                $(".toast").toast("show")
            });
        }
    }
    // to block blank text 
    else if (inputDOM.value=="") {
        let toastDOM=document.querySelector(".toast")
        toastDOM.innerHTML="Listeye boş ekleme yapamazsınız!"
        $(".toast").toast("show")
    }
})

// Check the List
let selectListElement = document.querySelectorAll("li");
for (let i=0; i<selectListElement.length; i++) {
    selectListElement[i].addEventListener("click",function(){
        if (selectListElement[i].classList.value=="gray-2 checked"){
            selectListElement[i].classList.remove("checked")
        }
        else if (selectListElement[i].classList.value=="gray-2") {
            selectListElement[i].classList.add('checked')
        }
        else if (selectListElement[i].classList.value=="gray-1 checked"){
            selectListElement[i].classList.remove("checked")
        }
        else if (selectListElement[i].classList.value=="gray-1") {
            selectListElement[i].classList.add('checked')
        }
        
    });
}