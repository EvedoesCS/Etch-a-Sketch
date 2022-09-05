function gridLoad(resolution) 
{
    const gridContainer = document.getElementById('grid-container');

    for (let i = 1; i <= resolution; i++) //Create a row
    {
        const row = document.createElement('div');

        for(let j = 1; j <=resolution; j++) //Create squares per row
        {
            const pixel = document.createElement('div');
            pixel.classList.add('pixel-empty');
            row.appendChild(pixel)
        }
        gridContainer.appendChild(row);
    }
}
gridLoad(16);

const grid = document.getElementById('grid-container');
for (const row of grid.children) 
{
    for(const pixel of row.children)
    {
        pixel.addEventListener('mouseover', (e) => {
            e.target.classList.add('pixel-filled');
        })
    }
}


