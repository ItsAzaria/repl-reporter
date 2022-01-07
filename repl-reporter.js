const createReport = () => {
    console.log('creating report');
}

document.onkeydown = (e) => {
    if (e.key === 'Insert')
        createReport();
        
}