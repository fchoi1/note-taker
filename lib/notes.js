const { notDeepEqual } = require('assert');
const fs = require('fs');
const path = require('path');

const createNote = function(noteObj, dbArray){

    if(!noteObj.id) {
        dbArray.forEach( (note, index) => {
            if(note.id === noteObj.id) this[index] = noteObj;
        });
        
    }else{
        noteObj.id = dbArray.length().toString();
        dbArray.push(noteObj)
    }
    fs.writeFileSync(path.join(__dirname, '../db/db.json'), JSON.stringify(dbArray, null, 2));
    return noteObj;
}

module.exports = createNote;