
function addButton() {
    const container = document.querySelector('.ytp-left-controls');
    const button = document.createElement('button');
    //CSS----------------------------------------------------------------------------------------------
    button.innerText = 'Add to No1se Side';
    button.style.marginLeft = '10px';
    button.style.boxShadow = "inset 0px 1px 0px 0px #f29c93";
    button.style.background = "linear-gradient(to bottom, #000000 5%, #e64a4a 100%)";
    button.style.backgroundColor = "#000000";
    button.style.borderRadius = "6px";
    button.style.border = "1px solid #000000";
    button.style.display = "inline-block";
    button.style.cursor = "pointer";
    button.style.color = "#ffffff";
    button.style.fontFamily = "Arial";
    button.style.fontSize = "15px";
    button.style.fontWeight = "bold";
    button.style.padding = "6px 24px";
    button.style.textDecoration = "none";
    button.style.textShadow = "0px 1px 0px #000000";
    button.addEventListener("mouseover", function() {
      button.style.background = "linear-gradient(to bottom, #e64a4a 5%, #000000 100%)";
      button.style.backgroundColor = "#e64a4a";
    });
    button.addEventListener("mousedown", function() {
      button.style.position = "relative";
      button.style.top = "1px";
    });
    //CSS----------------------------------------------------------------------------------------------
    button.addEventListener('click', function() {
      const videoUrl = window.location.href;
      const discordUrl = 'DISCORD_WEBHOOK_HERE';
      
      const data = {
        content: videoUrl,
        username: '🧠no1se-youtube-recommended Extension🧠',
        avatar_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/US_Department_of_Defense_seal.svg/800px-US_Department_of_Defense_seal.svg.png'
      };
      const xhr = new XMLHttpRequest();
      xhr.open('POST', discordUrl);
      xhr.setRequestHeader('Content-Type', 'application/json');
      xhr.send(JSON.stringify(data));
      alert('Video added to No1se Side!');
    });
    container.appendChild(button);
  }
  
  if (document.readyState === 'complete') {
    addButton();
  } else {
    window.addEventListener('load', addButton);
  }
  
 


