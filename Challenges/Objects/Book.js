/**
 * Creating a class that represents a book
 */

class Book {
  constructor(title, author, pubYear, pageNumber, currentPage, readStatus) {
    this.title = title;
    this.author = author;
    this.pubYear = pubYear;
    this.pageNumber = pageNumber;
    this.currentPage = currentPage;
    this.readStatus = readStatus;
  }

  updateCurrentPage(newCurrentPage) {
    if (newCurrentPage <= pageNumber) {
      this.currentPage = currentPage;
    } else {
      console.log("Impossible!");
    }
  }

  updateStatus(newStatus) {
    this.readStatus = newStatus;
  }
}

export default Book;
