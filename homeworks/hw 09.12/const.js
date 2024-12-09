const library = {
  name: "Орталық кітапхана",
  address: "Алматы, Абай көшесі, 45",
  books: [
    {
      title: "Бақытсыз Жамал",
      author: "Міржақып Дулатұлы",
      year: 1910,
     
    },
    {
      title: "Махаббат, қызық мол жылдар ",
      author: "Әзілхан Нұршайықов",
      year: 1970,
      
    },
    {
      title: "Қамар сұлу",
      author: "Сұлтанмахмұт Торайғыров",
      year: 1914,
     
    },
  ],
};


function changeLibraryName(newName) {
  library.name = newName;
}
function listAvailableBooks() {
  return library.books
    .filter((book) => book.isAvailable)
    .map((book) => book.title);
}


function addBook(title, author, year,) {
  library.books.push({ title, author, year,  });
}


function toggleBookAvailability(title) {
  const book = library.books.find((b) => b.title == title);
  if (book) book.isAvailable;
}

changeLibraryName("Жаңа Кітапхана");
addBook("Абай жолы", "Мұхтар Әуезов", 1942, true);
console.log(listAvailableBooks());
toggleBookAvailability("Қыз Жібек");

console.log(library);

