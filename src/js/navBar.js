  const modal = document.getElementById("myModal");
  const btn = document.getElementById("navBtn");
  const span = document.getElementsByClassName("close")[0];

  const openModal = function () {
    modal.style.display = "block";
  };

  const closeModal = function () {
    modal.style.display = "none";
  };

  btn.onclick = openModal;
  span.onclick = closeModal;

  document.addEventListener("keydown", function (event) {
    if ((event.ctrlKey || event.metaKey) && event.key === "k") {
      openModal();
    }
  });

  window.onclick = function (event) {
    if (event.target == modal) {
      closeModal();
    }
  };