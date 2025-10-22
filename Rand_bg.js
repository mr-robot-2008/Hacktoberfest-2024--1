<button id="bgBtn">Change Background</button>

<script>
document.getElementById('bgBtn').style.padding = '10px 25px';

document.getElementById('bgBtn').onclick = function() {
  const color = `hsl(${Math.random() * 360}, 100%, 50%)`;
  document.body.style.background = color;
};
</script>
