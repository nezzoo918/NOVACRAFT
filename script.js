document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("requestForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      document.getElementById("msg").innerText = "✅ تم إرسال طلبك بنجاح! سنتواصل معك قريباً.";
      form.reset();
    });
  }
});
