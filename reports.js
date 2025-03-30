function loadReports() {
    if (!transactions || transactions.length === 0) {
        console.log("No transactions found, using fallback data for circulation trends.");
        transactions = [
            { book: "Game of Thrones", member: "M001", action: "Issued", date: "2025-01-15" },
            { book: "The Way of Kings", member: "M002", action: "Returned", date: "2025-02-20" },
            { book: "Dune", member: "M001", action: "Issued", date: "2025-03-10" }
        ];
    }

    const monthlyCirculation = transactions.reduce((acc, t) => {
        const month = new Date(t.date).toLocaleString('default', { month: 'short', year: 'numeric' });
        acc[month] = acc[month] || { issued: 0, returned: 0 };
        if (t.action === 'Issued') acc[month].issued++;
        else if (t.action === 'Returned') acc[month].returned++;
        return acc;
    }, {});

    const circulationData = {
        labels: Object.keys(monthlyCirculation).length ? Object.keys(monthlyCirculation) : ['Jan 2025', 'Feb 2025', 'Mar 2025'],
        datasets: [
            {
                label: 'Books Issued',
                data: Object.keys(monthlyCirculation).length ? Object.values(monthlyCirculation).map(m => m.issued) : [1, 2, 3],
                backgroundColor: 'rgba(59, 130, 246, 0.5)',
                borderColor: '#3b82f6',
                borderWidth: 1
            },
            {
                label: 'Books Returned',
                data: Object.keys(monthlyCirculation).length ? Object.values(monthlyCirculation).map(m => m.returned) : [0, 1, 2],
                backgroundColor: 'rgba(139, 92, 246, 0.5)',
                borderColor: '#8b5cf6',
                borderWidth: 1
            }
        ]
    };

    const circulationChart = document.getElementById('circulationChart');
    if (circulationChart) {
        new Chart(circulationChart, {
            type: 'bar',
            data: circulationData,
            options: { 
                scales: { 
                    y: { beginAtZero: true, title: { display: true, text: 'Number of Books' } },
                    x: { title: { display: true, text: 'Month' } }
                },
                plugins: {
                    legend: { display: true },
                    title: { display: true, text: 'Book Circulation Trends' }
                }
            }
        });
    } else {
        console.error("circulationChart canvas not found in DOM.");
    }

    const bookCounts = borrowedBooks.reduce((acc, b) => {
        const book = Object.values(books).flat().find(book => book.isbn === b.isbn);
        acc[book?.title || 'Unknown'] = (acc[book?.title || 'Unknown'] || 0) + 1;
        return acc;
    }, {});
    const popularBooksData = {
        labels: Object.keys(bookCounts),
        datasets: [{
            data: Object.values(bookCounts),
            backgroundColor: ['#3b82f6', '#8b5cf6', '#10b981', '#f59e0b'],
        }]
    };
    new Chart(document.getElementById('popularBooksChart'), {
        type: 'pie',
        data: popularBooksData,
        options: {
            plugins: {
                legend: { position: 'right' },
                title: { display: true, text: 'Most Borrowed Books' }
            }
        }
    });

    const activeMembers = members.filter(m => borrowedBooks.some(b => b.memberId === m.id));
    const activeMembersDiv = document.getElementById('activeMembers');
    activeMembersDiv.innerHTML = activeMembers.length ? 
        activeMembers.map(m => `<p>${m.name} (${m.id})</p>`).join('') : 
        '<p>No active members yet.</p>';

    // New: Category Popularity (Bar Chart)
    const categoryCounts = borrowedBooks.reduce((acc, b) => {
        const book = Object.values(books).flat().find(book => book.isbn === b.isbn);
        const category = book?.category || 'Unknown';
        acc[category] = (acc[category] || 0) + 1;
        return acc;
    }, {});
    const categoryData = {
        labels: Object.keys(categoryCounts),
        datasets: [{
            label: 'Books Borrowed',
            data: Object.values(categoryCounts),
            backgroundColor: 'rgba(16, 185, 129, 0.5)',
            borderColor: '#10b981',
            borderWidth: 1
        }]
    };
    const categoryChart = document.getElementById('categoryChart');
    if (categoryChart) {
        new Chart(categoryChart, {
            type: 'bar',
            data: categoryData,
            options: {
                scales: {
                    y: { beginAtZero: true, title: { display: true, text: 'Number of Books Borrowed' } },
                    x: { title: { display: true, text: 'Category' } }
                },
                plugins: {
                    legend: { display: true },
                    title: { display: true, text: 'Category Popularity' }
                }
            }
        });
    } else {
        console.error("categoryChart canvas not found in DOM.");
    }
}

window.addEventListener('load', () => {
    loadUserFromLocalStorage();
    loadReports();
});