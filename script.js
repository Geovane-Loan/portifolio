let docTitle = document.title;
window.addEventListener("blur",() =>{
    document.title = "😢 Volta aqui";
})
window.addEventListener("focus", () =>{
    document.title = docTitle
})
