document.getElementById("toggleTerms").onclick = () => {
  document.getElementById("termsFull").classList.toggle("hidden");
};

document.getElementById("acceptBtn").onclick = () => {
  window.location.href = "selection.html";
};

document.getElementById("declineBtn").onclick = () => {
  window.close();
};
