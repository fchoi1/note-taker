const { notDeepEqual } = require('assert');
const fs = require('fs');
const path = require('path');

const createNote = function(noteObj, dbArray){
    if(noteObj.id){
        dbArray.forEach( (note, index, array) => {
            if(note.id === noteObj.id) array[index] = noteObj;
        });
    }else{
        // Get last id on list, assume it is the last entry!
        // Can't rely on array list length since we can delete notes!

        noteObj.id = dbArray.length == 0 ? "1" : String(parseInt(dbArray[dbArray.length-1].id) + 1);
        dbArray.push(noteObj)
    }

    fs.writeFileSync(path.join(__dirname, '../db/db.json'), JSON.stringify(dbArray, null, 2));
    return noteObj;
}

const deleteNote = function(noteId, dbArray){
    let deletedNote = {};
    dbArray = dbArray.filter( note => {
        if(note.id === noteId) deletedNote = note;
        return note.id !== noteId;
    });
    fs.writeFileSync(path.join(__dirname, '../db/db.json'), JSON.stringify(dbArray, null, 2));
    return deletedNote;

}

module.exports = {createNote, deleteNote};