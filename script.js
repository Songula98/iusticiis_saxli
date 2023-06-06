
  function searchKeyPress(event) {
    if (event.keyCode === 13) { // 13 არის Enter კლავიატურის კოდი
      event.preventDefault(); // გააჩნიათ ფორმის სტანდარტული მოქმედება (გაგრძელებს გაგზავნას)
      performSearch(); // გაუშვით ძებნის ფუნქცია
    }
  }

  function performSearch() {
    var searchInput = document.getElementById('search-bar').value;
    // აქ ჩაწერეთ ძებნის ლოგიკა თქვენი საიტისთვის
    console.log('ძებნა:# ' + searchInput);
  }
