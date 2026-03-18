const products=[
  {name:"Black Hoodie",price:40,img:"https://via.placeholder.com/300"},
  {name:"White Tee",price:25,img:"https://via.placeholder.com/300"},
  {name:"Minimal Jacket",price:80,img:"https://via.placeholder.com/300"}
];

const container=document.getElementById("products");

products.forEach(p=>{
  const card=document.createElement("div");
  card.classList.add("card");
  card.innerHTML=`<img src="${p.img}"/><h3>${p.name}</h3><p>$${p.price}</p><button>Add to Cart</button>`;
  container.appendChild(card);
});

// CURSOR
const cursor=document.querySelector(".cursor");
document.addEventListener("mousemove",(e)=>{cursor.style.transform=`translate(${e.clientX}px,${e.clientY}px)`;});

// BUTTON FEEDBACK
document.addEventListener("click",(e)=>{
  if(e.target.tagName==="BUTTON"){
    e.target.innerText="Added ✓";
    setTimeout(()=>e.target.innerText="Add to Cart",1500);
  }
});
