// Example script for dynamically showing NGOs
const ngos = [
  {
    name: "Helping Hands Foundation",
    cause: "Education for Underprivileged Children",
    target: 50000,
    collected: 35000
  },
  {
    name: "Green Planet Trust",
    cause: "Tree Plantation Drive",
    target: 30000,
    collected: 18000
  }
];

const ngoList = document.getElementById("ngoList");

ngos.forEach(ngo => {
  const card = document.createElement("div");
  card.className = "ngo-card";
  card.innerHTML = `
    <h3>${ngo.name}</h3>
    <p><strong>Cause:</strong> ${ngo.cause}</p>
    <p><strong>Target:</strong> ₹${ngo.target}</p>
    <p><strong>Collected:</strong> ₹${ngo.collected}</p>
    <button class="donate">Donate</button>
    <button class="edit">Edit</button>
    <button class="delete">Delete</button>
  `;
  ngoList.appendChild(card);
});
