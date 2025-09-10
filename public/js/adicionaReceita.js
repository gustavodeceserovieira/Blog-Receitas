function addIngredient() {
    const container = document.getElementById('ingredients-container');
    const newInput = document.createElement('input');
    newInput.type = 'text';
    newInput.name = 'ingredientes';
    newInput.placeholder = 'Ingrediente adicional';
    newInput.className = 'w-full px-4 py-2 border-2 border-gray-200 rounded-xl focus:border-orange-400 focus:outline-none transition-colors';
    container.appendChild(newInput);
}