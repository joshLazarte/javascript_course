class Book {
    constructor(title, author, isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

class UI {
   addBookToList(book) {
        const list = document.getElementById('book-list');
        //create tr
        const row = document.createElement('tr');
        //insert cols
        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="delete">X</a></td>
        `;
        list.appendChild(row);
   }
   
   showAlert(msg, className) {
       //create div
        const div = document.createElement('div');
        div.className =`alert ${className}`;
        //add text
        div.appendChild(document.createTextNode(msg));
        //get parent
        const container = document.querySelector('.container');
        const form = document.querySelector('#book-form');
        //insert alert
        container.insertBefore(div, form);
        //timeout after 3 sec
        setTimeout(function(){
            document.querySelector('.alert').remove();
        }, 3000);
   }
   
   deleteBook(target) {
       if(target.className === 'delete'){
            target.parentElement.parentElement.remove();
        }
   }
   
   clearFields() {
        document.getElementById('title').value = "";
        document.getElementById('author').value = "";
        document.getElementById('isbn').value = "";
   }
}

//local storage class
class Store{
    static getBooks(){
        let books;
        if(localStorage.getItem('books') === null){
            books = [];
        } else {
            books = JSON.parse(localStorage.getItem('books'));
        }
        return books;
    }
    
    static displayBooks(){
        const books = Store.getBooks();
        
        books.forEach(function(book){
            const ui = new UI;
            
            //add book to ui
            ui.addBookToList(book);
        });
    }
    
    static addBook(book){
        const books = Store.getBooks();
        books.push(book);
        
        localStorage.setItem('books', JSON.stringify(books));
    }
    
    static removeBook(isbn){
        const books = Store.getBooks();
        
        books.forEach(function(book, index){
            if(book.isbn === isbn){
                books.splice(index, 1);
            }
        });
        
        localStorage.setItem('books', JSON.stringify(books));
    }
}

//DOM load event
document.addEventListener('DOMContentLoaded', Store.displayBooks);

//Event Listener for add book
document.getElementById('book-form').addEventListener('submit', function(e){
    const title = document.getElementById('title').value,
          author = document.getElementById('author').value,
          isbn = document.getElementById('isbn').value;
    
    //Instantiate  a book      
    const book = new Book(title, author, isbn);      
    const ui = new UI();
    
    //validate
    if(title === '' || author === '' || isbn === ''){
        //Error alert
        ui.showAlert('Please Fill in all Fields', 'error');
    } else {
        ui.addBookToList(book);
        
        //add to local storage
        Store.addBook(book);
        
        ui.showAlert('Book Added', 'success');
        ui.clearFields();
    }
    
    e.preventDefault();
})

//Event listener for delete
document.getElementById('book-list').addEventListener('click', function(e){
    const ui = new UI();
    //delete book
    ui.deleteBook(e.target);
    
    //remove from local storage
    Store.removeBook(e.target.parentElement.previousElementSibling.textContent);
    
    //show msg
    ui.showAlert('Book Removed', 'success');
    
    e.preventDefault();
})