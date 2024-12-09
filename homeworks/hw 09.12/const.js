const library = {
  name: "Орталық кітапхана",
  address: "Алматы, Абай көшесі, 45",
  books: [
    {
      title: "Бақытсыз Жамал",
      author: "Міржақып Дулатұлы",
      year: 1910,
      isAvailable: true,
    },
    {
      title: "Махаббат, қызық мол жылдар ",
      author: "Әзілхан Нұршайықов",
      year: 1970,
      isAvailable: false,
    },
    {
      title: "Қамар сұлу",
      author: "Сұлтанмахмұт Торайғыров",
      year: 1914,
      isAvailable: true,
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


function addBook(title, author, year, isAvailable) {
  library.books.push({ title, author, year, isAvailable });
}


function toggleBookAvailability(title) {
  const book = library.books.find((b) => b.title == title);
  if (book) book.isAvailable = !book.isAvailable;
}

changeLibraryName("Жаңа Кітапхана");
addBook("Абай жолы", "Мұхтар Әуезов", 1942, true);
console.log(listAvailableBooks());
toggleBookAvailability("Қыз Жібек");

console.log(library);

