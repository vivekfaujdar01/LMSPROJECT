let members = JSON.parse(localStorage.getItem('members')) || [
    { id: "M001", name: "John Doe", email: "john@example.com", role: "student", expiry: "2025-12-31" },
    { id: "M002", name: "Jane Smith", email: "jane@example.com", role: "librarian", expiry: "2026-06-30" },
];

function loadMembers() {
    const memberList = document.getElementById('memberList');
    memberList.innerHTML = '';
    members.forEach(member => {
        memberList.innerHTML += `
            <tr>
                <td class="py-2">${member.id}</td>
                <td>${member.name}</td>
                <td>${member.email}</td>
                <td>${member.role}</td>
                <td>${member.expiry}</td>
                <td>
                    <button class="text-blue-600 hover:underline" onclick="editMember('${member.id}')">Edit</button>
                    <button class="text-red-600 hover:underline ml-2" onclick="deleteMember('${member.id}')">Delete</button>
                </td>
            </tr>
        `;
    });
}

function addMember(event) {
    event.preventDefault();
    const id = document.getElementById('memberId').value;
    const name = document.getElementById('memberName').value;
    const email = document.getElementById('memberEmail').value;
    const role = document.getElementById('memberRole').value;
    const expiry = document.getElementById('memberExpiry').value;

    if (members.some(m => m.id === id)) {
        alert("Member ID already exists!");
        return;
    }

    members.push({ id, name, email, role, expiry });
    localStorage.setItem('members', JSON.stringify(members));
    document.getElementById('addMemberForm').reset();
    loadMembers();
}

function editMember(id) {
    const member = members.find(m => m.id === id);
    if (member) {
        const newName = prompt("Edit Name:", member.name);
        if (newName) {
            member.name = newName;
            member.email = prompt("Edit Email:", member.email) || member.email;
            member.role = prompt("Edit Role (student/staff/librarian):", member.role) || member.role;
            member.expiry = prompt("Edit Expiry (YYYY-MM-DD):", member.expiry) || member.expiry;
            localStorage.setItem('members', JSON.stringify(members));
            loadMembers();
        }
    }
}

function deleteMember(id) {
    if (confirm("Are you sure you want to delete this member?")) {
        members = members.filter(m => m.id !== id);
        localStorage.setItem('members', JSON.stringify(members));
        loadMembers();
    }
}

window.addEventListener('load', () => {
    loadUserFromLocalStorage(); // From script.js
    loadMembers();
});