const createList = (body, array)=>{
    for(let i = 0; i < body.children.length; i++){
        array.push({
            name: body.children[i].children[0].textContent,
            row: body.children[i]
        });
    }
}

const filterTable = (body, text)=>{
    for(let i = 0; i < body.children.length; i++){
        let textContent = body.children[i].children[0].textContent.toLowerCase();
        if(textContent.includes(text)){
            body.children[i].style.display = "table-row";
        }else{
            body.children[i].style.display = "none";
        }
    }
}

const textSearch = ()=>{
    let text = document.getElementById("textInput").value.toLowerCase();
    let bodies = document.querySelectorAll("tbody");
    for(let i = 0; i < bodies.length; i++){
        filterTable(bodies[i], text);
    }
}

const addCard = (elem)=>{
    elem.classList.toggle("selected");
    let selected = document.querySelectorAll(".selected");
    document.getElementById("createDeck").style.display = selected.length > 0 ? "block" : "none";
}

const createCustomDeck = ()=>{
    let items = document.querySelectorAll(".selected");
    let deckString = "";
    for(let i = 0; i < items.length; i++){
        deckString += `${items[i].children[0].textContent},${items[i].children[1].textContent},`;
    }
    deckString = deckString.substring(0, deckString.length - 1);
    window.open(`https://flashcards.ukrainianlessons.net/deck/custom?cards=${deckString}`, "_blank");
}

let items = document.querySelectorAll("tbody tr");
for(let i = 0; i < items.length; i++){
    items[i].onclick = ()=>{addCard(items[i])};
}

