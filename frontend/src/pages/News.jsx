
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./News.css";

import { useSettings } from "../context/SettingsContext";

const API_URL = "https://cyberverse.fastapicloud.dev/api/v1";

function News() {

  const navigate = useNavigate();

  const { language } = useSettings();

  const isArabic = language === "ar";


  const [news, setNews] = useState([]);
  const [featuredNews, setFeaturedNews] = useState([]);
  const [categories, setCategories] = useState([]);

  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSeverity, setSelectedSeverity] = useState("");

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");


  // =========================
  // Get categories
  // =========================

  useEffect(() => {

    fetch(`${API_URL}/news/categories`)

      .then((response) => {

        if (!response.ok) {
          throw new Error("Failed to fetch categories");
        }

        return response.json();

      })

      .then((data) => {

        setCategories(data);

      })

      .catch((err) => {

        console.error(err);

      });

  }, []);


  // =========================
  // Get featured news
  // =========================

  useEffect(() => {

    fetch(`${API_URL}/news/featured`)

      .then((response) => {

        if (!response.ok) {
          throw new Error("Failed to fetch featured news");
        }

        return response.json();

      })

      .then((data) => {

        setFeaturedNews(data);

      })

      .catch((err) => {

        console.error(err);

      });

  }, []);


  // =========================
  // Get news whenever filters change
  // =========================

  useEffect(() => {

    setLoading(true);
    setError("");

    const params = new URLSearchParams();


    if (selectedCategory) {

      params.append(
        "category",
        selectedCategory
      );

    }


    if (selectedSeverity) {

      params.append(
        "severity",
        selectedSeverity
      );

    }


    const queryString = params.toString();


    const url = queryString
      ? `${API_URL}/news?${queryString}`
      : `${API_URL}/news`;


    fetch(url)

      .then((response) => {

        if (!response.ok) {
          throw new Error("Failed to fetch news");
        }

        return response.json();

      })

      .then((data) => {

        setNews(data);
        setLoading(false);

      })

      .catch((err) => {

        console.error(err);

        setError(
          isArabic
            ? "فشل تحميل الأخبار السيبرانية."
            : "Failed to load cybersecurity news."
        );

        setLoading(false);

      });

  }, [selectedCategory, selectedSeverity, isArabic]);


  // =========================
  // Clear filters
  // =========================

  const clearFilters = () => {

    setSelectedCategory("");
    setSelectedSeverity("");

  };


  return (

    <>

      <Navbar />


      <div className="news-page">


        {/* =========================
            Header
        ========================= */}

        <div className="news-header">

          <h1>

            {isArabic
              ? "أخبار CyberVerse 📰"
              : "CyberVerse News 📰"}

          </h1>


          <p>

            {isArabic
              ? "ابقَ على اطلاع بأحدث أخبار الأمن السيبراني والتهديدات والاتجاهات الأمنية."
              : "Stay updated with the latest cybersecurity news, threats and security trends."}

          </p>

        </div>


        {/* =========================
            Featured News
        ========================= */}

        {featuredNews.length > 0 && (

          <section className="featured-news">


            <div className="featured-title">

              <h2>

                {isArabic
                  ? "⭐ أهم الأخبار السيبرانية"
                  : "⭐ Featured Cybersecurity News"}

              </h2>


              <p>

                {isArabic
                  ? "أهم القصص والأخبار السيبرانية المختارة من CyberVerse."
                  : "Important cybersecurity stories selected by CyberVerse."}

              </p>

            </div>


            <div className="featured-grid">


              {featuredNews.map((item) => (

                <article
                  className="featured-card"
                  key={item.id}
                >


                  <div className="featured-card-top">


                    <span className="featured-badge">

                      {isArabic
                        ? "⭐ مميز"
                        : "⭐ FEATURED"}

                    </span>


                    <span
                      className={`severity ${item.severity?.toLowerCase()}`}
                    >

                      {item.severity}

                    </span>


                  </div>


                  <div className="featured-icon">

                    🛡️

                  </div>


                  <h2>

                    {item.title}

                  </h2>


                  <p>

                    {item.summary}

                  </p>


                  <div className="featured-card-footer">


                    <span>

                      📂 {item.category}

                    </span>


                    <button
                      onClick={() =>
                        navigate(`/news/${item.id}`)
                      }
                    >

                      {isArabic
                        ? "اقرأ المزيد ←"
                        : "Read More →"}

                    </button>


                  </div>


                </article>

              ))}


            </div>


          </section>

        )}


        {/* =========================
            Filters
        ========================= */}

        <div className="news-filters">


          <div className="filter-group">

            <label>

              {isArabic
                ? "التصنيف"
                : "Category"}

            </label>


            <select
              value={selectedCategory}
              onChange={(e) =>
                setSelectedCategory(e.target.value)
              }
            >

              <option value="">

                {isArabic
                  ? "جميع التصنيفات"
                  : "All Categories"}

              </option>


              {categories.map((item) => (

                <option
                  key={item.category}
                  value={item.category}
                >

                  {item.category}

                </option>

              ))}


            </select>


          </div>


          <div className="filter-group">


            <label>

              {isArabic
                ? "الخطورة"
                : "Severity"}

            </label>


            <select
              value={selectedSeverity}
              onChange={(e) =>
                setSelectedSeverity(e.target.value)
              }
            >


              <option value="">

                {isArabic
                  ? "جميع مستويات الخطورة"
                  : "All Severities"}

              </option>


              <option value="Critical">

                {isArabic
                  ? "حرج"
                  : "Critical"}

              </option>


              <option value="High">

                {isArabic
                  ? "عالي"
                  : "High"}

              </option>


              <option value="Medium">

                {isArabic
                  ? "متوسط"
                  : "Medium"}

              </option>


              <option value="Low">

                {isArabic
                  ? "منخفض"
                  : "Low"}

              </option>


            </select>


          </div>


          {(selectedCategory || selectedSeverity) && (

            <button
              className="clear-filters"
              onClick={clearFilters}
            >

              {isArabic
                ? "مسح الفلاتر"
                : "Clear Filters"}

            </button>

          )}


        </div>


        {/* =========================
            Loading
        ========================= */}

        {loading && (

          <div className="news-message">


            <div className="loader"></div>


            <p>

              {isArabic
                ? "جاري تحميل الأخبار السيبرانية..."
                : "Loading cybersecurity news..."}

            </p>


          </div>

        )}


        {/* =========================
            Error
        ========================= */}

        {error && (

          <div className="news-message error">


            <p>

              {error}

            </p>


            <small>

              {isArabic
                ? "تأكد من تشغيل خادم FastAPI."
                : "Make sure the FastAPI backend is running."}

            </small>


          </div>

        )}


        {/* =========================
            No Results
        ========================= */}

        {!loading &&
          !error &&
          news.length === 0 && (

            <div className="news-message">

              <p>

                {isArabic
                  ? "لم يتم العثور على أخبار للفلاتر المحددة."
                  : "No news found for the selected filters."}

              </p>

            </div>

          )}


        {/* =========================
            News Cards
        ========================= */}

        {!loading &&
          !error &&
          news.length > 0 && (

            <div className="news-grid">


              {news.map((item) => (

                <article
                  className="news-card"
                  key={item.id}
                >


                  <div className="news-card-top">


                    <span
                      className={`severity ${item.severity?.toLowerCase()}`}
                    >

                      {item.severity ||
                        (isArabic
                          ? "غير معروف"
                          : "Unknown")}

                    </span>


                    {item.is_featured && (

                      <span className="featured">

                        {isArabic
                          ? "⭐ مميز"
                          : "⭐ Featured"}

                      </span>

                    )}


                  </div>


                  <div className="news-icon">

                    🛡️

                  </div>


                  <h2>

                    {item.title}

                  </h2>


                  <p className="summary">

                    {item.summary}

                  </p>


                  <div className="news-info">


                    <span>

                      📂{" "}

                      {item.category ||
                        (isArabic
                          ? "عام"
                          : "General")}

                    </span>


                    <span>

                      📰{" "}

                      {item.source ||
                        "CyberVerse"}

                    </span>


                  </div>


                  <div className="news-footer">


                    <span>

                      🕒{" "}

                      {item.published_at

                        ? new Date(
                            item.published_at
                          ).toLocaleDateString(
                            isArabic
                              ? "ar-IQ"
                              : "en-US"
                          )

                        : isArabic
                          ? "حديثاً"
                          : "Recently"}

                    </span>


                    <button
                      className="read-more"
                      onClick={() =>
                        navigate(`/news/${item.id}`)
                      }
                    >

                      {isArabic
                        ? "اقرأ المزيد ←"
                        : "Read More →"}

                    </button>


                  </div>


                </article>

              ))}


            </div>

          )}


      </div>

    </>

  );

}


export default News;

