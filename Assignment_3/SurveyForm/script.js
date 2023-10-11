    const countrySelect = document.getElementById('country');
    const url = 'https://countriesnow.space/api/v0.1/countries';

    fetch(url)
    .then(response => response.json())
    .then(data => {
        data.data.forEach(country => {
        const option = document.createElement('option');
        option.value = country.country;
        option.text = country.country;
        countrySelect.appendChild(option);
        });
    })
    .catch(error => console.error(error));

    function submitForm(event) {
        event.preventDefault();

        const firstName = document.getElementById('first-name').value;
        const lastName = document.getElementById('last-name').value;
        const dob = document.getElementById('dob').value;
        const country = document.getElementById('country').value;
        const gender = document.querySelector('input[name="gender"]:checked');
        const profession = document.getElementById('profession').value;
        const email = document.getElementById('email').value;
        const mobile = document.getElementById('mobile').value;

        if (!firstName || !lastName || !dob || !country || !gender || !profession || !email || !mobile) {
            alert('Please fill in all fields.');
            return;
        }

        const genderValue = gender.value;

        const result = `First Name: ${firstName}\nLast Name: ${lastName}\nDate of Birth: ${dob}\nCountry: ${country}\nGender: ${genderValue}\nProfession: ${profession}\nEmail: ${email}\nMobile Number: ${mobile}`;

        const confirmed = confirm(`Are you sure you want to submit the following details?\n\n${result}`);

        if (confirmed) {
            document.getElementById('popup').style.display = 'block';
        }
    }

    document.querySelector('.close').addEventListener('click', function() {
        document.getElementById('popup').style.display = 'none';
        document.getElementById('survey-form').reset();
    });