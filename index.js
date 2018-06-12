var colSelector = 0;
for(var y = 0; y < 50; y++)
{
    var row = document.createElement("div");
    row.className='row';

    for(var i= 0; i < 50; i++)
    {

        const col = document.createElement("div");
        col.className = 'column';
        col.addEventListener('click',()=>{
            col.style.backgroundColor=colSelector;
        });

        row.appendChild(col);


    }
    document.body.appendChild(row);

}

var parentDiv = document.createElement("div");
//cir.innerHTML="hh"
parentDiv.className = "parentDiv";
document.body.appendChild(parentDiv);

const colors = ['red','blue','green','Chocolate ','DarkGray ','DarkKhaki' ,'yellow','pink','black','purple','white','CornflowerBlue','BlanchedAlmond','BlueViolet',]
for(let c = 0 ; c < colors.length; c++){

    const cir = document.createElement("div");
    //cir.innerHTML="hh"
    cir.className = "cir_outer";
    cir.style.backgroundColor=colors[c];
    colSelector = colors[c];


        cir.addEventListener('click',()=>{
        console.log("****************" +colors[c])
            colSelector = colors[c];
    });

   /* for (var c2 = 0; c2 < 8; c2++)
    {
        const cir2 = document.createElement("div");
        cir2.className = "cir_inner";
        cir.appendChild(cir2);
        cir2.style.backgroundColor = colors[c2];
    }
    */

   parentDiv.appendChild(cir);

}


/*p_div.style.width = "500px";
p_div.style.height = "500px";

p_div.style.backgroundColor = "white";
p_div.style.border= "groove";
p_div.style.color = "black";
p_div.display = "flex";
p_div.flexDirection= "column";*/





































/*

let brush = red;
let colors = ['red','blue','Green',];
 const divApp = document.createElement("div");
 divApp.className = 'outer';
 document.body.appendChild(divApp);

 const divCanvas = document.createElement("div");
 divCanvas.className = 'inner';
 divApp.appendChild(divCanvas);


 for( let i=0;i<36;i++)
{
    const row =document.createElement("div");
    row.className ='row';
    for( let j=0;j<74;j++){
        let col = document.createElement("div");
        col.className ='column';
        col.addEventListener('click',() =>{

            col.style.backgroundColor = brush;
        });
        row.appendChild(col);
    }
divCanvas.appendChild(row);

}


const colorPallet = document.createElement("div");
colorPallet.className='pallet';
divApp.appendChild(colorPallet);

for(let c=0;c<colors.length;c++)
{

    let color = document.createElement("div");
    color.className = 'circle';
    color.style.backgroundColor = colors[c];
    color.addEventListener('click',() => {

        brush =colors[c];

    });
    colorPallet.appendChild(color);

}
*/