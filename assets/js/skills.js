// Sample JSON data containing image information
var jsonData = [
    {
        "src": "/assets/images/html.png",
        "width": "60",
        "alt": "HTML"
    },
    {
        "src": "/assets/images/css.png",
        "width": "60",
        "alt": "CSS"
    },
    {
        "src": "/assets/images/js.png",
        "width": "50",
        "alt": "JAVASCRIPT"
    },
    {
        "src": "/assets/images/bootstrap.png",
        "width": "60",
        "alt": "BOOTSTRAP"
    },
    {
        "src": "/assets/images/express.png",
        "width": "50",
        "alt": "EXPRESS JS"
    },
    {
        "src": "/assets/images/java.png",
        "width": "50",
        "alt": "JAVA"
    },
    {
        "src": "/assets/images/mongo.png",
        "width": "50",
        "alt": "MONGO DB"
    },
    {
        "src": "/assets/images/php.png",
        "width": "60",
        "alt": "PHP"
    },
    {
        "src": "/assets/images/reactjs.png",
        "width": "60",
        "alt": "REACT JS"
    },
    {
        "src": "/assets/images/tailwind.png",
        "width": "70",
        "alt": "TAILWIND"
    },
    {
        "src": "/assets/images/sql.png",
        "width": "50",
        "alt": "MYSQL"
    },
    {
        "src": "/assets/images/node.png",
        "width": "60",
        "alt": "NODE JS"
    },
    {
        "src": "/assets/images/joomla.png",
        "width": "50",
        "alt": "JOOMLA"
    },
    {
        "src": "/assets/images/wordpress.png",
        "width": "70",
        "alt": "WORDPRESS"
    },
    {
        "src": "/assets/images/nextjs.png",
        "width": "60",
        "alt": "NEXT JS"
    },
    {
        "src": "/assets/images/webflow.png",
        "width": "50",
        "alt": "WEBFLOW"
    },
    {
        "src": "/assets/images/figma.png",
        "width": "50",
        "alt": "FIGMA"
    },
    {
        "src": "/assets/images/photoshop.png",
        "width": "50",
        "alt": "PHOTOSHOP"
    },
    {
        "src": "/assets/images/illustrator.png",
        "width": "50",
        "alt": "ILLUSTRATOR"
    },
    {
        "src": "/assets/images/python.png",
        "width": "50",
        "alt": "PYTHON"
    },
    {
        "src": "/assets/images/typescript.png",
        "width": "50",
        "alt": "TYPESCRIPT"
    },
    {
        "src": "/assets/images/firebase.png",
        "width": "50",
        "alt": "FIREBASE"
    },
    {
        "src": "/assets/images/git.png",
        "width": "50",
        "alt": "GIT"
    }
]

// Function to generate the HTML structure for each image
function generateImageHTML(imageData) {
    // Create the hexatab div
    var hexatabDiv = document.createElement("div");
    hexatabDiv.classList.add("hexatab");

    // Create the SVG element
    var svgElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svgElement.setAttribute("viewBox", "0 0 165 179");
    svgElement.setAttribute("fill", "none");

    // Create the path element inside SVG
    var pathElement = document.createElementNS("http://www.w3.org/2000/svg", "path");
    pathElement.setAttribute("d", "M82 2L1 45.5V133L82.5 177L164 133V46L82 2Z");
    // pathElement.setAttribute("stroke", "white");
    pathElement.setAttribute("stroke-width", "3");

    // Append path element to SVG
    svgElement.appendChild(pathElement);

    // Create the img element
    var imgElement = document.createElement("img");
    imgElement.setAttribute("width", imageData.width);
    imgElement.setAttribute("src", imageData.src);
    imgElement.setAttribute("alt", imageData.alt);

    // Append SVG and img elements to hexatab div
    hexatabDiv.appendChild(svgElement);
    hexatabDiv.appendChild(imgElement);

    // Return the generated HTML structure
    return hexatabDiv;
}

// Function to generate HTML structure for each image data in the JSON
function generateHTMLFromJSON(jsonData) {
    // Iterate over each image data object in the JSON
    jsonData.forEach(function(imageData) {
        // Generate HTML structure for the current image data
        var imageHTML = generateImageHTML(imageData);

        // Append the generated HTML structure to the document body
        // document.body.appendChild(imageHTML);
        document.getElementById('hexas').appendChild(imageHTML)
    });
}

// Call the function to generate HTML structure from JSON data
generateHTMLFromJSON(jsonData);
document.querySelectorAll('.hexas .hexatab').forEach((hexa)=>{
    hexa.addEventListener('mouseenter',(e)=>{
        const name = e.target.querySelector('img').getAttribute('alt');
        document.querySelector('.displayer').textContent = name;
        gsap.to('.displayer',{
            opacity:1,
            duration: 1.3,
            ease: Power1
        })

    })
    hexa.addEventListener('mouseout',(e)=>{
        gsap.to('.displayer',{
            opacity:0,
            duration: 1.3,
            ease: Power1
        })
    })
   
})