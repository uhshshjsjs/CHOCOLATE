function toggleDetails(btn) {
    const details = btn.nextElementSibling;
    if (details.style.display === "block") {
        details.style.display = "none";
        btn.textContent = "Show Recipe";
    } else {
        details.style.display = "block";
        btn.textContent = "Hide Recipe";
    }
}