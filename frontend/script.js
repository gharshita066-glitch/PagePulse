async function auditWebsite() {

    const url = document.getElementById("url").value;

    if (!url) {
        alert("Please enter a website URL.");
        return;
    }

    const result = document.getElementById("result");

    result.innerHTML = `
        <div class="card">
            <h3>⏳ Auditing Website...</h3>
            <p>Please wait a moment.</p>
        </div>
    `;

    try {

        const response = await fetch("https://pagepulse-iq45.onrender.com/audit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ url })
        });

        const data = await response.json();
        if (!response.ok) {
    result.innerHTML = `
        <div class="card">
            <h3>❌ Error</h3>
            <p>${data.error}</p>
        </div>
    `;
    return;
}

        result.innerHTML = `
            <div class="card">
                <h3>✅ Status</h3>
                <p>${data.status}</p>
            </div>

            <div class="card">
                <h3>⚡ Response Time</h3>
                <p>${data.responseTime}</p>
            </div>

            <div class="card">
                <h3>📝 Title</h3>
                <p>${data.title}</p>
            </div>

            <div class="card">
                <h3>📄 Meta Description</h3>
                <p>${data.metaDescription}</p>
            </div>

            <div class="card">
                <h3>🔖 H1 Count</h3>
                <p>${data.h1Count}</p>
            </div>

            <div class="card">
                <h3>🖼️ Images Without Alt</h3>
                <p>${data.imagesWithoutAlt}</p>
            </div>

            <div class="card">
                <h3>📚 Word Count</h3>
                <p>${data.wordCount}</p>
            </div>
        `;

    } catch (error) {

        result.innerHTML = `
            <div class="card">
                <h3>❌ Error</h3>
                <p>${error.message}</p>
            </div>
        `;

    }
}