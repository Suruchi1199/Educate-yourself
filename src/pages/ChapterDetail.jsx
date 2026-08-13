import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";
import { fetchChaptersBySubject, fetchVisualizationsByChapter } from "../data/api";
import VisualizationDisplay from "../components/VisualizationDisplay";
import "../styles/chapterdetail.css";

export default function ChapterDetail() {
  const { classId, subjectId, chapterId } = useParams();
  const { authenticatedFetch } = useAuth();
  const navigate = useNavigate();

  const [chapter, setChapter] = useState(null);
  const [visualizations, setVisualizations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadChapterAndVisualizations = async () => {
      try {
        setLoading(true);
        setError(null);

        // Fetch chapters to find the selected one
        const chapters = await fetchChaptersBySubject(subjectId, authenticatedFetch);
        const selectedChapter = chapters.find(
          (c) => String(c.id) === String(chapterId)
        );

        if (!selectedChapter) {
          setError("Chapter not found");
          setLoading(false);
          return;
        }

        setChapter(selectedChapter);

        // Fetch visualizations for this chapter
        const vizs = await fetchVisualizationsByChapter(chapterId, authenticatedFetch);
        setVisualizations(vizs);
      } catch (err) {
        console.error("Error loading chapter details:", err);
        setError(err.message || "Failed to load chapter details");
      } finally {
        setLoading(false);
      }
    };

    loadChapterAndVisualizations();
  }, [chapterId, subjectId, authenticatedFetch]);

  if (loading) {
    return (
      <div className="chapter-detail loading">
        <p>Loading chapter...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="chapter-detail error">
        <div className="error-message">
          <p>Error: {error}</p>
          <Link to={`/classes/${classId}/${subjectId}`}>← Back to subject</Link>
        </div>
      </div>
    );
  }

  if (!chapter) {
    return (
      <div className="chapter-detail not-found">
        <div className="error-message">
          <p>Chapter not found</p>
          <Link to={`/classes/${classId}/${subjectId}`}>← Back to subject</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="chapter-detail">
      <div className="chapter-header">
        <Link to={`/classes/${classId}/${subjectId}`} className="back-link">
          ← Back to subject
        </Link>
        <div className="chapter-title-section">
          <h1>Chapter {chapter.chapterNumber}: {chapter.title}</h1>
          {chapter.description && (
            <p className="chapter-description">{chapter.description}</p>
          )}
        </div>
      </div>

      <div className="chapter-content-wrapper">
        {/* Left side: Theory Content (placeholder for future) */}
        <div className="theory-section">
          <div className="theory-placeholder">
            <h2>Theory Content</h2>
            <p>Theory content will be displayed here soon...</p>
            <p className="theory-description">
              The detailed explanation of the chapter topic will appear in this section.
            </p>
          </div>
        </div>

        {/* Right side: Visualizations */}
        <div className="visualization-section">
          <VisualizationDisplay visualizations={visualizations} />
        </div>
      </div>
    </div>
  );
}
