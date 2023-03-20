window.addEventListener('load', solve);
 
function solve() {
    let inputGenre = document.getElementById('genre')
    let inputNameSong = document.getElementById('name')
    let inputAuthor = document.getElementById('author')
    let inputDate = document.getElementById('date')
    let btnAdd = document.getElementById('add-btn')
    let divAllHits = document.querySelector('#all-hits > div')
 
    let pTotalLikes = document.querySelector('#total-likes > div > p')
    let divSavedSongs = document.querySelector('#saved-hits > div')
   
    btnAdd.addEventListener('click', addSong)
 
    function addSong(e) {
        e.preventDefault()
        if (inputGenre.value == '' || inputNameSong.value == '' || inputAuthor.value == '' || inputDate == '') {
            return
        }
        let divHitsInfo = document.createElement('div')
        divHitsInfo.classList.add('hits-info')
 
        let img = document.createElement('img')
        img.src = './static/img/img.png'
 
        let h2Genre = document.createElement('h2')
        h2Genre.textContent = `Genre: ${inputGenre.value}`
        let h2Name = document.createElement('h2')
        h2Name.textContent = `Name: ${inputNameSong.value}`
        let h2Author = document.createElement('h2')
        h2Author.textContent = `Author: ${inputAuthor.value}`
        let h3Date = document.createElement('h3')
        h3Date.textContent = `Date: ${inputDate.value}`
 
        let btnSave = document.createElement('button')
        btnSave.classList.add('save-btn')
        btnSave.textContent = 'Save song'
        btnSave.addEventListener('click', saveSong)
 
        let btnLike = document.createElement('button')
        btnLike.textContent = 'Like song'
        btnLike.classList.add('like-btn')
        btnLike.addEventListener('click', likeSong)
 
        let btnDelete = document.createElement('button')
        btnDelete.classList.add('delete-btn')
        btnDelete.textContent = 'Delete'
        btnDelete.addEventListener('click', deleteSong)
 
        divHitsInfo.appendChild(img)
        divHitsInfo.appendChild(h2Genre)
        divHitsInfo.appendChild(h2Name)
        divHitsInfo.appendChild(h2Author)
        divHitsInfo.appendChild(h3Date)
        divHitsInfo.appendChild(btnSave)
        divHitsInfo.appendChild(btnLike)
        divHitsInfo.appendChild(btnDelete)
 
        divAllHits.appendChild(divHitsInfo)
 
        inputGenre.value = ''
        inputNameSong.value = ''
        inputAuthor.value = ''
        inputDate.value = ''
 
        function likeSong(e) {
            console.log(pTotalLikes.textContent);
            let likes = Number(pTotalLikes.textContent.slice(13))
            console.log(likes);
            likes++
            pTotalLikes.textContent = `Total Likes: ${likes}`
 
            e.target.disabled = true
        }
 
        function saveSong(e) {
            
            console.log(e.target.parentNode);
            let newDiv = e.target.parentNode
            console.log(newDiv.children[5]);
            newDiv.children[5].remove()
            newDiv.children[5].remove()
            console.log(newDiv.children[5]);
          
            let btnDelete1 = document.createElement('button')
            btnDelete1.classList.add('delete-btn')
            btnDelete1.textContent = 'Delete'
            btnDelete1.addEventListener('click', deleteSong)
 
            divSavedSongs.appendChild(divHitsInfo)
        }
 
        function deleteSong(e) {
            e.target.parentNode.remove()
        }
    }
}