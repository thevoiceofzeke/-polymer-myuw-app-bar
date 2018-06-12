const $_documentContainer = document.createElement('template');
$_documentContainer.setAttribute('style', 'display: none;');

$_documentContainer.innerHTML = `
<link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,600" rel="stylesheet">
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
`

document.head.appendChild($_documentContainer.content);