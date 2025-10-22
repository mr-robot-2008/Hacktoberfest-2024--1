<button id="neonBtn">CYBER CLICK</button>

<style>
  #neonBtn {
    background: transparent;
    color: #00ffff;
    border: 2px solid #00ffff;
    padding: 12px 30px;
    font-size: 18px;
    font-family: 'Orbitron', sans-serif;
    letter-spacing: 2px;
    border-radius: 8px;
    cursor: pointer;
    transition: 0.3s;
    box-shadow: 0 0 10px #00ffff;
  }
  #neonBtn:hover {
    color: #ff00ff;
    border-color: #ff00ff;
    box-shadow: 0 0 20px #ff00ff, 0 0 40px #00ffff;
    text-shadow: 0 0 10px #ff00ff;
  }
</style>

<script>
document.getElementById('neonBtn').addEventListener('click', () => {
  alert("💥 Cyber Click Activated!");
});
</script>
