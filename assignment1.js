
function onHit() {
    var ele = document.createElement("p");
    document.body.appendChild(ele);
    ele.innerHTML = "hello world";
    ele.className = 'MyNote';
    console.log(ele.className);
}

var counter = 0;
function addSection() {
    counter++;
    var section = document.createElement("div");
    section.id = "section" + "-" + counter;
    section.className = "section";

    var sectionHeader = document.createElement("div");
    sectionHeader.id = "sectionHeader" + "-" + counter;
    sectionHeader.className = "sectionHeader";

    var sectionBody = document.createElement("div");
    sectionBody.id = "sectionBody" + "-" + counter;
    sectionBody.className = "sectionBody";

    var sectionName = document.createElement("input");
    sectionName.id = "sectionHeaderSectionName" + "-" + counter;
    sectionName.className = "sectionHeaderSectionName";
    sectionName.placeholder = "Section Name"

    var sectionAddNoteButton = document.createElement("button");
    sectionAddNoteButton.id = "sectionHeaderAddNoteButton" + "-" + counter;
    sectionAddNoteButton.className = "sectionHeaderAddNoteButton";
    sectionAddNoteButton.innerHTML = "Add Note";

    sectionAddNoteButton.onclick = addNewNote;

    sectionHeader.appendChild(sectionName);
    sectionHeader.appendChild(sectionAddNoteButton);

    section.appendChild(sectionHeader);
    section.appendChild(sectionBody);

    document.getElementById("sectionContainer").appendChild(section);


}

function addNewNote(e) {
    var suffix = e.target.id.split("-")[1];
    var sectionBody = document.getElementById("sectionBody-"+suffix);
    console.log(sectionBody.id);
    var newNote = document.createElement("textarea");
    newNote.className = "MyNote";
    sectionBody.appendChild(newNote);
}