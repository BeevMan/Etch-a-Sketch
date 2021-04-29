function createGrid() {
    const squares = document.getElementById( "size" ).value;
    document.getElementById( "size-display" ).innerText = "Grid Size = " + squares + "x" + squares;
    const totalSquares = squares * squares;
    let divGrid = document.getElementById( "grid" );
    while( divGrid.firstChild ){
        divGrid.removeChild( divGrid.firstChild );
    }

    const square = document.createElement( "div" );
    square.setAttribute( "class", "squares" );
    // I can't seem to add the event listener until after it appends the cloneNodes
        // cloning a node can not clone event listeners even those set on element properties, i.e onclick

    for ( let i=0; i<totalSquares; i++ ) {
        divGrid.appendChild( square.cloneNode( true ) );
    }
    divGrid.style.gridTemplateColumns = "repeat( " + squares + ", 1fr )";
    //divGrid.style.gridtemplaterows = "auto"; // seems to default to this anyway
    addListeners();
}


function addListeners() {
    let gridOfSquares = document.getElementsByClassName( "squares" );
    for ( let i=0; i<gridOfSquares.length ; i++ ) {
        gridOfSquares[i].addEventListener( "mouseenter", addColor )
    }
}


function addColor( e ) {
    const squareColor = window.getComputedStyle( e.target ).getPropertyValue( "background-color" );
    const rgbDigits = squareColor.match( /\d+/g);
    console.log( rgbDigits );
    let rgbPercents = [];
    //NEED TO CONVERT TO PERCENTS AND ROUND TO THE NEAREST INTEGER AND ADD 10% UNTIL WHITE
    for ( let i=0; i<rgbDigits.length; i++ ) {
        rgbPercents.push( Math.round( ( rgbDigits[i]/255 * 100 ) + 10 ) ) ;
    }
    console.log( rgbPercents )

    if ( squareColor !== "rgb(255, 255, 255)" ) {
        e.target.style.backgroundColor = "rgb( " + rgbPercents[0] + "%, " + rgbPercents[1] + "%, " + rgbPercents[2] + "% )";
    }
    /* black to white
    if ( e.target.style.backgroundColor == "black" || e.target.style.backgroundColor == "" ) {
        e.target.style.backgroundColor = "white";
    }
    */
}


createGrid();