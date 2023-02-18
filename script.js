document.addEventListener("DOMContentLoaded", () => {

        let div = document.createElement("div");
        div.style.textAlign = "center";
        let input = document.createElement("input");
        input.setAttribute("type", "text");
        input.setAttribute("id", "books");
    
        let button = document.createElement("button");
        button.setAttribute("type", "button");
        button.innerHTML = "Search";
    
        button.addEventListener("click", display);
    
        let bookname = document.createElement("div");
        bookname.setAttribute("id", "Name");
    
        let isbn = document.createElement("div");
        isbn.setAttribute("id", "Isbn");
    
        let noOfPages = document.createElement("div");
        noOfPages.setAttribute("id", "Pages");
   
        let author = document.createElement("div");
        author.setAttribute("id", "Author");
    
        let publisher = document.createElement("div");
        publisher.setAttribute("id", "Published_on");
    
        let releaseDate = document.createElement("div");
        releaseDate.setAttribute("id", "Released");
    
        let character1 = document.createElement("div");
        character1.setAttribute("id", "Character1");
        let character2 = document.createElement("div");
        character2.setAttribute("id", "Character2");
        let character3 = document.createElement("div");
        character3.setAttribute("id", "Character3");
        let character4 = document.createElement("div");
        character4.setAttribute("id", "Character4");
        let character5 = document.createElement("div");
        character5.setAttribute("id", "Character5");
    
        div.append(input, button, bookname, isbn, noOfPages, author, publisher, releaseDate, character1, character2, character3, character4, character5);
        div.classList.add("main");
        document.body.append(div);

        async function display() {
        
            let search = document.getElementById("books").value;
        
            let url = `https://anapioficeandfire.com/api/books/${search}`;
            
            if(search=="" || search>12) {
                bookname.innerHTML = "<h4>Enter number between 1 to 12</h4>"
                isbn.innerHTML = `<ol><li>1) Game of Thrones</li><li>2) A Clash of Kings</li><li>3) A Storm of Swords</li><li>4) The Hedge Knight</li><li>5) A Feast for Crows</li><li>6) The Sworn Sword</li><li>7) The Mystery Knight</li><li>8) A Dance with Dragons</li><li>9) The Princess and the Queen</li><li>10) The Rogue Prince</li><li>11) The World of Ice and Fire</li><li>12) A Knight of the Seven Kingdoms</li></ol>`
    
            }else{
                try {
                    let result = await fetch(url);
                    let response = await result.json();
                    bookname.innerHTML = `Book Name : ${response.name}`;
                    isbn.innerHTML = `ISBN : ${response.isbn}`;
                    noOfPages.innerHTML = `Number Of Pages : ${response.numberOfPages}`;
                    author.innerHTML = `Author : ${response.authors}`;
                    publisher.innerHTML = `Publisher : ${response.publisher}`;
                    releaseDate.innerHTML = `Released : ${(response.released).slice(0,10)}`;  //to display only relese date
                    character1.innerHTML = `Character 1 : ${response.characters[0]}`;
                    character2.innerHTML = `Character 2 : ${response.characters[1]}`;
                    character3.innerHTML = `Character 3 : ${response.characters[2]}`;
                    character4.innerHTML = `Character 4 : ${response.characters[3]}`;
                    character5.innerHTML = `Character 5 : ${response.characters[4]}`;
                }
                catch (error) {
                    console.log(error);
                }
    
            } 
        }
    }); 