//Generates grid taking desired length x width as arg
function gridLoad(resolution) 
{
    //Selects grid-container element from page
    const gridContainer = document.getElementById('grid-container');

    for (let i = 1; i <= resolution; i++) //For desired # of rows
    {
        const row = document.createElement('div'); //Create new row

        for(let j = 1; j <=resolution; j++) //For number of pixels per row
        {
            const pixel = document.createElement('div'); //Create new pixel
            pixel.classList.add('pixel-empty'); //initialize it with empty box class
            row.appendChild(pixel) //Add it to the current row[i]
        }
        gridContainer.appendChild(row); //Append the row of pixels to the grid container
    }
}

function resize()
{
    var size = window.prompt("Grid size: ");
    gridLoad(size)
}

resize();

const grid = document.getElementById('grid-container'); //Selects grid-container 
for (const row of grid.children) //For each row in the container 
{
    for(const pixel of row.children) //For each pixel in the row
    {
        //Add a mouseover event listener
        pixel.addEventListener('mouseover', (e) => {
            e.target.classList.add('pixel-filled'); //Fill pixels in via flled-pixel
            //css class on 'mouseover' event.
        })
    }
}


