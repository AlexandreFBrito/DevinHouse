function drag_handler(ev) {
    console.log("Arquivo inserido");
    ev.preventDefault();

  if (ev.dataTransfer.items) {
    //Acessando os arquivos
    for (var i = 0; i < ev.dataTransfer.items.length; i++) {
      // Se os itens soltos não forem arquivos, rejeita.
      if (ev.dataTransfer.items[i].kind === 'file') {
        var file = ev.dataTransfer.items[i].getAsFile();
        console.log('... file[' + i + '].name = ' + file.name);
      }
    }
  } else {
    // Use a interface DataTransfer para acessar o (s) arquivo (s)
    for (var i = 0; i < ev.dataTransfer.files.length; i++) {
      console.log('... file[' + i + '].name = ' + ev.dataTransfer.files[i].name);
    }
  }    
}

function dragover_handler(ev) {
    console.log("Solte o arquivo");
    ev.preventDefault();
   }