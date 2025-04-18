// ===== فوائد الشوكولاتة  =====
function showBenefit() {
  const chocolateType = document.getElementById('chocolate-type');
  const benefitText = document.getElementById('chocolate-benefit-text');

  if (!chocolateType || !benefitText) return; // تأكد العناصر موجودة

  switch (chocolateType.value) {
    case 'dark':
      benefitText.innerHTML = 'Dark chocolate is rich in antioxidants that promote heart health and lower blood pressure.';
      break;
    case 'milk':
      benefitText.innerHTML = 'Milk chocolate contains nourishing benefits like calcium and protein, great for bone health!';
      break;
    case 'white':
      benefitText.innerHTML = 'White chocolate is delicious and rich in healthy fats that support brain function.';
      break;
    default:
      benefitText.innerHTML = 'Select a type of chocolate to learn its specific benefits!';
      break;
  }
}