document.addEventListener("DOMContentLoaded", function () {
    // Profile management
    const profiles = [];
    
    document.getElementById("create-profile").addEventListener("click", function () {
        const name = document.getElementById("name").value;
        const role = document.getElementById("role").value;
        const age = document.getElementById("age").value;

        const profile = { name, role, age };
        profiles.push(profile);
        updateProfileList();
        document.getElementById("profile-form").reset();
    });

    function updateProfileList() {
        const profileList = document.getElementById("profile-list");
        profileList.innerHTML = "";
        profiles.forEach((profile) => {
            const li = document.createElement("li");
            li.textContent = `${profile.name} (${profile.role}, Age: ${profile.age})`;
            profileList.appendChild(li);
        });
    }

    // Health Records management
    const healthRecords = [];

    document.getElementById("add-health-record").addEventListener("click", function () {
        const condition = document.getElementById("condition").value;
        const medication = document.getElementById("medication").value;
        const allergy = document.getElementById("allergy").value;

        const healthRecord = { condition, medication, allergy };
        healthRecords.push(healthRecord);
        updateHealthRecordsList();
        document.getElementById("health-record-form").reset();
    });

    function updateHealthRecordsList() {
        const healthRecordsList = document.getElementById("health-records-list");
        healthRecordsList.innerHTML = "";
        healthRecords.forEach((record) => {
            const li = document.createElement("li");
            li.textContent = `Condition: ${record.condition}, Medication: ${record.medication}, Allergy: ${record.allergy}`;
            healthRecordsList.appendChild(li);
        });
    }

    // Mental Health Tracking
    const mentalHealthLogs = [];

    document.getElementById("track-mental-health").addEventListener("click", function () {
        const mood = document.getElementById("mood").value;
        const substanceUsed = document.getElementById("substance-use").value;

        const mentalHealthLog = { mood, substanceUsed };
        mentalHealthLogs.push(mentalHealthLog);
        updateMentalHealthLogs();
        document.getElementById("mental-health-form").reset();
    });

    function updateMentalHealthLogs() {
        const mentalHealthLogsList = document.getElementById("mental-health-logs");
        mentalHealthLogsList.innerHTML = "";
        mentalHealthLogs.forEach((log) => {
            const li = document.createElement("li");
            li.textContent = `Mood: ${log.mood}, Substance Used: ${log.substanceUsed}`;
            mentalHealthLogsList.appendChild(li);
        });
    }

    // Growth Tracking
    const growthRecords = [];

    document.getElementById("add-growth").addEventListener("click", function () {
        const height = parseFloat(document.getElementById("height").value);
        const weight = parseFloat(document.getElementById("weight").value);

        const growthRecord = { height, weight };
        growthRecords.push(growthRecord);
        updateGrowthRecordsList();
        document.getElementById("growth-form").reset();
        updateGrowthGraph();
    });

    function updateGrowthRecordsList() {
        const growthList = document.getElementById("growth-list");
        growthList.innerHTML = "";
        growthRecords.forEach((record) => {
            const li = document.createElement("li");
            li.textContent = `Height: ${record.height} cm, Weight: ${record.weight} kg`;
            growthList.appendChild(li);
        });
    }

    function updateGrowthGraph() {
        const ctx = document.getElementById('growth-graph').getContext('2d');
        const labels = growthRecords.map((_, index) => index + 1);
        const heights = growthRecords.map(record => record.height);
        const weights = growthRecords.map(record => record.weight);
        
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [
                    {
                        label: 'Height (cm)',
                        data: heights,
                        borderColor: 'blue',
                        fill: false,
                    },
                    {
                        label: 'Weight (kg)',
                        data: weights,
                        borderColor: 'green',
                        fill: false,
                    }
                ]
            }
        });
    }

    // Medication Tracking
    const medications = [];

    document.getElementById("add-medication").addEventListener("click", function () {
        const category = document.getElementById("med-category").value;
        const name = document.getElementById("med-name").value;

        const medication = { category, name };
        medications.push(medication);
        updateMedicationsList();
        document.getElementById("medication-form").reset();
    });

    function updateMedicationsList() {
        const medicationsList = document.getElementById("medications-list");
        medicationsList.innerHTML = "";
        medications.forEach((med) => {
            const li = document.createElement("li");
            li.textContent = `${med.category}: ${med.name}`;
            medicationsList.appendChild(li);
        });
    }

    // Nutrition Tracking
    const nutritionLogs = [];

    document.getElementById("add-nutrition").addEventListener("click", function () {
        const foodItem = document.getElementById("food-item").value;
        const calories = parseFloat(document.getElementById("calories").value);

        const nutritionLog = { foodItem, calories };
        nutritionLogs.push(nutritionLog);
        updateNutritionList();
        document.getElementById("nutrition-form").reset();
    });

    function updateNutritionList() {
        const nutritionList = document.getElementById("nutrition-list");
        nutritionList.innerHTML = "";
        nutritionLogs.forEach((log) => {
            const li = document.createElement("li");
            li.textContent = `${log.foodItem}: ${log.calories} calories`;
            nutritionList.appendChild(li);
        });
    }

    // Sleep Tracking
    const sleepLogs = [];

    document.getElementById("add-sleep").addEventListener("click", function () {
        const hoursSlept = parseFloat(document.getElementById("sleep-hours").value);
        const quality = parseInt(document.getElementById("sleep-quality").value);

        const sleepLog = { hoursSlept, quality };
        sleepLogs.push(sleepLog);
        updateSleepList();
        document.getElementById("sleep-form").reset();
    });

    function updateSleepList() {
        const sleepList = document.getElementById("sleep-list");
        sleepList.innerHTML = "";
        sleepLogs.forEach((log) => {
            const li = document.createElement("li");
            li.textContent = `${log.hoursSlept} hours, Quality: ${log.quality}`;
            sleepList.appendChild(li);
        });
    }

    // Exercise Log
    const exerciseLogs = [];

    document.getElementById("add-exercise").addEventListener("click", function () {
        const exerciseName = document.getElementById("exercise-name").value;
        const duration = parseFloat(document.getElementById("exercise-duration").value);

        const exerciseLog = { exerciseName, duration };
        exerciseLogs.push(exerciseLog);
        updateExerciseList();
        document.getElementById("exercise-form").reset();
    });

    function updateExerciseList() {
        const exerciseList = document.getElementById("exercise-list");
        exerciseList.innerHTML = "";
        exerciseLogs.forEach((log) => {
            const li = document.createElement("li");
            li.textContent = `${log.exerciseName}: ${log.duration} minutes`;
            exerciseList.appendChild(li);
        });
    }

    // Daily Affirmations
    const affirmations = [
        "You are enough.",
        "Believe in yourself.",
        "Today is a fresh start.",
        "You are capable of amazing things.",
        "Your potential is limitless."
    ];

    document.getElementById("get-affirmation").addEventListener("click", function () {
        const randomIndex = Math.floor(Math.random() * affirmations.length);
        document.getElementById("affirmation-text").textContent = affirmations[randomIndex];
    });

    // Community Support
    const forumPosts = [];

    document.getElementById("add-forum-post").addEventListener("click", function () {
        const post = document.getElementById("forum-post").value;

        if (post) {
            forumPosts.push(post);
            updateForumPostsList();
            document.getElementById("support-form").reset();
        }
    });

    function updateForumPostsList() {
        const forumPostsList = document.getElementById("forum-posts-list");
        forumPostsList.innerHTML = "";
        forumPosts.forEach((post) => {
            const li = document.createElement("li");
            li.textContent = post;
            forumPostsList.appendChild(li);
        });
    }

    // Emergency Contacts
    const emergencyContacts = [];

    document.getElementById("add-emergency-contact").addEventListener("click", function () {
        const name = document.getElementById("contact-name").value;
        const phone = document.getElementById("contact-phone").value;

        const contact = { name, phone };
        emergencyContacts.push(contact);
        updateEmergencyContactsList();
        document.getElementById("emergency-contact-form").reset();
    });

    function updateEmergencyContactsList() {
        const emergencyContactsList = document.getElementById("emergency-contacts-list");
        emergencyContactsList.innerHTML = "";
        emergencyContacts.forEach((contact) => {
            const li = document.createElement("li");
            li.textContent = `${contact.name}: ${contact.phone}`;
            emergencyContactsList.appendChild(li);
        });
    }

    // Immunization Records
    const immunizationRecords = [];

    document.getElementById("add-vaccine").addEventListener("click", function () {
        const vaccineName = document.getElementById("vaccine-name").value;
        const vaccinationDate = document.getElementById("vaccination-date").value;

        const immunizationRecord = { vaccineName, vaccinationDate };
        immunizationRecords.push(immunizationRecord);
        updateImmunizationList();
        document.getElementById("immunization-form").reset();
    });

    function updateImmunizationList() {
        const immunizationList = document.getElementById("immunization-list");
        immunizationList.innerHTML = "";
        immunizationRecords.forEach((record) => {
            const li = document.createElement("li");
            li.textContent = `${record.vaccineName} - Date: ${record.vaccinationDate}`;
            immunizationList.appendChild(li);
        });
    }

    // Health Risk Assessment
    document.getElementById("assess-risk").addEventListener("click", function () {
        const riskFactor = document.getElementById("risk-factor").value;
        let riskAssessment = "";

        switch (riskFactor) {
            case "smoking":
                riskAssessment = "High risk of lung disease.";
                break;
            case "obesity":
                riskAssessment = "Increased risk of diabetes and heart disease.";
                break;
            case "hypertension":
                riskAssessment = "High risk of heart attack and stroke.";
                break;
            case "diabetes":
                riskAssessment = "Manage diet and exercise.";
                break;
            default:
                riskAssessment = "Unknown risk factor.";
        }

        document.getElementById("risk-result").textContent = riskAssessment;
    });

    // Telehealth Integration
    document.getElementById("contact-therapist").addEventListener("click", function () {
        alert("Contacting your therapist...");
    });
});
