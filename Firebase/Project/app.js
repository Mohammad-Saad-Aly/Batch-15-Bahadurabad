import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  updateDoc,
  doc,
  getDoc,
  Timestamp,
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDit2vDrw7kB8zhJmkh8Du53_VaCD4ti_4",
  authDomain: "ho-batch15.firebaseapp.com",
  projectId: "ho-batch15",
  storageBucket: "ho-batch15.firebasestorage.app",
  messagingSenderId: "614730696227",
  appId: "1:614730696227:web:90660dcfb4b53d6072d396",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const getItemDiv = document.getElementById("items");
let currentEditId = null;

// Add Item
document.getElementById("addItem").addEventListener("click", async () => {
  let itemName = document.getElementById("item-name").value;
  let itemPrice = document.getElementById("item-price").value;
  let itemDes = document.getElementById("item-des").value;
  let itemURL = document.getElementById("item-url").value;

  try {
    await addDoc(collection(db, "items"), {
      itemName,
      itemPrice,
      itemDes,
      itemURL,
      createdAt: Timestamp.now(),
    });
    document.getElementById("item-name").value = "";
    document.getElementById("item-price").value = "";
    document.getElementById("item-des").value = "";
    document.getElementById("item-url").value = "";
    bootstrap.Modal.getInstance(document.getElementById("addModal")).hide();
    fetchItems();
  } catch (e) {
    console.error("Error adding item:", e);
  }
});

// Fetch Items
async function fetchItems() {
  getItemDiv.innerHTML = "";
  const querySnapshot = await getDocs(collection(db, "items"));
  querySnapshot.forEach((docSnap) => {
    let data = docSnap.data();
    getItemDiv.innerHTML += `
      <div class="card" style="width: 18rem;">
        <img src="${data.itemURL}" class="card-img-top" alt="...">
        <div class="card-body text-center">
          <h5 class="card-title">${data.itemName}</h5>
          <p class="card-text">${data.itemDes}</p>
          <p class="card-text">${data.itemPrice}</p>
          <button onclick='editItem("${docSnap.id}")' class="btn btn-success" data-bs-toggle="modal" data-bs-target="#editModal">Edit</button>
          <button onclick='deleteItem("${docSnap.id}")' class="btn btn-danger mt-2">Delete</button>
        </div>
      </div>
    `;
  });
}

// Delete Item
window.deleteItem = async (id) => {
  await deleteDoc(doc(db, "items", id));
  fetchItems();
};

// Edit Item
window.editItem = async (id) => {
  const docRef = doc(db, "items", id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    const data = docSnap.data();
    currentEditId = id;
    document.getElementById("edit-item-name").value = data.itemName;
    document.getElementById("edit-item-price").value = data.itemPrice;
    document.getElementById("edit-item-des").value = data.itemDes;
    document.getElementById("edit-item-url").value = data.itemURL;
  }
};

// Save Edited Item
document.getElementById("saveChanges").addEventListener("click", async () => {
  if (!currentEditId) return;

  const updatedName = document.getElementById("edit-item-name").value;
  const updatedPrice = document.getElementById("edit-item-price").value;
  const updatedDes = document.getElementById("edit-item-des").value;
  const updatedURL = document.getElementById("edit-item-url").value;

  await updateDoc(doc(db, "items", currentEditId), {
    itemName: updatedName,
    itemPrice: updatedPrice,
    itemDes: updatedDes,
    itemURL: updatedURL,
  });

  currentEditId = null;
  bootstrap.Modal.getInstance(document.getElementById("editModal")).hide();
  fetchItems();
});

// Initial fetch
fetchItems();
