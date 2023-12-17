const button = document.querySelector(".js-button");
      const hiddenDiv = document.querySelector(".hidden-div");
      const button2 = document.querySelector(".js-button2");
      const hiddenDiv2 = document.querySelector(".hidden-div2");

      function handleMouseOut() {
        hiddenDiv.style.display = "none";
        hiddenDiv2.style.display = "none";
      }

      handleMouseOut();

      button.addEventListener("mouseover", function handleMouseOver() {
        hiddenDiv.style.display = "block";
      });

      button.addEventListener("mouseout", function handleMouseOut() {
        hiddenDiv.style.display = "none";
      });

      handleMouseOut();

      button2.addEventListener("mouseover", function handleMouseOver() {
        hiddenDiv2.style.display = "block";
      });

      button2.addEventListener("mouseout", function handleMouseOut() {
        hiddenDiv2.style.display = "none";
      });