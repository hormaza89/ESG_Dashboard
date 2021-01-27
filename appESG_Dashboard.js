const containerDiv = document.getElementById('vizContainer');
const url_ESG = 'https://public.tableau.com/views/SP500IndexESGandComponentsPerformance/SP500?:language=en&:display_count=y&:toolbar=n&:origin=viz_share_link'



const options = {
    
    height: 900,
    width: 1425,
    onFirstInteractive: function() {
        console.log("Hey, my dashboard is ready");
    }
}

function initViz() {
    let viz = new tableau.Viz(containerDiv, url_ESG, options)
}

document.addEventListener('DOMContentLoaded', initViz)