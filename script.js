
function getZodiacSignText(dateObj) {
  const month = dateObj.getMonth(); // 0 = January, 11 = December
  const day = dateObj.getDate();    // 1–31

  if ((month === 2 && day >= 21) || (month === 3 && day <= 19)) {
    return "♈ Aries (Baran)";
  } else if ((month === 3 && day >= 20) || (month === 4 && day <= 20)) {
    return "♉ Taurus (Byk)";
  } else if ((month === 4 && day >= 21) || (month === 5 && day <= 21)) {
    return "♊ Gemini (Bliźnięta)";
  } else if ((month === 5 && day >= 22) || (month === 6 && day <= 22)) {
    return "♋ Cancer (Rak)";
  } else if ((month === 6 && day >= 23) || (month === 7 && day <= 22)) {
    return "♌ Leo (Lew)";
  } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
    return "♍ Virgo (Panna)";
  } else if ((month === 8 && day >= 23) || (month === 9 && day <= 23)) {
    return "♎ Libra (Waga)";
  } else if ((month === 9 && day >= 24) || (month === 10 && day <= 21)) {
    return "♏ Scorpio (Skorpion)";
  } else if ((month === 10 && day >= 22) || (month === 11 && day <= 21)) {
    return "♐ Sagittarius (Strzelec)";
  } else if ((month === 11 && day >= 22) || (month === 0 && day <= 19)) {
    return "♑ Capricorn (Koziorożec)";
  } else if ((month === 0 && day >= 20) || (month === 1 && day <= 18)) {
    return "♒ Aquarius (Wodnik)";
  } else if ((month === 1 && day >= 19) || (month === 2 && day <= 20)) {
    return "♓ Pisces (Ryby)";
  } else {
    return "Nieznany znak zodiaku";
  }
}

function getZodiacSignImg(dateObj) {
  const month = dateObj.getMonth(); // 0 = January, 11 = December
  const day = dateObj.getDate();    // 1–31

  if ((month === 2 && day >= 21) || (month === 3 && day <= 19)) {
    return "aries";
  } else if ((month === 3 && day >= 20) || (month === 4 && day <= 20)) {
    return "taurus";
  } else if ((month === 4 && day >= 21) || (month === 5 && day <= 21)) {
    return "gemini";
  } else if ((month === 5 && day >= 22) || (month === 6 && day <= 22)) {
    return "cancer";
  } else if ((month === 6 && day >= 23) || (month === 7 && day <= 22)) {
    return "leo";
  } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
    return "virgo";
  } else if ((month === 8 && day >= 23) || (month === 9 && day <= 23)) {
    return "libra";
  } else if ((month === 9 && day >= 24) || (month === 10 && day <= 21)) {
    return "scorpio";
  } else if ((month === 10 && day >= 22) || (month === 11 && day <= 21)) {
    return "sagittarius";
  } else if ((month === 11 && day >= 22) || (month === 0 && day <= 19)) {
    return "capricorn";
  } else if ((month === 0 && day >= 20) || (month === 1 && day <= 18)) {
    return "aquarius";
  } else if ((month === 1 && day >= 19) || (month === 2 && day <= 20)) {
    return "pisces";
  } else {
    return "unknown";
  }
}



function showLoading() {
    document.getElementById('message').classList.add('hidden');
    document.getElementById('visual-rep').classList.add('hidden');
    document.getElementById('loading').classList.remove('hidden');
    document.getElementById('myButton').disabled = true;

    setTimeout(() => {
        document.getElementById('loading').classList.add('hidden');
        document.getElementById('myButton').disabled = false;

        const message =  document.getElementById('message');
        const visualRep =  document.getElementById('visual-rep');

        // Get month and day from select inputs:
        const monthSelect = document.getElementById('month');
        const daySelect = document.getElementById('day');

        const month = parseInt(monthSelect.value);
        const day = parseInt(daySelect.value);

        const testDate = new Date(2000, month, day);
        const isValidDate = testDate.getDate() === day && testDate.getMonth() === month;

        if (!isNaN(month) && !isNaN(day) && isValidDate) {
            // Create a Date with a fixed year (e.g., 2000) to avoid year issues
            const dateObj = new Date(2000, month, day);

            const formatted = dateObj.toLocaleDateString('pl-PL', {
            month: 'long',
            day: 'numeric'
            });

            const zodiacText = getZodiacSignText(dateObj);
            const zodiacImg = getZodiacSignImg(dateObj);

            visualRep.style.backgroundImage = `url('assets/sign-pics/${zodiacImg}.jpg')`;

            // Show new lines properly — use innerHTML or CSS white-space
            message.innerHTML = `Data: ${formatted}<br>Znak: ${zodiacText}`;
        } else {
            message.innerText = 'Nie wybrano poprawnej daty.';
            visualRep.style.backgroundImage = 'none';
        }

    message.classList.remove('hidden');
    visualRep.classList.remove('hidden');
    }, 1500);
}

