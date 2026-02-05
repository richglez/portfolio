"use client";
import { useEffect, useState } from "react";
import { FiGithub, FiExternalLink, FiStar, FiGitBranch } from "react-icons/fi";
import {motion, Variants} from "framer-motion"

interface GitHubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  topics: string[];
  updated_at: string;
}

export default function ProjectsSection() {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        // Reemplaza 'richglez' con tu username de GitHub
        const response = await fetch(
          "https://api.github.com/users/richglez/repos?sort=updated&per_page=6",
        );
        const data = await response.json();
        setRepos(data);
      } catch (error) {
        console.error("Error fetching repos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  const getLanguageColor = (language: string) => {
    const colors: { [key: string]: string } = {
      JavaScript: "bg-yellow-400",
      TypeScript: "bg-blue-400",
      Python: "bg-green-400",
      Java: "bg-red-400",
      HTML: "bg-orange-400",
      CSS: "bg-purple-400",
      Go: "bg-cyan-400",
      Rust: "bg-orange-600",
    };
    return colors[language] || "bg-gray-400";
  };

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800 animate-pulse"
          >
            <div className="h-6 bg-zinc-800 rounded w-3/4 mb-4"></div>
            <div className="h-4 bg-zinc-800 rounded w-full mb-2"></div>
            <div className="h-4 bg-zinc-800 rounded w-5/6"></div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <section
      id="projects"
      className="min-h-screen scroll-mt-24 pt-20 text-white px-75 "
    >
      <h2 className="text-6xl font-bold mb-4">Projects</h2>
      <p className="text-zinc-400 text-xl mb-8">
        Check out some of my recent work from GitHub
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {repos.map((repo) => (
          <div
            key={repo.id}
            className="group relative bg-linear-to-br from-zinc-900 to-zinc-950 rounded-2xl p-6 border border-zinc-800 hover:border-purple-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1"
          >
            {/* Gradient overlay on hover */}
            <div className="absolute inset-0 bg-linear-to-br from-purple-500/0 to-blue-500/0 group-hover:from-purple-500/5 group-hover:to-blue-500/5 rounded-2xl transition-all duration-300" />

            <div className="relative">
              {/* Header with language indicator */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-2">
                  <FiGithub className="text-xl text-zinc-400" />
                  {repo.language && (
                    <span className="flex items-center gap-2 text-xs text-zinc-400">
                      <span
                        className={`w-3 h-3 rounded-full ${getLanguageColor(
                          repo.language,
                        )}`}
                      />
                      {repo.language}
                    </span>
                  )}
                </div>
                <div className="flex gap-3 text-zinc-400 text-sm">
                  <span className="flex items-center gap-1">
                    <FiStar className="text-yellow-500" />
                    {repo.stargazers_count}
                  </span>
                  <span className="flex items-center gap-1">
                    <FiGitBranch />
                    {repo.forks_count}
                  </span>
                </div>
              </div>

              {/* Project name */}
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                {repo.name}
              </h3>

              {/* Description */}
              <p className="text-zinc-400 text-sm mb-4 line-clamp-2 min-h-10">
                {repo.description || "No description available"}
              </p>

              {/* Topics/Tags */}
              {repo.topics && repo.topics.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {repo.topics.slice(0, 3).map((topic) => (
                    <span
                      key={topic}
                      className="px-3 py-1 bg-zinc-800 text-purple-400 text-xs rounded-full border border-zinc-700"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              )}

              {/* Links */}
              <div className="flex gap-3 mt-6">
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-white rounded-lg transition-colors text-sm font-medium border border-zinc-700 hover:border-zinc-600"
                >
                  <FiGithub />
                  Code
                </a>
                {repo.homepage && (
                  <a
                    href={repo.homepage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors text-sm font-medium"
                  >
                    <FiExternalLink />
                    Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}


