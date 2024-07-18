// Obtiene el elemento del input de contraseña por su ID
let passwordInput = document.getElementById("password");

// Obtiene todos los elementos con la clase "password-strength"
let passwordStrengths = document.querySelectorAll(".password-strength");

// Añade un evento 'input' al campo de entrada de contraseña para que se ejecute una función cada vez que el usuario escriba algo
passwordInput.addEventListener("input", function (event) {
  // Obtiene el valor actual del input de contraseña
  let password = event.target.value;
  
  // Calcula la fuerza de la contraseña, limitándola a un máximo de 12
  let strength = Math.min(password.length, 12);
  
  // Calcula el valor del grado en base a la fuerza de la contraseña (30 grados por unidad de fuerza)
  let degree = strength * 30;
  
  // Determina el color del gradiente según la fuerza de la contraseña
  let gradientColor =
    strength <= 4 ? "#ff2c1c" : strength <= 8 ? "#ff9800" : "#12ff12";
    
  // Determina el texto que describe la fuerza de la contraseña
  let strengthText =
    strength <= 4 ? "Weak" : strength <= 8 ? "Medium" : "Strong";
    
  // Para cada elemento que tiene la clase "password-strength"
  passwordStrengths.forEach((passwordStrength) => {
    // Establece el fondo del elemento como un gradiente cónico basado en el color y el grado calculados
    passwordStrength.style.background = `conic-gradient(${gradientColor} ${degree}deg, #1115 ${degree}deg)`;
  });
  
  // Actualiza el contenido de texto del elemento de texto de fuerza de contraseña
  text.textContent = strengthText;
  
  // Cambia el color del texto del elemento de texto de fuerza de contraseña al color correspondiente a la fuerza
  text.style.color = gradientColor;
});
