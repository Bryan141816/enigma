function search_item(){
    const search_item = document.getElementById("search").value;

    localStorage.setItem('search_item', search_item);

    window.location.href = "discover.html";
}