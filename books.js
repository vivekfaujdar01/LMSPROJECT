function loadBooks() {
    const tbody = document.getElementById('bookList');
    tbody.innerHTML = '';
    Object.values(books).flat().forEach(book => {
        tbody.innerHTML += `
            <tr>
                <td class="py-2">${book.title}</td>
                <td>${book.author}</td>
                <td>${book.isbn}</td>
                <td>${book.category}</td>
                <td>${book.available ? 'Yes' : 'No'}</td>
                <td>
                    <button class="text-blue-600 hover:underline" onclick="editBook('${book.isbn}')">Edit</button>
                    <button class="text-red-600 hover:underline ml-2" onclick="deleteBook('${book.isbn}')">Delete</button>
                </td>
            </tr>
        `;
    });
}

function addBook(event) {
    event.preventDefault();
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;
    const category = document.getElementById('category').value;
    const coverImage = document.getElementById('coverImage').files[0];
    const cover = coverImage ? URL.createObjectURL(coverImage) : null;

    const newBook = { 
        title, 
        author, 
        isbn, 
        category, 
        available: true, 
        cover, 
        popular: false, 
        new: true, 
        description: '' 
    };
    if (!books[category]) books[category] = [];
    books[category].push(newBook);
    localStorage.setItem('books', JSON.stringify(books));
    document.getElementById('addBookForm').reset();
    loadBooks();
}

function editBook(isbn) {
    const book = Object.values(books).flat().find(b => b.isbn === isbn);
    if (book) {
        const newTitle = prompt("Edit Title:", book.title);
        if (newTitle) {
            book.title = newTitle;
            book.author = prompt("Edit Author:", book.author) || book.author;
            book.category = prompt("Edit Category:", book.category) || book.category;
            localStorage.setItem('books', JSON.stringify(books));
            loadBooks();
        }
    }
}

function deleteBook(isbn) {
    if (confirm("Are you sure you want to delete this book?")) {
        Object.keys(books).forEach(category => {
            books[category] = books[category].filter(b => b.isbn !== isbn);
            if (books[category].length === 0) delete books[category];
        });
        localStorage.setItem('books', JSON.stringify(books));
        loadBooks();
    }
}

function sortTable(key) {
    const allBooks = Object.values(books).flat();
    allBooks.sort((a, b) => (a[key] > b[key] ? 1 : -1));
    books = {};
    allBooks.forEach(book => {
        if (!books[book.category]) books[book.category] = [];
        books[book.category].push(book);
    });
    loadBooks();
}

// Load books and navbar on page load
window.addEventListener('load', () => {
    loadUserFromLocalStorage(); // From script.js
    loadBooks();
});