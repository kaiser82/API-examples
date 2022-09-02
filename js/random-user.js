const loadUsers = () => {
    fetch('https://randomuser.me/api/?results=50')
        .then(res => res.json())
        .then(data => displayUsers(data.results))
}

const displayUsers = users => {
    const userContainer = document.getElementById('users-container');

    for (const user of users) {
        console.log(user)
        const userDiv = document.createElement('div');
        userDiv.classList.add('user');
        userDiv.innerHTML = `
        <h3>User Name: ${user.name.first} ${user.name.last}</h3>
        <p>Email: ${user.email}</p>
        <p>User location: <span>city-${user.location.city}, </span><span>Country-${user.location.country}.</span></p>
        
        `
        userContainer.appendChild(userDiv);
    }
}

loadUsers();