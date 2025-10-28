let books = {
    "9780140177398": { title: "Of Mice and Men", author: "John Steinbeck" },
    "9780451524935": { title: "1984", author: "George Orwell" },
    "9780743273565": { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
    "9780141439518": { title: "Pride and Prejudice", author: "Jane Austen" }
};

// Function that returns a Promise for searching by author
function searchByAuthor(authorName) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const results = Object.values(books).filter(book =>
                book.author.toLowerCase() === authorName.toLowerCase()
            );

            if (results.length > 0) {
                resolve(results);
            } else {
                reject("❌ No books found for author: " + authorName);
            }
        }, 1000); // Simulated delay
    });
}

// Call the function using Promises
searchByAuthor("George Orwell")
    .then(books => console.log("✅ Books Found:", books))
    .catch(err => console.log(err));
