const faqItems = document.querySelectorAll('.faq-item')

faqItems.forEach(item =>{
    const summary = item.querySelector('.faq-summary')
    const description = item.querySelector('.faq-description')
    const icon = item.querySelector('.arrow-container img')

    summary.addEventListener('click', () => {

        if (description.classList.contains('active')) {
            description.classList.remove('active');
            icon.src = "./assets/images/icon-plus.svg";
        } else {
            faqItems.forEach(otherItem => {
                const otherDescription = otherItem.querySelector('.faq-description');
                const otherIcon = otherItem.querySelector('.arrow-container img');
                otherDescription.classList.remove('active');
                otherIcon.src = "./assets/images/icon-plus.svg";
            });

            description.classList.add('active');
            icon.src = "./assets/images/icon-minus.svg";
        }
    });
});