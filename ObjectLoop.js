function loopFunction() {
    document.getElementById("imageContainer").innerHTML = "";
    assetMap.forEach(assetInspection);
}

function getAssetPropertyValue(asset, propertyName) {
    return asset[propertyName];
}

function getAssetPropertyValueIs(asset, propertyName, propertyValue) {
    return asset[propertyName] == propertyValue;
}

function assetInspection(assetObject, assetName, map) {
    if (document.getElementById("Style").value != assetObject.Style && document.getElementById("Style").value != "Any") {
        return;
    }
    if (document.getElementById("Type").value != assetObject.Type && document.getElementById("Type").value != "Any") {
        return;
    }
    if (document.getElementById("Size").value != assetObject.Size && document.getElementById("Size").value != "Any") {
        return;
    }
    if (document.getElementById("State").value != assetObject.State && document.getElementById("State").value != "Any") {
        return;
    }
    if (document.getElementById("Environment").value != assetObject.Environment && document.getElementById("Environment").value != "Any") {
        return;
    }
    if (document.getElementById("Biome").value != assetObject.Biome && document.getElementById("Biome").value != "Any") {
        return;
    }
    if (document.getElementById("Collection").value != assetObject.Collection && document.getElementById("Collection").value != "Any") {
        return;
    }
    if (document.getElementById("Color").value != assetObject.Color && document.getElementById("Color").value != "Any") {
        return;
    }
    addAssetToPage(assetObject, assetName);
}

function addOption(propertyName, value) {
    if (doesOptionExist(document.getElementById(propertyName), value)) return;
    if (propertyName == "Size") return;
    if (propertyName == "State") return;
    const option = document.createElement("option");
    option.value = value;
    option.text = value;

    document.getElementById(propertyName).add(option, null);
}

function addAssetValueToDrop(assetObject, assetName, map) {
    Object.keys(assetObject).forEach(key => {
        addOption(key, assetObject[key]);
    });
    loopFunction();
}

function doesOptionExist(selectObject, value) {
    for (let i = 0; i < selectObject.options.length; i++) {
        if (selectObject.options[i].value == value) return true;
    }
    return false;
}

function addAssetToPage(assetObject, assetName) {
    const container = document.createElement('div');
    container.classList.add('AssetContainer', 'sliding-in');
    container.id = assetName;

    const img = document.createElement('img');
    img.src = "./images/" + assetName + ".jpg";
    img.alt = 'Description of the image';
    img.style.width = '100%';
    img.style.height = 'auto';
    container.appendChild(img);

    const captionContainer = document.createElement('div'); // New container for the caption
    captionContainer.classList.add('caption-container');

    const caption = document.createElement('p');
    caption.textContent = assetName;
    caption.classList.add('asset-caption');
    captionContainer.appendChild(caption);

    container.appendChild(captionContainer);

    // Add click event listener to open the sidebar
    container.addEventListener('click', function() {
        openSidebar(assetObject, assetName);
    });

    document.getElementById("imageContainer").appendChild(container);
}


function openSidebar(assetObject, assetName) {
    const sidebar = document.getElementById('sidebar');

    // Create a container for the text content
    const contentContainer = document.createElement('div');
    contentContainer.classList.add('sidebar-content');

    // Create the image element
    const img = document.createElement('img');
    img.src = "./images/" + assetName + ".jpg";
    img.alt = 'Description of the image';
    img.style.width = '100%';
    img.style.height = 'auto';
    img.style.marginBottom = '10px'; // Adds space below the image
    img.classList.add('sidebar-image'); // Add this class to the image

    // Fill the content container with information
    contentContainer.innerHTML = `<h2>${assetName}</h2>
                                 <p>This text should be something about the object and a download button or something</p>`;

    // Add the close button and the image and the content container to the sidebar
    sidebar.innerHTML = '<button id="closeBtn" onclick="closeSidebar()">Close</button>';
    sidebar.appendChild(img); // Append the image above the content
    sidebar.appendChild(contentContainer);

    sidebar.style.display = 'block';
}

// Function to close the sidebar
function closeSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.style.display = 'none';
}

// Close the sidebar when clicking outside of it
document.addEventListener('click', function(event) {
    const sidebar = document.getElementById('sidebar');

    // Check if the click is outside the sidebar and not on the sidebar or its children
    if (sidebar.style.display === 'block' && !sidebar.contains(event.target) && !event.target.closest('.AssetContainer')) {
        closeSidebar();
    }
});

