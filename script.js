const books = [
    { title: "Game of Thrones", author: "George R.R. Martin", isbn: "978-0553103540", category: "Fantasy", available: true, popular: true, new: false, description: "Epic fantasy series with political intrigue." },
    { title: "The Hobbit", author: "J.R.R. Tolkien", isbn: "978-0547928227", category: "Fantasy", available: true, popular: true, new: false, description: "A classic adventure in Middle-earth." },
    { title: "Dune", author: "Frank Herbert", isbn: "978-0441172719", category: "Sci-Fi", available: true, popular: true, new: false, description: "A desert planet holds the key to the universe." },
    { title: "Foundation", author: "Isaac Asimov", isbn: "978-0553293357", category: "Sci-Fi", available: true, popular: false, new: true, description: "The fall and rise of a galactic empire." },
    { title: "The Girl with the Dragon Tattoo", author: "Stieg Larsson", isbn: "978-0307454546", category: "Mystery", available: true, popular: true, new: false, description: "A hacker and journalist uncover dark secrets." },
    { title: "Gone Girl", author: "Gillian Flynn", isbn: "978-0307588371", category: "Mystery", available: true, popular: true, new: false, description: "A twisted tale of marriage and disappearance." },
    { title: "Sapiens", author: "Yuval Noah Harari", isbn: "978-0062316097", category: "Non-Fiction", available: true, popular: true, new: false, description: "A brief history of humankind." },
    { title: "Becoming", author: "Michelle Obama", isbn: "978-1524763138", category: "Non-Fiction", available: true, popular: true, new: false, description: "A former First Lady’s memoir." },
    { title: "Pride and Prejudice", author: "Jane Austen", isbn: "978-0141439518", category: "Romance", available: true, popular: true, new: false, description: "A classic tale of love and misunderstanding." },
    { title: "The Notebook", author: "Nicholas Sparks", isbn: "978-0446676090", category: "Romance", available: true, popular: true, new: false, description: "A love story across decades." },
    { title: "Beach Read", author: "Emily Henry", isbn: "978-1984806734", category: "Romance", available: true, popular: false, new: true, description: "Writers swap genres and find love." },
    { title: "It Ends with Us", author: "Colleen Hoover", isbn: "978-1501110368", category: "Romance", available: true, popular: true, new: false, description: "A story of love and resilience." }
];

let user = {
    isLoggedIn: false,
    username: "",
    email: "",
    role: "user",
    borrowedBooks: [],
    wishlist: [],
    readingHistory: []
};

let users = JSON.parse(localStorage.getItem('users')) || [];
let transactions = JSON.parse(localStorage.getItem('transactions')) || [
    { book: "Game of Thrones", member: "John Doe", action: "Issued", date: "2025-03-25" },
    { book: "The Hobbit", member: "Jane Smith", action: "Returned", date: "2025-03-26" },
];
let dueBooks = JSON.parse(localStorage.getItem('dueBooks')) || [
    { book: "The Hobbit", member: "Jane Smith", dueDate: "2025-03-28", status: "Overdue" },
];
let borrowedBooks = JSON.parse(localStorage.getItem('borrowedBooks')) || [];

function loadUserFromLocalStorage() {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
        user = { ...user, ...storedUser };
    }

    users = JSON.parse(localStorage.getItem('users')) || users;
    transactions = JSON.parse(localStorage.getItem('transactions')) || transactions;
    dueBooks = JSON.parse(localStorage.getItem('dueBooks')) || dueBooks;
    borrowedBooks = JSON.parse(localStorage.getItem('borrowedBooks')) || borrowedBooks;

    // Sync books availability with borrowedBooks
    books.forEach(book => {
        book.available = !borrowedBooks.some(b => b.isbn === book.isbn);
    });

    updateNavbar();
    updateDashboard();
}

function handleSignup(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const role = document.getElementById('role').value;

    if (users.some(u => u.email === email)) {
        alert("Email already registered! Please use a different email or log in.");
        return;
    }

    const newUser = {
        username,
        email,
        password,
        role,
        borrowedBooks: [],
        wishlist: [],
        readingHistory: []
    };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    alert("Signup successful! Please log in.");
    window.location.href = "login.html";
}

