function verif1() {
    
    const weightInput = document.getElementById('weight');
    const heightInput = document.getElementById('height');
    const weight = (weightInput.value);
    const heightCm = (heightInput.value);

   
    if (isNaN(weight) || weight <= 0) {
        alert('Poids > 0.');
        weightInput.focus();
        return;
    }

    if (isNaN(heightCm) || heightCm <= 0) {
        alert('Hauteur > 0.');
        heightInput.focus();
        return;
    }


    const heightM = heightCm / 100;
    const bmi = (weight / (heightM * heightM)).toFixed(2);

    
    let category = '';
    if (bmi < 18.5) {
        category = 'Insuffisance pondérale';
    } else if (bmi < 24.9) {
        category = 'Poids normal';
    } else if (bmi < 29.9) {
        category = 'Surpoids';
    } else {
        category = 'Obésité';
    }

   
    alert(`votre imc est: ${bmi}\nCategorie: ${category}`);
    document.getElementById('bmi-category').textContent = `Categorie: ${category}`;
}
