// all variables
let add_note_btn = document.querySelector(".add_note");

    add_note_btn.addEventListener("click" , () => {
        Show_new_note();
    });

//get data from LS
let getfrom_LS = JSON.parse(localStorage.getItem("notes")); //parse it to get array of data
    console.log(getfrom_LS);
    if(getfrom_LS){
        getfrom_LS.forEach((item) => {
            Show_new_note(item);
        })
    }

// show new note once we click add_note_btn
function Show_new_note(item = ""){
    let new_note = document.createElement("div");
            new_note.innerHTML = `
            
            <section class="notes">
						
                <div class="tools">
                    <button type="button" class="edit" id="search"><i class="fas fa-edit"></i></button>
                    <button type="button" class="delete" id="search"><i class="fa fa-trash-alt"></i></button>
                </div>
                 
                <div class="main ${item ? "" : "hidden"}"> 
                    
                </div> 

                <textarea class="${item ? "hidden" : ""}"></textarea>

            </section>
            
            `;

            document.body.appendChild(new_note);

        //add all variables
        let edit_btn = new_note.querySelector(".edit");
        let delete_btn = new_note.querySelector(".delete");
        
        // toggling between the editable and non-editable (i.e main and textarea)
        let main = new_note.querySelector(".main");
        let text_area = new_note.querySelector("textarea");
            text_area.value = item;
            main.innerHTML = marked(item);  //mark for regular text too

            edit_btn.addEventListener("click" , () => {
                main.classList.toggle("hidden");
                new_note.querySelector(".tools").classList.toggle("tglcolor");  //red is denoted by the completed/marked notes.
                text_area.classList.toggle("hidden");
            });

            //add eventlistener to txtarea and make it marked - use (marked) library
            text_area.addEventListener("input" , (e) => { 
                let value = e.target.value;
                main.innerHTML = marked(value); //this is the SYNTAX for marked

                UpdateLS(); // keep in local storage, so on refreshing our data will not be missed
            });

            //delete the note
            delete_btn.addEventListener("click" , () => {
                new_note.remove();

                UpdateLS() // remove content from LS on deleting
            })

};

//Update ls
function UpdateLS(){
    let all_text_notes = document.querySelectorAll("textarea");

        let text_store = [] //store it in array

        all_text_notes.forEach((item) => {
            text_store.push(item.value);
        });

        localStorage.setItem("notes" , JSON.stringify(text_store)); //store or update in LS in string format
        console.log(localStorage);
}