function handleLogin(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const foundUser = users.find(u => u.email === email && u.password === password);
    if (foundUser) {
        user = {
            isLoggedIn: true,
            username: foundUser.username,
            email: foundUser.email,
            role: foundUser.role,
            borrowedBooks: foundUser.borrowedBooks || [],
            wishlist: foundUser.wishlist || [],
            readingHistory: foundUser.readingHistory || []
        };
        localStorage.setItem('user', JSON.stringify(user));
        alert("Login successful!");
        window.location.href = "index.html";
    } else {
        alert("Invalid email or password. Please try again.");
    }
}

function logout() {
    user = {
        isLoggedIn: false,
        username: "",
        email: "",
        role: "user",
        borrowedBooks: [],
        wishlist: [],
        readingHistory: []
    };
    localStorage.setItem('user', JSON.stringify(user));
    updateNavbar();
    window.location.href = "index.html";
}

function updateNavbar() {
    const navLinks = document.getElementById('nav-links');
    if (!navLinks) return;

    if (user.isLoggedIn) {
        let navHTML = `
            <a href="index.html" class="text-white hover:text-blue-200 transition font-semibold block md:inline-block py-2 md:py-0">Dashboard</a>
            <a href="search.html" class="text-white hover:text-blue-200 transition font-semibold block md:inline-block py-2 md:py-0">Search & Browse</a>
            <a href="reports.html" class="text-white hover:text-blue-200 transition font-semibold block md:inline-block py-2 md:py-0">Reports</a>
            <a href="contact.html" class="text-white hover:text-blue-200 transition font-semibold block md:inline-block py-2 md:py-0">Contact</a>
        `;
        if (user.role === 'admin') {
            navHTML += `
                <a href="books.html" class="text-white hover:text-blue-200 transition font-semibold block md:inline-block py-2 md:py-0">Book Management</a>
                <a href="members.html" class="text-white hover:text-blue-200 transition font-semibold block md:inline-block py-2 md:py-0">Member Management</a>
            `;
        }
        if (user.role === 'librarian' || user.role === 'admin') {
            navHTML += `
                <a href="borrow-return.html" class="text-white hover:text-blue-200 transition font-semibold block md:inline-block py-2 md:py-0">Borrow & Return</a>
            `;
        }
        navLinks.innerHTML = navHTML + `
            <div class="flex items-center space-x-2">
                <div class="flex items-center space-x-2 cursor-pointer" onclick="showProfile()">
                    <div class="w-8 h-8 rounded-full bg-white flex items-center justify-center font-bold text-blue-600">${user.username[0].toUpperCase()}</div>
                    <span class="text-white hover:text-blue-200 transition font-semibold">${user.username}</span>
                </div>
                <button onclick="logout()" class="text-white hover:text-blue-200 transition font-semibold">Logout</button>
            </div>
        `;
    } else {
        navLinks.innerHTML = `
            <a href="index.html" class="text-white hover:text-blue-200 transition font-semibold block md:inline-block py-2 md:py-0">Dashboard</a>
            <a href="search.html" class="text-white hover:text-blue-200 transition font-semibold block md:inline-block py-2 md:py-0">Search & Browse</a>
            <a href="reports.html" class="text-white hover:text-blue-200 transition font-semibold block md:inline-block py-2 md:py-0">Reports</a>
            <a href="contact.html" class="text-white hover:text-blue-200 transition font-semibold block md:inline-block py-2 md:py-0">Contact</a>
            <a href="login.html" class="text-white hover:text-blue-200 transition font-semibold block md:inline-block py-2 md:py-0">Login</a>
        `;
    }
}

function updateDashboard() {
    const adminDashboard = document.getElementById('admin-dashboard');
    const userDashboard = document.getElementById('user-dashboard');
    if (user.isLoggedIn && (user.role === "admin" || user.role === "librarian")) {
        if (adminDashboard) adminDashboard.classList.remove('hidden');
        if (userDashboard) userDashboard.classList.add('hidden');
        loadAdminDashboard();
    } else {
        if (adminDashboard) adminDashboard.classList.add('hidden');
        if (userDashboard) userDashboard.classList.remove('hidden');
        loadUserDashboard();
    }
}

