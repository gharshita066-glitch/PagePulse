const axios = require("axios");
const cheerio = require("cheerio");

const auditWebsite = async (req, res) => {
    const { url } = req.body;

    if (!url) {
        return res.status(400).json({
            error: "Please provide a URL"
        });
    }

    try {
        const start = Date.now();

        const response = await axios.get(url, {
            timeout: 10000,
            headers: {
                "User-Agent": "Mozilla/5.0"
            }
        });

        const responseTime = Date.now() - start;

        const $ = cheerio.load(response.data);

        const title = $("title").text();

        const metaDescription =
            $('meta[name="description"]').attr("content") || "Not Found";

        const h1Count = $("h1").length;

        const imagesWithoutAlt = $("img").filter(function () {
            return !$(this).attr("alt");
        }).length;

        const wordCount = $("body")
            .text()
            .trim()
            .split(/\s+/).length;

        res.json({
            status: response.status,
            responseTime: responseTime + " ms",
            title,
            metaDescription,
            h1Count,
            imagesWithoutAlt,
            wordCount
        });

    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
};

module.exports = { auditWebsite };