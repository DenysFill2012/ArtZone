document.getElementById('order-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Отримання значень з форми
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const artType = document.getElementById('art-type').value;
    const details = document.getElementById('details').value;
  
    // Валідація (вже здійснена за допомогою HTML атрибутів)
    if (!name || !email || !details) {
      document.getElementById('response-message').textContent = 'Будь ласка, заповніть усі поля!';
      return;
    }
  
    // Виведення повідомлення про успішне замовлення
    document.getElementById('response-message').textContent = `Дякуємо, ${name}! Ваше замовлення на арт "${artType}" було прийняте. Ми зв'яжемося з вами на ${email}.`;
  
    // Очистка форми після відправки
    document.getElementById('order-form').reset();
  });
  