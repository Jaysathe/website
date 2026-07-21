function toggleMenu(){
document.getElementById("menu").classList.toggle("active");
}




<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>BugX Solutions</title>

<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap" rel="stylesheet">

<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12"></script>
<script src="https://cdn.jsdelivr.net/npm/tsparticles@2/tsparticles.bundle.min.js"></script>

<style>
*{margin:0;padding:0;box-sizing:border-box;font-family:Poppins;}
body{background:#020617;color:white;overflow-x:hidden}

/* LOADER */
#loader{
position:fixed;width:100%;height:100%;
background:#020617;display:flex;
align-items:center;justify-content:center;
z-index:9999;color:#00f7ff;font-size:1.5rem;
}

/* LOGO */
.logo{height:50px}

/* PARTICLES */
#particles-js{position:fixed;width:100%;height:100%;z-index:-1}

/* NAV */
nav{
display:flex;justify-content:space-between;
padding:20px 60px;align-items:center;
}
nav ul{display:flex;gap:25px;list-style:none}

/* HERO */
.hero{
height:100vh;display:flex;
align-items:center;justify-content:space-between;
padding:0 80px;
flex-wrap:wrap;
}
.hero-text{max-width:500px}
.hero h1{font-size:3rem}
.typing{color:#00f7ff}
.hero p{color:#aaa;margin:20px 0}
.hero img{width:350px;max-width:100%}

/* BUTTON */
.btn{
padding:12px 25px;
border:2px solid #00f7ff;
background:transparent;color:#00f7ff;
border-radius:25px;cursor:pointer;
transition:.3s;
}
.btn:hover{
background:#00f7ff;color:black;
box-shadow:0 0 15px #00f7ff;
}

/* SECTION */
section{padding:80px;text-align:center}
h2{margin-bottom:40px}

/* CARDS */
.cards{
display:flex;justify-content:center;
gap:20px;flex-wrap:wrap;
}
.card{
background:#0f172a;padding:25px;
border-radius:10px;width:250px;
transition:.3s;
}
.card:hover{
transform:translateY(-10px);
box-shadow:0 0 15px #00f7ff;
}

/* ===== 🔥 UPGRADED REPORT CARDS ===== */
.report-desc{
max-width:800px;
margin:0 auto 50px;
color:#aaa;
line-height:1.6;
}

.report-grid{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
gap:25px;
max-width:1100px;
margin:auto;
}

/* STRONG CARD LOOK */
.report-card{
background:#0f172a;
padding:30px;
border-radius:15px;
transition:0.4s;
border:1px solid #1e293b;
box-shadow:0 10px 30px rgba(0,0,0,0.6);
position:relative;
overflow:hidden;
}

/* GLOW STRIP */
.report-card::after{
content:"";
position:absolute;
bottom:0;
left:0;
width:0%;
height:3px;
background:#00f7ff;
transition:0.4s;
}

.report-card:hover::after{
width:100%;
}

/* HOVER GLOW */
.report-card:hover{
transform:translateY(-12px) scale(1.03);
box-shadow:0 0 25px #00f7ff, 0 0 60px rgba(0,247,255,0.3);
border:1px solid #00f7ff;
}

/* ICON */
.report-card .icon{
font-size:40px;
margin-bottom:15px;
display:block;
color:#00f7ff;
}

/* TEXT */
.report-card h3{
margin-bottom:10px;
color:#00f7ff;
}
.report-card p{
color:#ccc;
font-size:14px;
}

/* CONTACT */
input, textarea{
width:300px;padding:10px;
margin:10px;border:none;border-radius:5px;
}

/* FOOTER */
footer{
text-align:center;padding:20px;color:#777;
}

/* MOBILE */
@media(max-width:768px){
.hero{flex-direction:column;text-align:center}
}
</style>
</head>

<body>

<div id="loader">Initializing System...</div>
<div id="particles-js"></div>

<!-- NAV -->
<nav>
<img src="images/logo.png" class="logo">
<ul>
<li>Home</li>
<li>Services</li>
<li>Contact</li>
</ul>
</nav>

<!-- HERO -->
<section class="hero">
<div class="hero-text">
<h1>We Secure <span class="typing"></span></h1>
<p>BugX Solutions – Protecting your digital world with advanced cybersecurity.</p>
<button class="btn">Get Started</button>
</div>
<img src="images/logo.png">
</section>

<!-- SERVICES -->
<section>
<h2>Our Services</h2>
<div class="cards">
<div class="card">Penetration Testing</div>
<div class="card">Web Security</div>
<div class="card">Cloud Security</div>
</div>
</section>

<!-- FINAL DELIVERABLE -->
<section>
<h2>Final Deliverable</h2>

<p class="report-desc">
We deliver in-depth cybersecurity reports including risk ratings, findings,
reproduction steps, and remediation strategies with strict QA validation.
</p>

<div class="report-grid">

<div class="report-card">
<div class="icon">⚠️</div>
<h3>Risk Assessment</h3>
<p>Severity levels for vulnerabilities.</p>
</div>

<div class="report-card">
<div class="icon">🧠</div>
<h3>Technical Findings</h3>
<p>Detailed vulnerability analysis.</p>
</div>

<div class="report-card">
<div class="icon">🔁</div>
<h3>Reproduction Steps</h3>
<p>Step-by-step exploit guide.</p>
</div>

<div class="report-card">
<div class="icon">🛠️</div>
<h3>Remediation</h3>
<p>Fix recommendations.</p>
</div>

<div class="report-card">
<div class="icon">📸</div>
<h3>Proof of Concept</h3>
<p>Exploit screenshots and payloads.</p>
</div>

<div class="report-card">
<div class="icon">📊</div>
<h3>Executive Summary</h3>
<p>High-level business insights.</p>
</div>

</div>
</section>

<!-- CONTACT -->
<section>
<h2>Contact Us</h2>
<input type="text" placeholder="Your Name"><br>
<input type="email" placeholder="Email"><br>
<textarea placeholder="Message"></textarea><br>
<button class="btn">Send</button>
</section>

<footer>
© 2026 BugX Solutions. All Rights Reserved.
</footer>

<script>
gsap.registerPlugin(ScrollTrigger);

window.onload=()=>{
gsap.to("#loader",{opacity:0,duration:1,
onComplete:()=>loader.style.display="none"});
};

new Typed(".typing",{
strings:["Web Apps","Networks","Cloud","APIs"],
typeSpeed:80,backSpeed:40,loop:true
});

tsParticles.load("particles-js",{
particles:{
number:{value:60},
color:{value:"#00f7ff"},
links:{enable:true,color:"#00f7ff"},
move:{enable:true,speed:2}
}
});

gsap.from("nav",{y:-50,opacity:0,duration:1});
gsap.from(".hero-text",{x:-100,opacity:0,duration:1});
gsap.from(".hero img",{scale:0.8,opacity:0,duration:1});

gsap.from(".card",{
scrollTrigger:".cards",
y:50,opacity:0,stagger:0.3
});

gsap.from(".report-card",{
scrollTrigger:".report-grid",
y:80,opacity:0,stagger:0.2,duration:1
});
</script>

</body>
</html>