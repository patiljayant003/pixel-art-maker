for(var y = 0; y < 20; y++)
{
    var row = document.createElement("div");
    row.className='row';

    for(var i= 0; i < 20; i++)
    {

        const col = document.createElement("div");
        col.className = 'column';
        col.addEventListener('click',()=>{
            col.style.backgroundColor='red'
        });

        row.appendChild(col);


    }
    document.body.appendChild(row);

}

/*p_div.style.width = "500px";
p_div.style.height = "500px";

p_div.style.background = "white";
p_div.style.border= "groove";
p_div.style.color = "black";
p_div.display = "flex";
p_div.flexDirection= "column";*/






