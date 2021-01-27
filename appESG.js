const containerDiv = document.getElementById('vizContainer');
const url_ESG_sheets = 'https://public.tableau.com/views/ESGSheets/TotalESGScore'



const options = {
    
    
    onFirstInteractive: function() {
        console.log("Hey, my dashboard is ready")
    }
}

function initViz() {
    let viz = new tableau.Viz(containerDiv, url_ESG_sheets, options)
}

document.addEventListener('DOMContentLoaded', initViz)