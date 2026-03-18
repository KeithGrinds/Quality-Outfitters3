:root {
  --bg: #0d0d0d;
  --text: #eee;
  --accent: #00f0ff;
}

*{margin:0;padding:0;box-sizing:border-box;font-family:Arial,sans-serif;}
body{background:var(--bg);color:var(--text);overflow-x:hidden;}

/* NAVBAR */
nav{display:flex;justify-content:space-between;padding:20px 5%;}
nav ul{display:flex;gap:20px;list-style:none;}

/* HERO */
.hero{height:80vh;display:flex;flex-direction:column;justify-content:center;align-items:center;gap:15px;text-align:center;}
.hero h2{font-size:3rem;animation:glowText 3s infinite alternate;}
.hero p{opacity:0.7;}

/* ANIMATION */
@keyframes glowText{
  0%{text-shadow:0 0 5px #00f0ff;}
  50%{text-shadow:0 0 15px #00f0ff;}
  100%{text-shadow:0 0 25px #00f0ff;}
}

/* PRODUCTS */
.products{display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:20px;padding:5%;}
.card{background:#111;padding:20px;border-radius:10px;transition:transform 0.3s, box-shadow 0.3s;}
.card:hover{transform:translateY(-10px);box-shadow:0 0 15px var(--accent);}
.card img{width:100%;border-radius:10px;}
.card button{margin-top:10px;padding:10px;width:100%;border:none;background:var(--accent);cursor:pointer;transition:0.3s;}
.card button:hover{background:#00c0cc;}

/* FLOATING BUTTON */
.floating-btn{position:fixed;bottom:20px;right:20px;background:var(--accent);padding:15px;border-radius:50%;box-shadow:0 0 20px var(--accent);animation:float 3s infinite;cursor:pointer;}
@keyframes float{0%,100%{transform:translateY(0);}50%{transform:translateY(-10px);}}

/* CURSOR */
.cursor{position:fixed;width:20px;height:20px;background:var(--accent);border-radius:50%;pointer-events:none;mix-blend-mode:difference;}

/* RESPONSIVE */
@media(max-width:768px){.hero h2{font-size:2rem;}nav ul{display:none;}}
