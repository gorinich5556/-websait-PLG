const da = new DynamicAdapt("max");  
da.init();

const docHeight = Math.max(
    document.body.scrollHeight,
    document.body.offsetHeight,
    document.body.clientHeight,
    document.documentElement.scrollHeight,
    document.documentElement.offsetHeight,
    document.documentElement.clientHeight,

)
console.log(docHeight);

const page = document.querySelector('.page')
page.style.height = (docHeight+500) + 'px'
console.log('Привет');
