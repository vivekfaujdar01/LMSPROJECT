let borrowedBooks = JSON.parse(localStorage.getItem('borrowedBooks')) || [];

function loadBorrowedBooks() {
    const borrowedList = document.getElementById('borrowedList');
    borrowedList.innerHTML = '';
    borrowedBooks.forEach(b => {
        const book = Object.values(books).flat().find(book => book.isbn === b.isbn);
        const fine = calculateFine(b.dueDate);
        borrowedList.innerHTML += `
            <tr>
                <td class="py-2">${b.memberId}</td>
                <td>${book ? book.title : 'Unknown'}</td>
                <td>${b.dueDate}</td>
                <td class="${fine > 0 ? 'text-red-600' : ''}">${fine > 0 ? `$${fine.toFixed(2)}` : 'None'}</td>
            </tr>
        `;
    });
}

function issueBook(event) {
    event.preventDefault();
    const memberId = document.getElementById('issueMemberId').value;
    const isbn = document.getElementById('issueIsbn').value;
    const dueDate = document.getElementById('dueDate').value;

    if (!members.some(m => m.id === memberId)) {
        alert("Member ID not found!");
        return;
    }

    const book = Object.values(books).flat().find(b => b.isbn === isbn);
    if (!book || !book.available) {
        alert("Book not found or already issued!");
        return;
    }

    book.available = false;
    borrowedBooks.push({ memberId, isbn, dueDate });
    localStorage.setItem('books', JSON.stringify(books));
    localStorage.setItem('borrowedBooks', JSON.stringify(borrowedBooks));
    addTransaction(book.title, memberId, "Issued", new Date().toISOString().split('T')[0]);
    addDueBook(book.title, memberId, dueDate);
    document.getElementById('issueForm').reset();
    loadBorrowedBooks();
    alert("Book issued successfully!");
}

function returnBook(event) {
    event.preventDefault();
    const memberId = document.getElementById('returnMemberId').value;
    const isbn = document.getElementById('returnIsbn').value;

    const borrowedIndex = borrowedBooks.findIndex(b => b.memberId === memberId && b.isbn === isbn);
    if (borrowedIndex === -1) {
        alert("No record of this book being borrowed by this member!");
        return;
    }

    const book = Object.values(books).flat().find(b => b.isbn === isbn);
    book.available = true;
    const fine = calculateFine(borrowedBooks[borrowedIndex].dueDate);

    if (user.username === memberId) {
        if (!user.readingHistory) user.readingHistory = [];
        user.readingHistory.push(book.title);
        localStorage.setItem('user', JSON.stringify(user));
    }

    borrowedBooks.splice(borrowedIndex, 1);
    localStorage.setItem('books', JSON.stringify(books));
    localStorage.setItem('borrowedBooks', JSON.stringify(borrowedBooks));
    addTransaction(book.title, memberId, "Returned", new Date().toISOString().split('T')[0]);
    removeDueBook(book.title, memberId);
    document.getElementById('returnForm').reset();
    loadBorrowedBooks();
    if (fine > 0) alert(`Book returned! Fine due: $${fine.toFixed(2)}`);
    else alert("Book returned successfully!");
}

function calculateFine(dueDate) {
    const due = new Date(dueDate);
    const today = new Date();
    const daysLate = Math.max(0, Math.floor((today - due) / (1000 * 60 * 60 * 24)));
    return daysLate * 0.50; // $0.50 per day late
}

window.addEventListener('load', () => {
    loadUserFromLocalStorage(); // From script.js
    loadBorrowedBooks();
});