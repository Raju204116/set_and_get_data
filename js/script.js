

        // GET ALL RECORDS FROM STORAGE
        function getAllRecords() {
            return JSON.parse(localStorage.getItem("records")) || [];
        }

        // ADD RECORD
        function addRecord() {
            let name = document.getElementById("name").value;
            let email = document.getElementById("email").value;
            let phone = document.getElementById("phone").value;
            let key = document.getElementById("key").value;

            if (!key) {
                alert("Key is required!");
                return;
            }

            let records = getAllRecords();

            // check duplicate key
            if (records.find(r => r.key === key)) {
                alert("Key already exists!");
                return;
            }

            records.push({ key, name, email, phone });

            localStorage.setItem("records", JSON.stringify(records));

            alert("Saved!");
            loadAllRecords();
        }

        // GET SINGLE RECORD
        function getRecord() {
            let searchKey = document.getElementById("searchKey").value;
            let records = getAllRecords();

            let result = records.find(r => r.key === searchKey);

            let resultDiv = document.getElementById("result");

            if (!result) {
                resultDiv.innerHTML = "❌ Not found";
                return;
            }

            resultDiv.innerHTML = `
    <strong>Name:</strong> ${result.name}<br>
    <strong>Email:</strong> ${result.email}<br>
    <strong>Phone:</strong> ${result.phone}
  `;
        }

        // LOAD TABLE
        function loadAllRecords() {
            let records = getAllRecords();
            let tableBody = document.querySelector("#recordsTable tbody");

            tableBody.innerHTML = "";

            records.forEach((r, index) => {
                tableBody.innerHTML += `
      <tr>
        <td>${r.key}</td>
        <td>${r.name}</td>
        <td>${r.email}</td>
        <td>${r.phone}</td>
        <td>
          <button onclick="deleteRecord(${index})">Delete</button>
        </td>
      </tr>
    `;
            });
        }

        // DELETE
        function deleteRecord(index) {
            let records = getAllRecords();
            records.splice(index, 1);

            localStorage.setItem("records", JSON.stringify(records));
            loadAllRecords();
        }

        // LOAD ON START
        window.onload = loadAllRecords;

    
