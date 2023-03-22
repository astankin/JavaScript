function solve(arr) {
    let messages = [];
    for (const data of arr.slice(0, -1)) {
        let command = data.split(' ')[0];
        let message = data.split(' ')[1];
        if (command === 'Chat') {
            messages.push(message);
        } else if (command === "Delete") {
            let idx = messages.indexOf(message);
            if (idx !== -1){
                messages.splice(idx, 1);
            }
        } else if (command === 'Edit') {
            let newMessage = data.split(' ')[2];
            let idx = messages.indexOf(message);
            if (idx !== -1) {
                messages.splice(idx, 1, newMessage);
            }
        } else if (command === 'Pin') {
            let idx = messages.indexOf(message);
            if (idx !== -1) {
                messages.splice(idx, 1)
                messages.push(message);
            }

        } else if (command === 'Spam') {
            let messagesToAdd = data.split(' ').slice(1);
            messages.push(...messagesToAdd);
        }
    }
    console.log(messages.join('\n'));
}

solve(["Chat Hello",
    "Chat darling",
    "Edit darling Darling",
    "Spam how are you",
    "Delete Darling",
    "end"]);

solve(["Chat Hello",
    "Delete John",
    "Pin Hi",
    "end"])

solve(["Chat John",
"Spam Let's go to the zoo",
"Edit zoo cinema",
"Chat tonight",
"Pin John",
"end"])


