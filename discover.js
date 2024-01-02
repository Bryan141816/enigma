document.addEventListener("DOMContentLoaded",function(){
    
    const ai_name = ['XEMBLY','Genie','Fireflies AI','Veed.io','HeyGen','Adobe Enhance','QuillBot','ChatGPT','Grammarly','Bing AI','Google Bard','Claude AI','Dall-E','Figma','Adobe Express','Sendinblue','SmartWriter','Qatalog'];
    if (localStorage.getItem('search_item')!==null){
        const search_item = localStorage.getItem('search_item');
        const card_elements = document.getElementsByClassName('card');
        for(let i = 0; i<ai_name.length;i++){
            if(ai_name[i].toLowerCase()== search_item.toLowerCase()){
                const search_element = card_elements[i]
                const item_container = document.getElementById('item_container');
                while (item_container.firstChild) {
                    item_container.removeChild(item_container.firstChild);
                }
                const backg = document.createElement("div");
                backg.classList.add("backg");
                const border = document.createElement('div');
                border.classList.add('border');
                border.appendChild(search_element)
                backg.appendChild(border)
                item_container.appendChild(backg)
            }
        }
        localStorage.removeItem('search_item');
    }
});