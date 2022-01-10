const createReport = () => {
    const pathname = window.location.pathname.substring(1).split('/');
    const username = pathname[0];
    const repl = pathname[1];

    // Forgive me father for I have sinned
    let forks = document.querySelector('html > body > div > div > div> div > div > div > div > div > button > span');

    if (!forks) {
        forks = document.querySelector('html > body > reach-portal > div > div > div > div > div > div > div > div > div > button > span')
    }

    if (!username || !repl) {
        alert('Invalid repl link. Ensure the page you are currently on matches /@username/replname');
        return;
    }

    if (!forks) {
        alert('Document format changed. Contact moe#9999 on Discord.');
        return;
    }

    fetch(`https://replit.com/data/repls/${username}/${repl}`)
        .then((response) => response.json())
        .then((data) => {
            const id = data.id;

            const report = `[https://replit.com/${username}/${repl}], \`${id}\`, other_repls, reason, ${forks.innerHTML}`;
            
            navigator.clipboard.writeText(report).then(() => {
                alert('Report copied to your clipboard.');
            }).catch((err) => {
                console.log(err);
            })
            
        });

}

document.onkeydown = (e) => {
    if (e.key === 'Insert')
        createReport();
        
}