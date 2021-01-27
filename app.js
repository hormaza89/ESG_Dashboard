console.log("I am here")

const containerDiv = document.getElementById('vizContainer');
const url_tableau_sheets = 'https://public.tableau.com/views/SP500IndexMeasuresSheets/Profitability'



const options = {
    
    
    height: 500,
    width: 800,
    onFirstInteractive: function() {
        console.log("Hey, my dashboard is ready")
    }
}

function initViz() {
    let viz = new tableau.Viz(containerDiv, url_tableau_sheets, options)
}

document.addEventListener('DOMContentLoaded', initViz)