function findUser(users, targetId) {
    for (let i = 0; i < users.length; i++) {
        if (users[i].id === targetId) {
            return users[i];
        }
    }
    return null;
}

 
function findDuplicateEmails(users) {
    let duplicates = [];
    for (let i = 0; i < users.length; i++) {
        for (let j = i + 1; j < users.length; j++) {
            if (users[i].email === users[j].email) {
                duplicates.push(users[i].email);
            }
        }
    }
    return duplicates;
}
 
function generateForm(fields) {
    const form = document.createElement("form");
    for (let i = 0; i < fields.length; i++) {
        const label = document.createElement("label");
        label.textContent = fields[i];
        
        const input = document.createElement("input");
        input.name = fields[i].toLowerCase();
        
        form.appendChild(label);
        form.appendChild(input);
    }
    document.body.appendChild(form);
}