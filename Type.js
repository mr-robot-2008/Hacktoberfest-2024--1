<h2 id="typewriter"></h2>

<script>
const text = "Welcome to the Cyber Realm...";
let i = 0;

function typeEffect() {
  if (i < text.length) {
    document.getElementById("typewriter").textContent += text.charAt(i);
    i++;
    setTimeout(typeEffect, 100);
  }
}
typeEffect();
</script>

<style>
#typewriter {
  color: #00ffff;
  font-family: 'Orbitron', sans-serif;
  font-size: 24px;
  text-shadow: 0 0 10px #00ffff;
}
</style>
