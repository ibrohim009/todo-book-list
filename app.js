window.addEventListener('DOMContentLoaded', ()=>{
    const title = document.querySelector('#title'),
    author = document.querySelector('#author'),
    year = document.querySelector('#year'),
    btn = document.querySelector('.btn'),
    bookList = document.querySelector('#book-list');
    h1 = document.querySelector('.h1');

    btn.addEventListener('click', (event)=>{
        event.preventDefault();


        //Basic valitition
        if(title.value == '' && author.value == '' && year.value == ''){
            // alert('use your head, do not enter information you!!!')

            setTimeout( ()=>{
                h1.textContent = 'Ma`lumot yo`q'
            },2000)

        }else{
            const newRow = document.createElement('tr')

            // Creating new title
            const newTitle = document.createElement('th')
            newTitle.innerHTML = title.value
            newRow.appendChild(newTitle)

            // Creating new author
            const newAuthor = document.createElement('th')
            newAuthor.innerHTML = author.value
            newRow.appendChild(newAuthor)


            //Creating new year
            const dataYear = document.createElement('th')
            dataYear.innerHTML = year.value
            newRow.appendChild(dataYear)


            // Displaying new UI
            bookList.appendChild(newRow)


            title.value = ''
            author.value = ''
            year.value = ''
        }

    })
})