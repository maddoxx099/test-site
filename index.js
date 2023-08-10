document.addEventListener("DOMContentLoaded", function () {
  const speakerList = document.querySelector(".speaker-list");
  const speakers = [
    { name: "John Doe", topic: "Number Theory" },
    { name: "Jane Smith", topic: "Geometry" },
    { name: "Michael Johnson", topic: "Calculus" },
    // Add more speaker data here
  ];

  // Dynamically add speakers to the list
  speakers.forEach((speaker) => {
    const speakerItem = document.createElement("li");
    speakerItem.classList.add("speaker-item");
    speakerItem.innerHTML = `<strong>${speaker.name}</strong> - ${speaker.topic}`;
    speakerList.appendChild(speakerItem);
  });
});
