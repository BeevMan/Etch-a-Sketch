let divGrid = document.getElementById( "grid" );

function createGrid( squares ) {
    let rowOfSquares = document.createElement( "div" );
    rowOfSquares.setAttribute( "class", "rows" );

    for ( let i=0; i<squares; i++ ) {
        let square = document.createElement( "div" );
        square.setAttribute( "class", "squares" );
        rowOfSquares.appendChild( square )
    }

    for ( let i=0; i<squares; i++ ) {
        divGrid.appendChild( rowOfSquares.cloneNode( true ) )
    }
}

createGrid(16);
console.log(divGrid);