function loadCategories() {
    const categoryFilter = document.getElementById('categoryFilter');
    const categories = [...new Set(books.map(book => book.category))];
    categoryFilter.innerHTML = '<option value="all">All Categories</option>' + 
        categories.map(cat => `<option value="${cat}">${cat}</option>`).join('');
}

function searchBooks() {
    const query = document.getElementById('searchQuery').value.toLowerCase();
    const category = document.getElementById('categoryFilter').value;
    const sort = document.getElementById('sortFilter').value;
    let filteredBooks = [...books];

    if (category !== 'all') {
        filteredBooks = filteredBooks.filter(book => book.category === category);
    }

    if (query) {
        filteredBooks = filteredBooks.filter(book => 
            book.title.toLowerCase().includes(query) || 
            book.author.toLowerCase().includes(query) || 
            book.isbn.includes(query)
        );
    }

    if (sort === 'popular') {
        filteredBooks.sort((a, b) => b.popular - a.popular);
    } else if (sort === 'new') {
        filteredBooks.sort((a, b) => b.new - a.new);
    }

    displayBooks(filteredBooks);
}

function displayBooks(filteredBooks) {
    const bookList = document.getElementById('bookList');
    bookList.innerHTML = '';

    filteredBooks.forEach(book => {
        bookList.innerHTML += `
            <div class="card mb-4">
                <h3 class="text-lg font-semibold text-gray-800">${book.title}</h3>
                <p class="text-gray-600">Author: ${book.author}</p>
                <p class="text-gray-600">ISBN: ${book.isbn}</p>
                <p class="text-gray-600">Category: ${book.category}</p>
                <p class="text-gray-600">Status: ${book.available ? 'Available' : 'Issued'}</p>
                ${book.popular ? '<span class="text-green-600 font-semibold">Popular</span>' : ''}
                ${book.new ? '<span class="text-blue-600 font-semibold ml-2">New Arrival</span>' : ''}
                <p class="text-gray-700 mt-2">${book.description}</p>
                <button onclick="addToWishlist('${book.title}')" class="btn-action mt-2">Add to Wishlist</button>
            </div>
        `;
    });
}

function addToWishlist(bookTitle) {
    if (!user.isLoggedIn) {
        alert("Please log in to add books to your wishlist!");
        return;
    }
    if (!user.wishlist.includes(bookTitle)) {
        user.wishlist.push(bookTitle);
        localStorage.setItem('user', JSON.stringify(user));

        const userIndex = users.findIndex(u => u.email === user.email);
        if (userIndex !== -1) {
            users[userIndex].wishlist = user.wishlist;
            localStorage.setItem('users', JSON.stringify(users));
        }

        alert(`${bookTitle} added to your wishlist!`);
    } else {
        alert(`${bookTitle} is already in your wishlist!`);
    }
}

window.addEventListener('load', () => {
    loadUserFromLocalStorage();
    loadCategories();
    searchBooks();
});