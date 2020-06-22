const fs= require('fs');

let toDoList = [];

const saveDB = () => {
    let data = JSON.stringify(toDoList, null, 3);
    console.log('guardamos...');
    fs.writeFile(`db/data.json`, data, (err) => {
        if (err) throw new Error('No se pudo guardar');
        console.log(`El archivo data.json ha sido guardado correctamente`);
    });
}

const readDB = () => {
    try {
        toDoList = require('../db/data.json');
    } catch (error) {
        toDoList = [];
    }
    
}

const crear= (desc) =>{
    readDB();
    let toDo ={
        descripcion : desc,
        completado: false
    };

    toDoList.push(toDo);
    saveDB();

    return toDo;
}

const getToDoList= () =>{
    readDB();

    return toDoList;
}

const  updateToDo = (descripcion, completado = true) => {
    readDB();

    let index = toDoList.findIndex( task => task.descripcion === descripcion );

    if (index>= 0 ){
        toDoList[index]. completado = completado;
        saveDB();
        return true;
    }else{
        return false;
    }

}

const  deleteToDo = (descripcion) => {
    readDB();

    let index = toDoList.findIndex( task => task.descripcion === descripcion );

    if (index>= 0 ){
        toDoList.splice(index, 1);
        saveDB();
        return true;
    }else{
        return false;
    }

}

module.exports = {
    crear,
    getToDoList,
    updateToDo,
    deleteToDo
}