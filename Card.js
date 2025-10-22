<div class="holo-card">
  <h3>Cyber ID</h3>
  <p>#SP-2049</p>
</div>

<style>
.holo-card {
  width: 250px;
  height: 140px;
  border-radius: 15px;
  background: linear-gradient(135deg, #00ffff, #ff00ff);
  color: #fff;
  font-family: 'Orbitron', sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 30px #00ffff;
  transition: all 0.4s;
}
.holo-card:hover {
  transform: rotateY(15deg) rotateX(10deg) scale(1.05);
  box-shadow: 0 0 40px #ff00ff, 0 0 80px #00ffff;
}
</style>

<script>
document.querySelector('.holo-card').addEventListener('click', () => {
  alert("🪩 Access Granted — Welcome, Silent Programmer!");
});
</script>