function loadAdminDashboard() {
    const totalBooks = books.length;
    const issuedBooks = books.filter(b => !b.available).length;
    const availableBooks = totalBooks - issuedBooks;
    const totalMembers = JSON.parse(localStorage.getItem('members'))?.length || 0;

    if (document.getElementById('total-books')) document.getElementById('total-books').textContent = totalBooks;
    if (document.getElementById('issued-books')) document.getElementById('issued-books').textContent = issuedBooks;
    if (document.getElementById('available-books')) document.getElementById('available-books').textContent = availableBooks;
    if (document.getElementById('total-members')) document.getElementById('total-members').textContent = totalMembers;

    const transactionsTable = document.getElementById('recent-transactions');
    if (transactionsTable) {
        transactionsTable.innerHTML = '';
        transactions.forEach(t => {
            transactionsTable.innerHTML += `
                <tr>
                    <td class="py-2">${t.book}</td>
                    <td>${t.member}</td>
                    <td>${t.action}</td>
                    <td>${t.date}</td>
                </tr>
            `;
        });
    }

    const dueTable = document.getElementById('due-alerts');
    if (dueTable) {
        dueTable.innerHTML = '';
        dueBooks.forEach(d => {
            dueTable.innerHTML += `
                <tr>
                    <td class="py-2">${d.book}</td>
                    <td>${d.member}</td>
                    <td>${d.dueDate}</td>
                    <td class="${d.status === 'Overdue' ? 'text-red-600' : ''}">${d.status}</td>
                </tr>
            `;
        });
    }

    const allBooksTable = document.getElementById('all-books-table');
    if (allBooksTable) {
        allBooksTable.innerHTML = '';
        books.forEach(book => {
            allBooksTable.innerHTML += `
                <tr>
                    <td class="py-2">${book.title}</td>
                    <td>${book.author}</td>
                    <td>${book.isbn}</td>
                    <td>${book.category}</td>
                    <td>${book.available ? 'Yes' : 'No'}</td>
                </tr>
            `;
        });
    }
}

function loadUserDashboard() {
    const borrowedTable = document.getElementById('borrowed-books');
    if (borrowedTable) {
        borrowedTable.innerHTML = '';
        const userBorrowed = borrowedBooks.filter(b => b.memberId === user.username);
        userBorrowed.forEach(b => {
            const book = books.find(book => book.isbn === b.isbn);
            borrowedTable.innerHTML += `
                <tr>
                    <td class="py-2">${book?.title || 'Unknown'}</td>
                    <td>${book?.author || 'Unknown'}</td>
                    <td>${b.dueDate}</td>
                </tr>
            `;
        });
    }

    const wishlistDiv = document.getElementById('wishlist');
    if (wishlistDiv) {
        wishlistDiv.innerHTML = user.wishlist.length ? user.wishlist.map(w => `<p>${w}</p>`).join('') : '<p>No books in wishlist yet.</p>';
    }
}

function quickSearch() {
    const query = document.getElementById('quick-search')?.value.toLowerCase();
    if (query) console.log(`Searching for: ${query}`);
}

function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    if (navLinks) navLinks.classList.toggle('active');
}

function showProfile() {
    const modal = document.getElementById('profileModal');
    if (!modal) return;

    document.getElementById('profileUsername').textContent = `Username: ${user.username}`;
    document.getElementById('profileEmail').textContent = `Email: ${user.email}`;

    const userBorrowed = borrowedBooks.filter(b => b.memberId === user.username);
    const borrowedTable = document.getElementById('profileBorrowedBooks');
    if (borrowedTable) {
        borrowedTable.innerHTML = '';
        userBorrowed.forEach(b => {
            const book = books.find(book => book.isbn === b.isbn);
            borrowedTable.innerHTML += `
                <tr>
                    <td class="py-2">${book?.title || 'Unknown'}</td>
                    <td>${b.dueDate}</td>
                </tr>
            `;
        });
    }

    const historyDiv = document.getElementById('readingHistory');
    if (historyDiv) {
        historyDiv.innerHTML = user.readingHistory.length ? 
            user.readingHistory.map(h => `<p>${h}</p>`).join('') : 
            '<p>No reading history yet.</p>';
    }

    modal.classList.remove('hidden');
}

function closeProfile() {
    const modal = document.getElementById('profileModal');
    if (modal) modal.classList.add('hidden');
}

function addTransaction(book, member, action, date) {
    transactions.push({ book, member, action, date });
    localStorage.setItem('transactions', JSON.stringify(transactions));
}

function addDueBook(book, member, dueDate) {
    const today = new Date();
    const due = new Date(dueDate);
    const status = due < today ? "Overdue" : "Pending";
    dueBooks.push({ book, member, dueDate, status });
    localStorage.setItem('dueBooks', JSON.stringify(dueBooks));
}

function removeDueBook(book, member) {
    dueBooks = dueBooks.filter(d => d.book !== book || d.member !== member);
    localStorage.setItem('dueBooks', JSON.stringify(dueBooks));
}

window.onload = () => {
    loadUserFromLocalStorage();
};